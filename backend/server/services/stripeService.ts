import { stripe } from '../config/stripe';
import { Product } from '../models/Product';

export const stripeService = {
  async createCheckoutSession(product: Product, orderId: string) {
    return await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: product.name },
            unit_amount: Math.round(product.priceUsd * 100)
          },
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      client_reference_id: orderId,
      metadata: { productId: product.id }
    });
  }
};
