import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Product extends Model {
  public id!: string;
  public name!: string;
  public description?: string;
  public priceEth!: number;
  public priceUsd!: number;
  public fileUrl!: string;
  public imageUrl?: string;
  public sellerId!: string;
  public active!: boolean;
}

Product.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    priceEth: { type: DataTypes.DECIMAL(10, 6), allowNull: false },
    priceUsd: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    fileUrl: { type: DataTypes.STRING, allowNull: false },
    imageUrl: { type: DataTypes.STRING },
    sellerId: { type: DataTypes.STRING, allowNull: false },
    active: { type: DataTypes.BOOLEAN, defaultValue: true }
  },
  { sequelize, modelName: 'Product' }
);
