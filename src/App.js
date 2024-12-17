import React from "react";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Home />
        <About />
        <Experience />
        <Project />
        <Contact />
        <div className="footer">
          <p>Built and designed by Thi Huyen Hoang.</p>
          <p>All rights reserved. ©</p>
        </div>
      </div>
       
    </div>
  );
}

export default App;
