import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav id="sidebar">
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
