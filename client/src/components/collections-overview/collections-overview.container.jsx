import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import CollectionsOverview from './collections-overview';
import withSpinner from '../with-spinner/with-spinner';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(connect(mapStateToProps), withSpinner)(CollectionsOverview);

export default CollectionsOverviewContainer;
