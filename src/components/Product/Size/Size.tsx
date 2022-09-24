import React, { useState } from 'react';
import classes from './Size.module.css';

interface ISize {
  size: string;
  quantity: number;
  onHover: (arg0: string) => void;
}

const Size = ({ size, quantity: q, onHover }: ISize) => {
  const [quantity, setQuantity] = useState(q);

  const showState = () => {
    switch (quantity) {
      case 1:
        onHover(': Last size');
        break;
      case 0:
        onHover(': Sold Out');
        break;
      default:
        onHover('');
    }
  };
  const hideState = () => onHover('');

  return (
    <span
      onMouseEnter={showState}
      onMouseLeave={hideState}
      className={quantity > 0 ? classes.sizeSpan : classes.soldOut}
      key={size}
    >
      {size}RU
    </span>
  );
};

export default Size;
