import React from 'react';

export default function StripePayment({ product, onSuccess, onError }) {
  async function payCard() {
    try {
      // Call backend to create checkout session (stub)
      await new Promise((r) => setTimeout(r, 400));
      onSuccess?.({ sessionId: 'cs_test_123' });
    } catch (e) {
      onError?.(e);
    }
  }
  return <button onClick={payCard}>Pay with Card</button>;
}

