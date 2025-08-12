import { Router } from 'express';
import { verifyWallet, getWalletBalance } from '../controllers/wallet.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.post('/verify', authenticate, verifyWallet);
router.get('/balance', authenticate, getWalletBalance);

export default router;
