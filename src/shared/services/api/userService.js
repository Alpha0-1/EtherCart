import { api } from './apiClient.js';

export const getOrders = () => api('/orders');
export const deliveryConfirm = (payload) => api('/delivery-confirm', { method: 'POST', body: JSON.stringify(payload) });

