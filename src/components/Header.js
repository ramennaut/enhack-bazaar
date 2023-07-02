import React, { useState } from 'react';
import logo from '../assets/logo-nifty.png';
import './Header.css';

function Header({ cartCount, updateCartCount }) {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Website logo" className="logo" />
      </div>
      <div className="cart-container">
        <span className="material-icons md-24 cart-icon">&#xE8CC;</span>
        {cartCount > 0 && <div className="cart-notification">{cartCount}</div>}
      </div>
    </header>
  );
}

function CartManager() {
  const [cartCount, setCartCount] = useState(0);

  // Function to update the cart count
  const updateCartCount = (newCount) => {
    setCartCount(newCount);
  };

  // Function to simulate updating the cart count from another component
  const simulateUpdateCartCount = () => {
    const newCount = Math.floor(Math.random() * 10) + 1; // Generate a random count
    updateCartCount(newCount);
  };

  return (
    <div>
      <Header cartCount={cartCount} updateCartCount={updateCartCount} />
      <button onClick={simulateUpdateCartCount}>Simulate Update Cart Count</button>
    </div>
  );
}
export default Header;