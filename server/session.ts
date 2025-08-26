import session from 'express-session';
import ConnectPgSimple from 'connect-pg-simple';
import { Pool } from '@neondatabase/serverless';

const PgSession = ConnectPgSimple(session);

export function createSessionMiddleware() {
  const sessionSecret = process.env.SESSION_SECRET;
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!sessionSecret) {
    const fallbackSecret = 'fallback-secret-key-for-development';
    console.warn('⚠️ SESSION_SECRET not found. Using fallback secret (NOT SECURE FOR PRODUCTION)');
    
    if (process.env.NODE_ENV === 'production') {
      throw new Error('SESSION_SECRET is required in production');
    }
  }

  const sessionConfig: session.SessionOptions = {
    secret: sessionSecret || 'fallback-secret-key-for-development',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production', // Require HTTPS in production
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      sameSite: 'lax'
    }
  };

  // Use PostgreSQL session store if DATABASE_URL is available
  if (databaseUrl) {
    try {
      const pool = new Pool({ connectionString: databaseUrl });
      sessionConfig.store = new PgSession({
        pool: pool,
        tableName: 'session', // Use whatever table name you prefer
        createTableIfMissing: true
      });
      console.log('✅ Using PostgreSQL session store');
    } catch (error) {
      console.error('❌ Failed to setup PostgreSQL session store:', error);
      console.warn('Falling back to in-memory session store');
    }
  } else {
    console.warn('⚠️ DATABASE_URL not found. Using in-memory session store (sessions will not persist)');
  }

  return session(sessionConfig);
}