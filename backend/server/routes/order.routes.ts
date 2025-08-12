import { Router } from 'express';
import { getOrders, createOrder } from '../controllers/order.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.route('/')
  .get(authenticate, getOrders)
  .post(authenticate, createOrder);

export default router;
