// server/index.ts
import express2 from "express";
import compression from "compression";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";

// server/db.ts
import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});

// server/db.ts
import { eq } from "drizzle-orm";
var db = null;
async function initializeDatabase() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.warn("DATABASE_URL not found. Using in-memory storage instead.");
    return null;
  }
  try {
    const pool = new Pool({ connectionString: databaseUrl });
    db = drizzle(pool);
    await pool.query("SELECT 1");
    console.log("\u2705 Database connection established successfully");
    return db;
  } catch (error) {
    console.error("\u274C Failed to connect to database:", error);
    console.warn("Falling back to in-memory storage");
    return null;
  }
}
var DatabaseStorage = class {
  db;
  constructor(database) {
    this.db = database;
  }
  async getUser(id) {
    try {
      const result = await this.db.select().from(users).where(eq(users.id, id)).limit(1);
      return result[0];
    } catch (error) {
      console.error("Error getting user:", error);
      return void 0;
    }
  }
  async getUserByUsername(username) {
    try {
      const result = await this.db.select().from(users).where(eq(users.username, username)).limit(1);
      return result[0];
    } catch (error) {
      console.error("Error getting user by username:", error);
      return void 0;
    }
  }
  async createUser(insertUser) {
    try {
      const result = await this.db.insert(users).values(insertUser).returning();
      return result[0];
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
};

// server/storage.ts
var MemStorage = class {
  users;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
};
var storage;
async function initializeStorage() {
  const db2 = await initializeDatabase();
  if (db2) {
    console.log("\u2705 Using database storage");
    storage = new DatabaseStorage(db2);
  } else {
    console.log("\u26A0\uFE0F Using in-memory storage");
    storage = new MemStorage();
  }
  return storage;
}
function getStorage() {
  if (!storage) {
    throw new Error("Storage not initialized. Call initializeStorage() first.");
  }
  return storage;
}

// server/routes.ts
async function registerRoutes(app2) {
  const storage2 = getStorage();
  app2.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      environment: process.env.NODE_ENV || "development"
    });
  });
  app2.get("/api/users/:id", async (req, res) => {
    try {
      const user = await storage2.getUser(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    // Build directement dans dist
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(import.meta.dirname, "client/index.html")
      // point d’entrée index.html
    }
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  },
  publicDir: path.resolve(import.meta.dirname, "client/public")
  // Fichiers statiques (robots.txt, sitemap.xml, _redirects)
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/env-validation.ts
function validateEnvironmentVariables() {
  const result = {
    isValid: true,
    missingVars: [],
    warnings: []
  };
  const requiredVars = ["DATABASE_URL", "SESSION_SECRET"];
  const optionalVars = ["PORT"];
  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      result.missingVars.push(varName);
      result.isValid = false;
    }
  }
  for (const varName of optionalVars) {
    if (!process.env[varName] && varName === "PORT") {
      result.warnings.push(`${varName} not set, defaulting to 5000`);
    }
  }
  return result;
}
function handleValidationResult(validation) {
  validation.warnings.forEach((warning) => {
    console.warn(`\u26A0\uFE0F  ${warning}`);
  });
  if (!validation.isValid) {
    const isProduction = process.env.NODE_ENV === "production";
    if (isProduction) {
      console.error("\u274C Missing required environment variables:", validation.missingVars.join(", "));
      if (validation.missingVars.includes("DATABASE_URL")) {
        console.error("Database functionality will be unavailable. Please add DATABASE_URL to deployment configuration.");
      }
      if (validation.missingVars.includes("SESSION_SECRET")) {
        console.error("Session management will not work properly. Please add SESSION_SECRET to deployment configuration.");
      }
    } else {
      throw new Error(`Missing required environment variables: ${validation.missingVars.join(", ")}`);
    }
  } else {
    console.log("\u2705 All environment variables validated successfully");
  }
}

// server/session.ts
import session from "express-session";
import ConnectPgSimple from "connect-pg-simple";
import { Pool as Pool2 } from "@neondatabase/serverless";
var PgSession = ConnectPgSimple(session);
function createSessionMiddleware() {
  const sessionSecret = process.env.SESSION_SECRET;
  const databaseUrl = process.env.DATABASE_URL;
  if (!sessionSecret) {
    const fallbackSecret = "fallback-secret-key-for-development";
    console.warn("\u26A0\uFE0F SESSION_SECRET not found. Using fallback secret (NOT SECURE FOR PRODUCTION)");
    if (process.env.NODE_ENV === "production") {
      throw new Error("SESSION_SECRET is required in production");
    }
  }
  const sessionConfig = {
    secret: sessionSecret || "fallback-secret-key-for-development",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      // Require HTTPS in production
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1e3,
      // 24 hours
      sameSite: "lax"
    }
  };
  if (databaseUrl) {
    try {
      const pool = new Pool2({ connectionString: databaseUrl });
      sessionConfig.store = new PgSession({
        pool,
        tableName: "session",
        // Use whatever table name you prefer
        createTableIfMissing: true
      });
      console.log("\u2705 Using PostgreSQL session store");
    } catch (error) {
      console.error("\u274C Failed to setup PostgreSQL session store:", error);
      console.warn("Falling back to in-memory session store");
    }
  } else {
    console.warn("\u26A0\uFE0F DATABASE_URL not found. Using in-memory session store (sessions will not persist)");
  }
  return session(sessionConfig);
}

// server/index.ts
var app = express2();
var envValidation = validateEnvironmentVariables();
handleValidationResult(envValidation);
app.use(compression({
  level: 6,
  // Good balance between compression ratio and speed
  threshold: 1024,
  // Only compress responses > 1KB
  filter: (req, res) => {
    if (req.headers["x-no-compression"]) {
      return false;
    }
    return compression.filter(req, res);
  }
}));
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use(createSessionMiddleware());
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  try {
    await initializeStorage();
    console.log("\u2705 Storage initialized successfully");
    const server = await registerRoutes(app);
    app.use((err, _req, res, _next) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      res.status(status).json({ message });
      throw err;
    });
    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }
    const port = parseInt(process.env.PORT || "5000", 10);
    server.listen({
      port,
      host: "0.0.0.0",
      reusePort: true
    }, () => {
      log(`serving on port ${port}`);
    });
  } catch (error) {
    console.error("\u274C Failed to start server:", error);
    process.exit(1);
  }
})();
