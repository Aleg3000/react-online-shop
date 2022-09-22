import Product from 'components/Product/Product';
import Select from 'components/UI/Select';
import sneakersData from 'data/data';
import React, { useEffect, useRef, useState } from 'react';
import { IProduct } from 'ts/interfaces/interfaces';
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

  const [filteredData, setFilteredData] = useState(sneakersData);

  const filterProduct = () => {
    const filterFn = (el: IProduct) =>
      searchValue === ''
        ? true
        : (el.brand + el.model).toLowerCase().includes(searchValue.toLowerCase());
    setFilteredData([...sneakersData.filter(filterFn)]);
  };

  useEffect(filterProduct, [searchValue]);

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

      {filteredData.length > 0 ? (
        <div className={classes.products}>
          {filteredData.map((el) => (
            <Product imgState={imgState} product={el} key={el.num}></Product>
          ))}
        </div>
      ) : (
        <div>Nothing was found</div>
      )}
    </>
  );
}
