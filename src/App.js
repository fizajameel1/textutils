//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import About from "./components/About";

function App() {
  const [mode, setmode] = useState("dark");
  const [alert, setalert] = useState(null);

  const showalert = (msg, type) => {
    setalert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const togglemode = (Mode) => {
    setmode(Mode);

    if (Mode === "light") {
      //setmode('dark')
      document.body.style.backgroundColor = "white";
      showalert("light mode has been enabled", "success");
    } else if (mode === "dark blue") {
      //setmode('dark green')
      document.body.style.backgroundColor = "#001f3f";
      showalert("Dark blue mode has been enabled", "success");
    } else if (Mode === "darkgreen") {
      //setmode('grey')
      document.body.style.backgroundColor = "#013220";
      showalert("Dark green mode has been enabled", "success");
    } else {
      //setmode('light')
      document.body.style.backgroundColor = "#343a40";
      showalert("Dark grey mode has been enabled", "success");
    }
  };

return (
  <>
     <Router> 
    <Navbar
      title="TextUtils"
      about="About"
      home="Home"
      mode={mode}
      togglemode={togglemode}
    />
    <Alert alert={alert} />

    <div className="container my-3">
       <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={
          <Textform
            showalert={showalert}
            heading="Enter your text to analyse."
            mode={mode}
          />
        } />
      </Routes> 

      {/* Or if you just want to render Textform directly for now: */}
      <Textform
        showalert={showalert}
        heading="Enter your text to analyse."
        mode={mode}
      />
    </div>
    </Router>
  </>
);

}

export default App;
