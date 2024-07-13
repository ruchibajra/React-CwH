import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`); // whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }

    // makes the tab title reappear again and again
    // setInterval(() => {
    //   document.title = "Install TextUtils Now";
    // }, 2000);

    // setInterval(() => {
    //   document.title = "TextUtils is a great app!!!";
    // }, 1500);
  };

  const toggleRedMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "red";
      showAlert("Dark Red mode has been enabled", "success");
      document.title = "TextUtils - Red Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    <Router>
    <Navbar
        title="Skin Media"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
        toggleRedMode={toggleRedMode}
      />
      <Alert alert={alert} />

      <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below:" mode={mode}/>}/>
            <Route path="/about" element={<About/>}/>

          </Routes>          
      </div>

    </Router>
      

    
    </>
  );
}

export default App;
