import React from "react";
import "./style.scss";

function Button({ children, ...props }) {
  return (
    <button className="customizeButton" {...props}>
      {children}
    </button>
  );
}

export default Button;
