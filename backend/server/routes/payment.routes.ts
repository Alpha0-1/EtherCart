import { Router } from 'express';
import { createCryptoPayment, confirmDelivery } from '../controllers/payment.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.post('/crypto', authenticate, createCryptoPayment);
router.post('/confirm-delivery', authenticate, confirmDelivery);

export default router;
