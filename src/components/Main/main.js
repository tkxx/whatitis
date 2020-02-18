import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import "../../global.css";

const Main = () => {
  return (
    <React.Fragment>
      <div id="main-box">
        <h1>TABITHA SIN</h1>
        <p className="bold-text">
          web developer. speculative writer.{" "}
          <p>trying to create change one line at a time.</p>
        </p>
        <div id="icons">
          <a href="https://www.github.com/tkxx" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>{" "}
          <a href="https://www.twitter.com/lazyloading_" target="_blank">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>{" "}
          <a href="https://www.linkedin.com/tabithasin" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
