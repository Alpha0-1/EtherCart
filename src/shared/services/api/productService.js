import { api } from './apiClient.js';

export const getProducts = () => api('/products');
export const listProduct = (payload) => api('/list-product', { method: 'POST', body: JSON.stringify(payload) });

