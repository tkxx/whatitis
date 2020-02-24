import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Main from "./components/Main/main";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "../src/routes";
import "./global.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
  return (
    <Router>
      <div className="App">{routes}</div>
    </Router>
  );
}

export default App;
