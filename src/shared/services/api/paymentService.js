import { api } from './apiClient.js';

export const buyCrypto = (payload) => api('/buy', { method: 'POST', body: JSON.stringify({ ...payload, mode: 'crypto' }) });
export const buyStripe = (payload) => api('/buy', { method: 'POST', body: JSON.stringify({ ...payload, mode: 'stripe' }) });

