import React from "react";
import "./App.css";
import { HeroBanner } from "./Components/HeroBanner/HeroBanner";
import { NavBar } from "./Components/Nav-bar/NavBar";

function App() {
  return (
    <NavBar>
      <div className="App main">
        <div className="left-gutter w-1/5"></div>
        <div className="banner border-4 border-black rounded-2xl">
          <HeroBanner />
        </div>
        <div className="masonry-grid"></div>
        <div className="right-gutter w-1/5"></div>
      </div>
    </NavBar>
  );
}

export default App;
