import React from "react";

function Container(props) {
  return <div className="container-fluid main-container">{props.children}</div>;
}

export default Container;