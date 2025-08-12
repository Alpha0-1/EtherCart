import React from 'react';

export default function CheckoutModal({ product, onClose }) {
  if (!product) return null;
  return (
    <div className="modal">
      <div className="modal-card">
        <h3>Checkout – {product.title}</h3>
        <p>Price: {product.priceEth} ETH</p>
        <div className="actions">
          <button onClick={() => alert('Crypto checkout (stub)')}>Pay with Crypto</button>
          <button onClick={() => alert('Stripe checkout (stub)')}>Pay with Card</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

