import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview';

import './collections-overview.scss';

function CollectionsOverview(props) {
	const { collections } = props;
	return (
		<div className='collections-overview'>
			{collections.map(({ id, ...otherProps }) => (
				<CollectionPreview key={id} {...otherProps} />
			))}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
