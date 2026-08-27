import mongoose, { ConnectOptions } from 'mongoose';
import { serverEnv } from './env.js';

let isConnected = false;

/**
 * Safely masks credentials in MongoDB connection string for logs
 */
function sanitizeMongoUri(uri: string): string {
  try {
    return uri.replace(/\/\/(.*):(.*)@/, '//***:***@');
  } catch {
    return '[Protected Mongo URI]';
  }
}

export async function connectDB(): Promise<void> {
  if (isConnected) {
    return;
  }

  const connectOptions: ConnectOptions = {
    maxPoolSize: 10,
    minPoolSize: 2,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    autoIndex: serverEnv.NODE_ENV !== 'production',
  };

  try {
    const conn = await mongoose.connect(serverEnv.MONGODB_URI, connectOptions);

    isConnected = conn.connection.readyState === 1;
    const hostName = conn.connection.host || 'connected';
    console.log(`✅ MongoDB Connected (${sanitizeMongoUri(hostName)})`);
  } catch (error) {
    const safeError = error instanceof Error ? error.message : 'Database connection error';
    console.error('❌ MongoDB Connection Error:', safeError);
    // In production, exit or let container restart if DB is essential
    if (serverEnv.NODE_ENV === 'production') {
      throw error;
    }
  }

  mongoose.connection.on('disconnected', () => {
    isConnected = false;
    console.warn('⚠️ MongoDB Disconnected. Retrying...');
  });

  mongoose.connection.on('reconnected', () => {
    isConnected = true;
    console.log('✅ MongoDB Reconnected');
  });

  mongoose.connection.on('error', (err: Error) => {
    const safeError = err instanceof Error ? err.message : 'Database runtime error';
    console.error('❌ MongoDB Runtime Error:', safeError);
  });
}

export async function disconnectDB(): Promise<void> {
  if (!isConnected) return;
  try {
    await mongoose.disconnect();
    isConnected = false;
    console.log('🛑 MongoDB connection closed.');
  } catch (error) {
    console.error('Error disconnecting MongoDB:', error instanceof Error ? error.message : error);
  }
}

export function isDbConnected(): boolean {
  return mongoose.connection.readyState === 1;
}
