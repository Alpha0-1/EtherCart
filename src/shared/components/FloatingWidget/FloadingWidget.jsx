import React from 'react';
import './FloatingWidget.css';

export default function FloatingWidget({ onBuy, onSell, onWallet }) {
  return (
    <div className="ec-float">
      <header>EtherCart</header>
      <div className="btns">
        <button onClick={onBuy}>Buy</button>
        <button onClick={onSell}>Sell</button>
        <button onClick={onWallet}>Wallet</button>
      </div>
    </div>
  );
}

