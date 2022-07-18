import React from "react";
import { Header } from "../../Components/Blocks/Header";
import { SubHeader } from "../../Components/Blocks/SubHeader";
import { NavBar } from "../../Components/Nav-bar/NavBar";

export const Articles: React.FC = () => {
  return (
    <NavBar>
      <div className="article">
        <div className="left-gutter border-2 border-black"></div>
        <div className="article-content border-2 border-black">
          <Header content="CSS Specificity" />
          <SubHeader content="Sub-Header" />
        </div>
        <div className="right-gutter border-2 border-black"></div>
      </div>
    </NavBar>
  );
};
