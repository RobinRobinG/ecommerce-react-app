import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

import CollectionPage from './collection';
import withSpinner from '../../components/with-spinner/with-spinner';

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(connect(mapStateToProps), withSpinner)(CollectionPage);

export default CollectionPageContainer;
