import React from 'react';
import classes from './Shop.module.css';

export default function ShopPage() {
  return (
    <>
      <h1 className={classes.title}>Sneakers</h1>
      <ul className={classes.settings}>
        <li>filter</li>
        <li>sort</li>
        <input type="search" name="" id="" placeholder="search" />
        <li>product view</li>
      </ul>
    </>
  );
}
