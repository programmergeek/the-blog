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
          <HeroBanner
            image="https://picsum.photos/615/420"
            date="24 May 2022"
            href="/"
            snippet="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet faucibus nisl vel faucibus. Quisque imperdiet, arcu vel luctus varius, metus sem pharetra nunc, a vulputate nunc magna et justo."
            title="Understanding closures in JavaScript"
          />
        </div>
        <div className="masonry-grid"></div>
        <div className="right-gutter w-1/5"></div>
      </div>
    </NavBar>
  );
}

export default App;
