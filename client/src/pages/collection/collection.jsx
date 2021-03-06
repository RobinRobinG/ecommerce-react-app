import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item';
import Parallax from '../../components/parallax/parallax';
import './collection.scss';

function CollectionPage(props) {
  const { collection } = props;
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <Parallax title={title} />
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} className="item" />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
