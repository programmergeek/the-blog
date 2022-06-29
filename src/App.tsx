import React from "react";
import "./App.css";
import { HeroBanner } from "./Components/HeroBanner/HeroBanner";
import { NavBar } from "./Components/Nav-bar/NavBar";

function App() {
  return (
    <div className="App main">
      <div className="navigation border-black border-4">
        <NavBar />
      </div>
      <div className="left-gutter border-black border-4 w-1/5"></div>
      <div className="banner border-black border-4">
        <HeroBanner />
      </div>
      <div className="masonry-grid border-black border-4"></div>
      <div className="right-gutter border-black border-4 w-1/5"></div>
    </div>
  );
}

export default App;
