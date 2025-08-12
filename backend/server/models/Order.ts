import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Order extends Model {
  public id!: string;
  public productId!: string;
  public buyerId!: string;
  public sellerId!: string;
  public amount!: number;
  public currency!: string;
  public status!: 'pending' | 'paid' | 'delivered' | 'disputed';
  public paymentMethod!: 'crypto' | 'stripe';
  public transactionId?: string;
}

Order.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    productId: { type: DataTypes.UUID, allowNull: false },
    buyerId: { type: DataTypes.STRING, allowNull: false },
    sellerId: { type: DataTypes.STRING, allowNull: false },
    amount: { type: DataTypes.DECIMAL(10, 6), allowNull: false },
    currency: { type: DataTypes.STRING, allowNull: false },
    status: {
      type: DataTypes.ENUM('pending', 'paid', 'delivered', 'disputed'),
      defaultValue: 'pending'
    },
    paymentMethod: { type: DataTypes.ENUM('crypto', 'stripe') },
    transactionId: { type: DataTypes.STRING }
  },
  { sequelize, modelName: 'Order' }
);
