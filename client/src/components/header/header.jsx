import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import Logo from "../../assets/logo.jpg";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import CartIcon from "../cart-icon/cart-icon";
import { signOutStart } from "../../redux/user/user.actions";

import "./header.scss";

function Header(props) {
  const { currentUser, hidden, signOutStart } = props;
  return (
    <div className="header">
      <Link to="/">
        <div className="logo-container">
          <img src={Logo} className="logo" alt="logo" />
        </div>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          <span>SHOP</span>
          <span class="slider"></span>
        </Link>
        {currentUser ? (
          <div className="option" onClick={signOutStart}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
