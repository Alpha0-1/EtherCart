import React from 'react';
import './ProductListing.css';

export default function ProductListing({ products = [], onSelect }) {
  return (
    <div className="listing">
      {products.map((p) => (
        <div key={p.id} className="item" onClick={() => onSelect?.(p)}>
          <img src={p.image} alt={p.title} loading="lazy" />
          <div className="meta">
            <h4>{p.title}</h4>
            <span>{p.priceEth} ETH</span>
          </div>
        </div>
      ))}
    </div>
  );
}

