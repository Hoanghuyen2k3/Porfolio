import React from "react";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Project /> 
    </div>
  );
}

export default App;
