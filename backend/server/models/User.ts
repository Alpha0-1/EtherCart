import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class User extends Model {
  public id!: string;
  public walletAddress!: string;
  public email?: string;
  public reputation!: number;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    walletAddress: { type: DataTypes.STRING, unique: true, allowNull: false },
    email: { type: DataTypes.STRING, unique: true },
    reputation: { type: DataTypes.INTEGER, defaultValue: 100 }
  },
  { sequelize, modelName: 'User' }
);
