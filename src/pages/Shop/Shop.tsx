import Product from 'components/Product/Product';
import sneakersData from 'data/data';
import React, { useState } from 'react';
import classes from './Shop.module.css';

export default function ShopPage() {
  const [productView, setProductView] = useState('product view');
  const changeProductView = ({ currentTarget }: React.MouseEvent<HTMLElement>) => {};

  return (
    <>
      <h1 className={classes.title}>Sneakers</h1>
      <ul className={classes.settings}>
        <li>filter</li>
        <li>sort</li>
        <input type="search" name="" id="" placeholder="search" />
        <li onClick={changeProductView}>
          <div>product view</div>
          <ul className={classes.asd}>
            <li value="product">product view</li>
            <li value="outfit">outfit view</li>
          </ul>
        </li>
      </ul>
      <div className={classes.products}>
        {sneakersData.map((el) => (
          <Product product={el} key={el.num}></Product>
        ))}
      </div>
    </>
  );
}
