import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { clearCart } from "../../redux/cart/cart.actions";

function getPriceForStripe(price) {
  return price * 100;
}

function StripeCheckoutButton(props) {
  const { price, clearCart } = props;
  const priceForStripe = getPriceForStripe(price);
  const publishableKey = "pk_test_bCeL9TDVphSTEYQG2RxNpqOE";

  const onToken = async token => {
    try {
      const response = await axios({
        url: "/payment",
        method: "post",
        data: {
          amount: priceForStripe,
          token,
        },
      });

      if (response) {
        alert("Payment successful");
        clearCart();
      }
    } catch (error) {
      console.log("Payment error:", JSON.parse(error));
      alert("There was an issue with your payment");
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="My Shop"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);

export default StripeCheckoutButton;
