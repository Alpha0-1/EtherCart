import { Request, Response } from 'express';
import { productService } from '../services/productService';
import { ApiResponse } from '../utils/response';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const { limit = 20, offset = 0 } = req.query;
    const products = await productService.getProducts(+limit, +offset);
    res.json(ApiResponse.success(products));
  } catch (err) {
    res.status(500).json(ApiResponse.error('Failed to fetch products'));
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const productData = { ...req.body, sellerId: userId };
    const product = await productService.createProduct(productData);
    res.status(201).json(ApiResponse.success(product, 'Product listed successfully'));
  } catch (err: any) {
    res.status(400).json(ApiResponse.error(err.message));
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user.id;
    const updated = await productService.updateProduct(id, req.body, userId);
    if (!updated) return res.status(403).json(ApiResponse.error('Not authorized'));
    res.json(ApiResponse.success(updated, 'Product updated'));
  } catch (err: any) {
    res.status(400).json(ApiResponse.error(err.message));
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user.id;
    const deleted = await productService.deleteProduct(id, userId);
    if (!deleted) return res.status(403).json(ApiResponse.error('Not authorized'));
    res.json(ApiResponse.success(null, 'Product removed'));
  } catch (err: any) {
    res.status(400).json(ApiResponse.error(err.message));
  }
};
