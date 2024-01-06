import React from "react";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
function App() {
  return (
    <div className="App">
      <div className="main">
        <Home />
        <About />
        <Project />
        <div className="footer">
          <p>Built and designed by Thi Huyen Hoang.</p>
          <p>All rights reserved. ©</p>
        </div>
      </div>
       
    </div>
  );
}

export default App;
