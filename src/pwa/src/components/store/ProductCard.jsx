import React from 'react';

export default function ProductCard({ product, onBuy }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.title} loading="lazy" />
      <h3>{product.title}</h3>
      <p>{product.priceEth} ETH</p>
      <button onClick={() => onBuy(product)}>Buy</button>
    </article>
  );
}

