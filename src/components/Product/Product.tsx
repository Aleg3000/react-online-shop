import React, { Component, FC, useState } from 'react';
import { IProduct } from 'ts/interfaces/interfaces';
import classes from './Product.module.css';
import Size from './Size/Size';

type myProps = {
  product: IProduct;
  key: string;
  imgState: number[];
};

const Product = ({ product, imgState }: myProps) => {
  const [hoverState, setHoverState] = useState(false);

  const imageHandler = ({ type }: React.MouseEvent<HTMLImageElement>) => {
    type === 'mouseenter' ? setHoverState(true) : setHoverState(false);
  };

  const [sizeState, setSizeState] = useState('');

  const changeSizeState = (newState: string) => setSizeState(newState);

  return (
    <div className={classes.product} onMouseEnter={imageHandler} onMouseLeave={imageHandler}>
      <img
        src={hoverState ? product.images?.[imgState[0]] : product.images?.[imgState[1]]}
        className={classes.productImg}
        alt={product.brand + product.model}
      />
      {hoverState ? (
        <div className={classes.productSizes}>
          <p className={classes.sizesTitle}>Size{sizeState}</p>
          <div>
            {Object.entries(product.sizes).map(([size, quantity]) => (
              <Size onHover={changeSizeState} key={size} quantity={quantity} size={size} />
            ))}
          </div>
        </div>
      ) : (
        <div className={classes.productInfo}>
          <p className={classes.brand}>{product.brand}</p>
          <p className={classes.model}>{product.model}</p>
          <p className={classes.price}>{'$' + product.price}</p>
        </div>
      )}
    </div>
  );
};

export default Product;
