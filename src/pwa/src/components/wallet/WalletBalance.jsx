import React, { useEffect, useState } from 'react';

export default function WalletBalance() {
  const [balance, setBalance] = useState(null);
  useEffect(() => {
    // Fetch balance via ethers (stub)
    setBalance('0.00');
  }, []);
  return <div>Balance: {balance} ETH</div>;
}

