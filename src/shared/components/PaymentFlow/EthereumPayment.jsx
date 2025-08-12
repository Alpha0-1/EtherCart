import React from 'react';

export default function EthereumPayment({ product, onSuccess, onError }) {
  async function pay() {
    try {
      // ethers.js sendTransaction (stub)
      await new Promise((r) => setTimeout(r, 400));
      onSuccess?.({ txHash: '0xDEADBEEF' });
    } catch (e) {
      onError?.(e);
    }
  }
  return <button onClick={pay}>Pay {product?.priceEth} ETH</button>;
}

