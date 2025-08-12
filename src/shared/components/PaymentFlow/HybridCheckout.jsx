import React from 'react';
import EthereumPayment from './EthereumPayment.jsx';
import StripePayment from './StripePayment.jsx';

export default function HybridCheckout({ product }) {
  return (
    <div>
      <h4>Choose payment method</h4>
      <div style={{ display: 'flex', gap: 8 }}>
        <EthereumPayment product={product} />
        <StripePayment product={product} />
      </div>
    </div>
  );
}

