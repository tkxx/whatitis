import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Main from "./components/Main/main";
import "./global.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
