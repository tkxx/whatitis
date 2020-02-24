import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import peaceSign from "../../images/peaceSign.svg";
import "../../global.css";

const Main = props => {
  return (
    <React.Fragment>
      <div id="main-box">
        {/* <span>
          <img src={peaceSign} id="peace-sign" />
        </span> */}
        <h1>TABITHA SIN</h1>
        <p className="bold-text">
          web developer. speculative writer.
          <p className="bold-text">
            trying to create change one line at a time.
          </p>
        </p>
        <div id="icons">
          <Link to="/work">
            <FontAwesomeIcon icon={faLaptopCode} size="2x" />
          </Link>{" "}
          <a
            href="https://www.github.com/tkxx"
            target="_blank"
            className="icon-links"
          >
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
      <Footer />
    </React.Fragment>
  );
};

export default Main;
