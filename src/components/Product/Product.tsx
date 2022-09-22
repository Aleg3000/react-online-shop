import { hover } from '@testing-library/user-event/dist/hover';
import React, { Component, FC, useState } from 'react';
import { IProduct } from 'ts/interfaces/interfaces';
import classes from './Product.module.css';

type myProps = {
  product: IProduct;
  key: string;
};

const Product = ({ product }: myProps) => {
  const [hoverState, setHoverState] = useState(false);
  const [imgState, setImgState] = useState([1, 0]);

  const imageHandler = ({ type }: React.MouseEvent<HTMLImageElement>) => {
    type === 'mouseenter' ? setHoverState(true) : setHoverState(false);
  };

  return (
    <div className={classes.product} onMouseEnter={imageHandler} onMouseLeave={imageHandler}>
      <img
        src={hoverState ? product.images?.[imgState[0]] : product.images?.[imgState[1]]}
        className={classes.productImg}
        alt={product.brand + product.model}
      />
      {hoverState ? (
        <div className={classes.productSizes}>
          <p className={classes.sizesTitle}>Size</p>
        </div>
      ) : (
        <div className={classes.productInfo}>
          <p className={classes.brand}>{product.brand}</p>
          <p className={classes.model}>{product.model}</p>
          <p className={classes.price}>{'$' + product.price}</p>
          {/* <p className="year">{product.year}</p> */}
        </div>
      )}
    </div>
  );
};

export default Product;
