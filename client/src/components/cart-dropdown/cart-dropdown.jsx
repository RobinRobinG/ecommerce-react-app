import React from "react";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import ClickOutside from "./clickOutside";

import "./cart-dropdown.scss";

function CartDropdown(props) {
  const { cartItems, history, dispatch } = props;

  return (
    <ClickOutside className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart is empty!</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go To Checkout
      </CustomButton>
    </ClickOutside>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
