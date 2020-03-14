import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function getPriceForStripe(price) {
  return price * 100;
}

function StripeCheckoutButton(props) {
  const { price } = props;
  const priceForStripe = getPriceForStripe(price);
  const publishableKey = "pk_test_bCeL9TDVphSTEYQG2RxNpqOE";

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const onToken = async token => {
    try {
      const response = await axios({
        url: "/payment",
        method: "post",
        data: {
          amount: priceForStripe,
          token,
        },
        headers,
      });

      if (response) {
        alert("Payment successful");
      }
    } catch (error) {
      console.log({ error });
      console.log(`Payment error: ${error.Error}`);
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

export default StripeCheckoutButton;
