import React from "react";
import "../../global.css";

function Footer(props) {
  return (
    <React.Fragment>
      <div id="footer">
        <p id="footer-text">
          made with plenty of{" "}
          <span role="img" aria-label="coffee">
            ☕
          </span>{" "}
          and{" "}
          <span role="img" aria-label="dumplings">
            🥟
          </span>{" "}
          // icons from{" "}
          <a href="https://www.canva.com" target="_blank">
            canva
          </a>{" "}
          and <a href="https://www.fontawesome.com">fontawesome</a> //{" "}
          <span role="img" aria-label="copyright">
            ©️
          </span>{" "}
          2020
        </p>
      </div>
    </React.Fragment>
  );
}

export default Footer;
