import { Product } from '../models/Product';
import { Op } from 'sequelize';

export const productService = {
  async getProducts(limit: number, offset: number) {
    return await Product.findAll({
      where: { active: true },
      limit,
      offset,
      order: [['createdAt', 'DESC']]
    });
  },

  async createProduct(data: any) {
    return await Product.create(data);
  },

  async updateProduct(id: string, data: any, userId: string) {
    const product = await Product.findOne({ where: { id, sellerId: userId } });
    if (!product) return null;
    return await product.update(data);
  },

  async deleteProduct(id: string, userId: string) {
    const product = await Product.findOne({ where: { id, sellerId: userId } });
    if (!product) return false;
    await product.update({ active: false });
    return true;
  }
};
