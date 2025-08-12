import { Request, Response } from 'express';
import { orderService } from '../services/orderService';
import { ApiResponse } from '../utils/response';

export const getOrders = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const orders = await orderService.getOrdersByUser(userId);
    res.json(ApiResponse.success(orders));
  } catch (err) {
    res.status(500).json(ApiResponse.error('Failed to load orders'));
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { productId, paymentMethod } = req.body;
    const buyerId = (req as any).user.id;

    const order = await orderService.createOrder({
      productId,
      buyerId,
      paymentMethod
    });

    res.status(201).json(ApiResponse.success(order, 'Order created'));
  } catch (err: any) {
    res.status(400).json(ApiResponse.error(err.message));
  }
};
