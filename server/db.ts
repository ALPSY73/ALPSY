import { drizzle, type NeonDatabase } from 'drizzle-orm/neon-serverless';
import { Pool } from '@neondatabase/serverless';
import { users, type InsertUser, type User } from '@shared/schema';
import { eq } from 'drizzle-orm';
import type { IStorage } from './storage';

let db: NeonDatabase | null = null;

export async function initializeDatabase(): Promise<NeonDatabase | null> {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    console.warn('DATABASE_URL not found. Using in-memory storage instead.');
    return null;
  }

  try {
    const pool = new Pool({ connectionString: databaseUrl });
    db = drizzle(pool);
    
    // Test the connection
    await pool.query('SELECT 1');
    console.log('✅ Database connection established successfully');
    
    return db;
  } catch (error) {
    console.error('❌ Failed to connect to database:', error);
    console.warn('Falling back to in-memory storage');
    return null;
  }
}

export function getDatabase(): NeonDatabase | null {
  return db;
}

// Database-backed storage implementation
export class DatabaseStorage implements IStorage {
  private db: NeonDatabase;

  constructor(database: NeonDatabase) {
    this.db = database;
  }

  async getUser(id: string): Promise<User | undefined> {
    try {
      const result = await this.db
        .select()
        .from(users)
        .where(eq(users.id, id))
        .limit(1);
      
      return result[0];
    } catch (error) {
      console.error('Error getting user:', error);
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const result = await this.db
        .select()
        .from(users)
        .where(eq(users.username, username))
        .limit(1);
      
      return result[0];
    } catch (error) {
      console.error('Error getting user by username:', error);
      return undefined;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    try {
      const result = await this.db
        .insert(users)
        .values(insertUser)
        .returning();
      
      return result[0];
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
}