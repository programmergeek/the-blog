import React from "react";
import "./App.css";
import { Card } from "./Components/Card/Card";
import { HeroBanner } from "./Components/HeroBanner/HeroBanner";
import { MasonryGrid } from "./Components/MasonryGrid/MasonryGrid";
import { NavBar } from "./Components/Nav-bar/NavBar";

const cardData = {
  href: "/",
  snippet:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt maximus pretium. Morbi lacinia turpis vitae urna mollis mattis. Sed in eros luctus, eleifend sem id, tincidunt orci. Ut nec.",
  title: "CSS Specificity",
};

function App() {
  return (
    <NavBar>
      <div className="App main">
        <div className="left-gutter w-1/5"></div>
        <div className="banner border-4 border-black rounded-2xl h-fit">
          <HeroBanner
            image="https://picsum.photos/615/420"
            date="24 May 2022"
            href="/"
            snippet="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet faucibus nisl vel faucibus. Quisque imperdiet, arcu vel luctus varius, metus sem pharetra nunc, a vulputate nunc magna et justo."
            title="Understanding closures in JavaScript"
            tags={["JavaScript", "front-end"]}
          />
        </div>
        <div className="masonry-grid">
          <MasonryGrid>
            <Card {...cardData} image="https://picsum.photos/615/420" />
            <Card {...cardData} tags={["css", "front-end"]} />
            <Card {...cardData} />
            <Card
              {...cardData}
              image="https://picsum.photos/615/420"
              tags={["React", "state management", "front-end"]}
            />
          </MasonryGrid>
        </div>
        <div className="right-gutter w-1/5"></div>
      </div>
    </NavBar>
  );
}

export default App;
