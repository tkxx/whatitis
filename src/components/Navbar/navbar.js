import React from "react";
import peaceSign from "../../images/peaceSign.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <img src={peaceSign} id="peace-sign" />
        <ul>
          <li>ABOUT</li>
          <li>WORK</li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
