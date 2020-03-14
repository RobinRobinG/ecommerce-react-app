import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

function useOutsideAlerter(ref, toggleCartHidden) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      console.log("You clicked outside of me!");
      toggleCartHidden();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

function ClickOutside({ children, toggleCartHidden }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, toggleCartHidden);

  return <div ref={wrapperRef}>{children}</div>;
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(ClickOutside);
