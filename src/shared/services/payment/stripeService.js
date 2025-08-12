/**
 * Stripe service (client-side stub).
 */
export async function createCheckoutSession(product) {
  // Call backend to create session
  return { id: 'cs_test_123', url: 'https://checkout.stripe.com/pay/cs_test_123' };
}

