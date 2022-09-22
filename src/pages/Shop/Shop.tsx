import Product from 'components/Product/Product';
import Select from 'components/UI/Select';
import sneakersData from 'data/data';
import React, { useState } from 'react';
import classes from './Shop.module.css';

export default function ShopPage() {
  const [imgState, setImgState] = useState([1, 0]);
  const changeProductView = (select: string) => {
    switch (select) {
      case 'product view':
        setImgState([1, 0]);
        break;
      case 'outfit view':
        setImgState([0, 1]);
        break;
      default:
        setImgState([1, 0]);
    }
  };

  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <h1 className={classes.title}>Sneakers</h1>
      <ul className={classes.settings}>
        <li>filter</li>
        <li>sort</li>
        <input
          type="search"
          name=""
          id=""
          placeholder="search"
          value={searchValue}
          onChange={({ currentTarget }) => setSearchValue(currentTarget.value)}
        />
        <li className={classes.productView} style={{ padding: 0 }}>
          <Select options={['product view', 'outfit view']} onChange={changeProductView} />
        </li>
      </ul>
      <div className={classes.products}>
        {sneakersData.map((el) => (
          <Product imgState={imgState} product={el} key={el.num}></Product>
        ))}
      </div>
    </>
  );
}
