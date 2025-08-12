import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import productRoutes from './routes/product.routes';
import orderRoutes from './routes/order.routes';
import paymentRoutes from './routes/payment.routes';
import walletRoutes from './routes/wallet.routes';
import webhookRoutes from './routes/webhook.routes';
import errorHandler from './middleware/errorHandler';

const app = express();

// Security & Performance
app.use(helmet());
app.use(cors({
  origin: [
    'https://ethercart.dev',
    'https://app.ethercart.dev',
    'http://localhost:3000',
    'http://localhost:8080'
  ],
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/webhooks/stripe', webhookRoutes); // Stripe requires raw body

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling
app.use(errorHandler);

export default app;
