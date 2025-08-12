import { Router } from 'express';
import { handleStripeWebhook } from '../controllers/payment.controller';
import { stripeWebhookSecret } from '../config/stripe';

const router = Router();

// Stripe requires raw body for signature verification
router.post(
  '/',
  express.raw({ type: 'application/json' }),
  (req, res, next) => {
    req.rawBody = req.body;
    next();
  },
  handleStripeWebhook(stripeWebhookSecret)
);

export default router;
