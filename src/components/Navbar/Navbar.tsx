import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/sell">Sell</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
