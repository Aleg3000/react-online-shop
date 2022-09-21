import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <nav className={classes.navbar}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/sell">Sell</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
