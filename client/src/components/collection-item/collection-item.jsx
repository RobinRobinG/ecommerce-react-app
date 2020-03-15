import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-cart.svg';
import './collection-item.scss';

function CollectionItem(props) {
  const { item, addItem } = props;
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <div onClick={() => addItem(item)} className="add-to-cart-button">
        <ShoppingCartIcon />
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
