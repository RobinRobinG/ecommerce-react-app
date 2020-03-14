import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.scss";

function handleOnClick(props) {
  const { history, match, linkUrl } = props;

  return history.push(`${match.url}${linkUrl}`);
}

function MenuItem(props) {
  const { title, imageUrl, size } = props;

  return (
    <div className={`${size} menu-item`} onClick={() => handleOnClick(props)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
