import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import "./global.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <p>
        Hi! I'm <span className="bold-text">Tabitha</span>, a full stack web
        developer looking for my next opportunity to create change.{" "}
      </p>
      <Footer />
    </div>
  );
}

export default App;
