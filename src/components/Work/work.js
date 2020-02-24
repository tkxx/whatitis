import React from "react";
import Footer from "../Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../../components/Work/work.css";
import dbHomepage from "../../images/devBeatz-homepage.png";
import projectifyHomepage from "../../images/projectify-homepage.png";
import peaceSign from "../../images/peaceSign.svg";

const Work = props => {
  return (
    <React.Fragment>
      <h2 id="work-headline">
        <Link to="/">
          <img src={peaceSign} />
        </Link>
        WORK
      </h2>
      <div className="card-overall">
        <div id="devBeatz-card">
          <img src={dbHomepage} id="card-pic-db" />
          <div className="card-details">
            <h4>
              DevBeatz{" "}
              <span>
                <a href="http://www.devbeatz.xyz/#/" target="_blank">
                  <FontAwesomeIcon icon={faExternalLinkSquareAlt} size="sm" />
                </a>{" "}
                <a href="https://github.com/devbeatz/devbeatz" target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="sm" />
                </a>
              </span>
            </h4>
            <p className="card-titles">
              What is it?
              <span className="card-body">
                An e-commerce marketplace to connect illustrious producers with
                vocal artists. Group project at Dev Mountain. Designed entire
                site layout and implemented ChartJS. Completed within two weeks.
              </span>
            </p>

            <p className="card-titles">
              Tech Used:{" "}
              <span className="card-body">
                HTML, CSS, SCSS, Amazon S3, React JS, Redux, React Hooks,
                React-Bootstrap, ChartJS, Express, Node JS, PostgreSQL, Cypress
              </span>
            </p>
          </div>
        </div>
        <div id="projectify-card">
          <img src={projectifyHomepage} id="card-pic-projectify" />
          <div className="card-details">
            <h4>
              Projectify{" "}
              <span>
                <a href="http://www.projectify.space/#/" target="_blank">
                  <FontAwesomeIcon icon={faExternalLinkSquareAlt} size="sm" />
                </a>{" "}
                <a href="https://github.com/tkxx/Projectify" target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="sm" />
                </a>
              </span>
            </h4>
            <p className="card-titles">
              What is it?{" "}
              <span className="card-body">
                Gamify your task management experience with this list app by
                earning points with each task you complete. Personal project at
                Dev Mountain. Completed within two weeks.
              </span>
            </p>

            <p className="card-titles">
              Tech Used:{" "}
              <span className="card-body">
                HTML, CSS, SCSS, React JS, Redux, React-Bootstrap, Express, Node
                JS, PostgreSQL, Stripe
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Work;
