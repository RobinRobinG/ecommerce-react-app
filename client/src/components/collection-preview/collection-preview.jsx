import React from "react";
import CollectionItem from "../collection-item/collection-item";
import "./collection-preview.scss";

function CollectionPreview(props) {
  const { title, items } = props;

  const displayTitle = title.split(/(?=[A-Z])/).join(" ");

  return (
    <div className="collection-preview">
      <h1 className="title">{displayTitle}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
