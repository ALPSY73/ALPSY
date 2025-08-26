import { type User, type InsertUser } from "@shared/schema";
import { randomUUID } from "crypto";
import { initializeDatabase, DatabaseStorage } from "./db";
import type { NeonDatabase } from 'drizzle-orm/neon-serverless';

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

// Initialize storage - will use database if available, otherwise memory
let storage: IStorage;

export async function initializeStorage(): Promise<IStorage> {
  const db = await initializeDatabase();
  
  if (db) {
    console.log('✅ Using database storage');
    storage = new DatabaseStorage(db);
  } else {
    console.log('⚠️ Using in-memory storage');
    storage = new MemStorage();
  }
  
  return storage;
}

export function getStorage(): IStorage {
  if (!storage) {
    throw new Error('Storage not initialized. Call initializeStorage() first.');
  }
  return storage;
}
