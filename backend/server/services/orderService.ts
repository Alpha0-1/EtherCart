import { Order, Product, User } from '../models';
import { sequelize } from '../config/database';
import { ethereumService } from './ethereumService';

export const orderService = {
  async getOrdersByUser(userId: string) {
    return await Order.findAll({
      where: {
        [Op.or]: [{ buyerId: userId }, { sellerId: userId }]
      },
      include: [Product, User],
      order: [['createdAt', 'DESC']]
    });
  },

  async getOrder(orderId: string) {
    return await Order.findByPk(orderId, { include: [Product] });
  },

  async createOrder(data: { productId: string; buyerId: string; paymentMethod: string }) {
    const product = await Product.findByPk(data.productId);
    if (!product || !product.active) throw new Error('Product not available');

    return await Order.create({
      productId: data.productId,
      buyerId: data.buyerId,
      sellerId: product.sellerId,
      amount: product.priceEth,
      currency: 'ETH',
      status: 'pending',
      paymentMethod: data.paymentMethod
    });
  },

  async markAsPaid(orderId: string, method: string, txId: string) {
    const order = await Order.findByPk(orderId);
    if (!order || order.status !== 'pending') return;

    await order.update({ status: 'paid', transactionId: txId });
    if (method === 'crypto') {
      await ethereumService.lockFunds(order);
    }
  },

  async confirmDelivery(orderId: string) {
    const order = await Order.findByPk(orderId);
    if (!order || order.status !== 'paid') throw new Error('Invalid order state');

    await order.update({ status: 'delivered' });
    await ethereumService.releaseFunds(order);
  }
};
