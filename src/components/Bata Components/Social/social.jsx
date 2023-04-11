import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./social.scss";

function social() {
  return (
    <div className="social container">
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/ali-mohamed-b351a6206/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/Ali503-7" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.frontendmentor.io/profile/Ali503-7"
          target="_blank"
        >
          <img src="./imgs/logs/frontend-mentor-seeklogo.com.svg" alt="" />
        </a>
      </div>
      <span className="line"></span>
    </div>
  );
}

export default social;
