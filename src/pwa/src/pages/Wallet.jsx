import React from 'react';
import WalletConnect from '../components/wallet/WalletConnect.jsx';
import WalletBalance from '../components/wallet/WalletBalance.jsx';
import TransactionHistory from '../components/wallet/TransactionHistory.jsx';

export default function Wallet() {
  return (
    <section>
      <h1>Wallet</h1>
      <WalletConnect />
      <WalletBalance />
      <TransactionHistory />
    </section>
  );
}

