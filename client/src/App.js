import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import CheckoutPage from './pages/checkout/checkout';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import './App.css';

function App({ checkUserSession, currentUser }) {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<Fragment>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route exact path='/checkout' component={CheckoutPage} />
				<Route exact path='/signin' render={() => (currentUser ? <Redirect to='/' /> : <SignInAndSignUp />)} />
			</Switch>
		</Fragment>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
