/**
 * Entry point for the backend server
 */
import app from './app';
import { connectDB } from './config/database';
import { connectRedis } from './config/redis';
import { startPriceUpdater } from './services/priceOracle';

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectDB();
    await connectRedis();
    startPriceUpdater(); // Start live ETH/USD updates

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
})();
