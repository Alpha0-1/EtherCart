import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard.jsx';
import CheckoutModal from './CheckoutModal.jsx';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    // Load products (stubbed)
    setProducts([{ id: 1, title: 'Template', priceEth: 0.01, image: 'https://via.placeholder.com/300' }]);
  }, []);

  return (
    <>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onBuy={setActive} />
        ))}
      </div>
      <CheckoutModal product={active} onClose={() => setActive(null)} />
    </>
  );
}

