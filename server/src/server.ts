import { createApp } from './app.js';
import { serverEnv } from './config/env.js';
import { connectDB, disconnectDB } from './config/db.js';

// Main application entrypoint
async function startServer(): Promise<void> {
  // Connect to Database
  await connectDB();

  const app = createApp();
  const PORT = Number(process.env.PORT) || serverEnv.PORT || 5000;

  const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 TMR Backend Server listening on port ${PORT}`);
    console.log(`📡 Environment: ${serverEnv.NODE_ENV}`);
  });

  // Graceful Shutdown handlers
  const shutdown = async (signal: string) => {
    console.log(`\n🛑 Received ${signal}. Shutting down gracefully...`);
    server.close(async () => {
      console.log('🔌 HTTP server closed.');
      await disconnectDB();
      process.exit(0);
    });

    // Force close if graceful shutdown takes longer than 10 seconds
    setTimeout(() => {
      console.error('⚠️ Could not close connections in time, forcefully shutting down');
      process.exit(1);
    }, 10000);
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
}

startServer().catch((error) => {
  const safeError = error instanceof Error ? error.message : 'Startup error';
  console.error('❌ Failed to start server:', safeError);
  process.exit(1);
});
