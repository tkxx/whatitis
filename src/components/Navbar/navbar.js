import React from "react";
import peaceSign from "../../images/peaceSign.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav id="sidebar">
        <img src={peaceSign} id="peace-sign" />
        <ul>
          <li>ABOUT</li>
          <li>WORK</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
