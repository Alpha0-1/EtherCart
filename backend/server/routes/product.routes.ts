import { Router } from 'express';
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/product.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.route('/')
  .get(getProducts)
  .post(authenticate, createProduct);

router.route('/:id')
  .put(authenticate, updateProduct)
  .delete(authenticate, deleteProduct);

export default router;
