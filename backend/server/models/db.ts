import { sequelize } from '../config/database';
import { Product } from './Product';
import { Order } from './Order';
import { User } from './User';

// Define associations
User.hasMany(Product, { foreignKey: 'sellerId' });
Product.belongsTo(User, { foreignKey: 'sellerId' });

Order.belongsTo(Product);
Product.hasMany(Order, { foreignKey: 'productId' });

export default sequelize;
