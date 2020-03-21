import React, { memo } from 'react';
import './cart-item.scss';

function CartItem(props) {
  const { item } = props;
  const { imageUrl, price, name, quantity } = item;

  return (
    <div className="cart-item">
      <div className="cart-image">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}

export default memo(CartItem);
