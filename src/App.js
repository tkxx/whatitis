import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import "./global.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Tabitha Sin</h1>
      <p>web developer</p>
      <Footer />
    </div>
  );
}

export default App;
