import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Store from './pages/Store.jsx';
import Wallet from './pages/Wallet.jsx';
import Settings from './pages/Settings.jsx';
import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer.jsx';
import './styles/globals.css';
import './styles/components.css';
import './styles/variables.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <nav className="ec-nav">
        <Link to="/">Dashboard</Link>
        <Link to="/store">Store</Link>
        <Link to="/wallet">Wallet</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <main className="ec-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/store" element={<Store />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

