import React from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner.jsx';

export default function Dashboard() {
  return (
    <section>
      <h1>Dashboard – Overview</h1>
      <p>Track sales, purchases, and balances at a glance.</p>
      <LoadingSpinner />
    </section>
  );
}

