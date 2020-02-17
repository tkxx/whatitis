import React from "react";
import "../../global.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div id="footer">
        <p>
          <span role="img" aria-label="heart-exclamation">
            ❣️
          </span>{" "}
          in NYC. images from canva.{" "}
          <span role="img" aria-label="copyright">
            ©️
          </span>{" "}
          2020.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
