// Environment variable validation for server startup
interface RequiredEnvVars {
  DATABASE_URL?: string;
  SESSION_SECRET?: string;
  NODE_ENV: string;
  PORT?: string;
}

interface ValidationResult {
  isValid: boolean;
  missingVars: string[];
  warnings: string[];
}

export function validateEnvironmentVariables(): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    missingVars: [],
    warnings: []
  };

  const requiredVars: (keyof RequiredEnvVars)[] = ['DATABASE_URL', 'SESSION_SECRET'];
  const optionalVars: (keyof RequiredEnvVars)[] = ['PORT'];

  // Check required variables
  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      result.missingVars.push(varName);
      result.isValid = false;
    }
  }

  // Check optional variables and add warnings
  for (const varName of optionalVars) {
    if (!process.env[varName] && varName === 'PORT') {
      result.warnings.push(`${varName} not set, defaulting to 5000`);
    }
  }

  return result;
}

export function handleValidationResult(validation: ValidationResult): void {
  // Log warnings
  validation.warnings.forEach(warning => {
    console.warn(`⚠️  ${warning}`);
  });

  // Handle missing required variables
  if (!validation.isValid) {
    const isProduction = process.env.NODE_ENV === 'production';
    
    if (isProduction) {
      // In production, log errors but don't crash immediately
      console.error('❌ Missing required environment variables:', validation.missingVars.join(', '));
      
      if (validation.missingVars.includes('DATABASE_URL')) {
        console.error('Database functionality will be unavailable. Please add DATABASE_URL to deployment configuration.');
      }
      
      if (validation.missingVars.includes('SESSION_SECRET')) {
        console.error('Session management will not work properly. Please add SESSION_SECRET to deployment configuration.');
      }
    } else {
      // In development, throw an error
      throw new Error(`Missing required environment variables: ${validation.missingVars.join(', ')}`);
    }
  } else {
    console.log('✅ All environment variables validated successfully');
  }
}