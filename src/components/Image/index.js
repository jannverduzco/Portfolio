import React from "react";
import "./style.css";

function image(props) {
  return (
    <div className="image text-center" style={{ portfolioImage: `url(${props.portfolioImage})` }}>
      {props.children}
    </div>
  );
}

export default image;
