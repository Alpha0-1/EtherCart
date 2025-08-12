import { createCheckoutSession } from './stripeService.js';
import { sendEthPayment } from './ethereumService.js';

export async function processPayment({ method, product }) {
  if (method === 'stripe') return createCheckoutSession(product);
  if (method === 'crypto') return sendEthPayment({ to: product.seller, valueEth: product.priceEth });
  throw new Error('Unknown payment method');
}

