import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  const [mode, setMode] = useState(`dark`); // whether dark mode is enable or not
  return (
    <>
      <Navbar title="Skin Media" aboutText="About Us" mode= {mode}/>

      <div className="container my-3">
        <TextForm heading="Enter the text to analyse below:" />
        {/* <About/> */}
        <h3>testing ok </h3>
      </div>
    </>
  );
}

export default App;
