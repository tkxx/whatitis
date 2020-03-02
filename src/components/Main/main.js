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
        <h1>TABITHA SIN</h1>

        <p className="bold-text">
          full stack web developer{" "}
          <span role="img" aria-label="black-square">
            //
          </span>{" "}
          speculative fiction aficionado
          <p />
          searching for the next opportunity to create change
        </p>

        <div id="icons">
          <Link to="/work" title="Work">
            <FontAwesomeIcon icon={faLaptopCode} size="3x" />
          </Link>{" "}
          <a
            href="https://www.github.com/tkxx"
            target="_blank"
            title="Github"
            className="icon-links"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>{" "}
          <a
            href="https://www.linkedin.com/tabitha-sin"
            target="_blank"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
          </a>{" "}
          <a
            href="https://www.twitter.com/lazyloading_"
            target="_blank"
            title="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>{" "}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Main;
