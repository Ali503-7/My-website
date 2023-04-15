import React, { useRef } from "react";
import "./email.scss";

function email() {
  return (
    <div className="Email container">
      <span className="email">
        <a href="mailto:alimoali576@gmail.com">alimoali576@gmail.com</a>
      </span>
      <span className="line"></span>
    </div>
  );
}

export default email;
