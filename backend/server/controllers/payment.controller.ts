import { Request, Response } from 'express';
import { stripe } from '../config/stripe';
import { orderService } from '../services/orderService';
import { ethereumService } from '../services/ethereumService';
import { ApiResponse } from '../utils/response';

export const createCryptoPayment = async (req: Request, res: Response) => {
  try {
    const { orderId, signature } = req.body;
    const userId = (req as any).user.id;

    const order = await orderService.getOrder(orderId);
    if (!order || order.buyerId !== userId) {
      return res.status(403).json(ApiResponse.error('Unauthorized'));
    }

    const txHash = await ethereumService.executePurchase(order, signature);
    await orderService.markAsPaid(orderId, 'crypto', txHash);

    res.json(ApiResponse.success({ txHash }, 'Payment confirmed'));
  } catch (err: any) {
    res.status(400).json(ApiResponse.error(err.message));
  }
};

export const handleStripeWebhook = (webhookSecret: string) => {
  return async (req: Request, res: Response) => {
    const sig = req.headers['stripe-signature'] as string;
    let event;

    try {
      event = stripe.webhooks.constructEvent(req.rawBody!, sig, webhookSecret);
    } catch (err: any) {
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const orderId = session.client_reference_id;

      await orderService.markAsPaid(orderId, 'stripe', session.payment_intent as string);
      console.log(`✅ Stripe payment confirmed for order ${orderId}`);
    }

    res.json({ received: true });
  };
};

export const confirmDelivery = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.body;
    const sellerId = (req as any).user.id;

    const order = await orderService.getOrder(orderId);
    if (order.sellerId !== sellerId) {
      return res.status(403).json(ApiResponse.error('Not authorized'));
    }

    await orderService.confirmDelivery(orderId);
    res.json(ApiResponse.success(null, 'Delivery confirmed'));
  } catch (err: any) {
    res.status(400).json(ApiResponse.error(err.message));
  }
};
