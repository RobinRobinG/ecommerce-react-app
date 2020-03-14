import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.scss';

function renderWarningText() {
	return (
		<div className='test-warning'>
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - exp: Any future date - cvc: Any 3 digits - brand: Visa
		</div>
	);
}

function renderCartItems(cartItems) {
	return cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />);
}

function renderHeaderBlock(header) {
	return (
		<div className='header-block' key={header}>
			<span>{header}</span>
		</div>
	);
}

function renderCheckoutHeader() {
	const headers = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

	return <div className='checkout-header'>{headers.map(header => renderHeaderBlock(header))}</div>;
}

function CheckoutPage(props) {
	const { cartItems, total } = props;

	return (
		<div className='checkout-page'>
			{renderCheckoutHeader()}
			{renderCartItems(cartItems)}
			<div className='total'>Total: ${total}</div>
			{renderWarningText()}
			<StripeCheckoutButton price={total} />
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
