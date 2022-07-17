import React from "react";
import { NavBar } from "../../Components/Nav-bar/NavBar";

export const Articles: React.FC = () => {
  return (
    <NavBar>
      <div className="article">
        <div className="left-gutter border-2 border-black"></div>
        <div className="article-content border-2 border-black"></div>
        <div className="right-gutter border-2 border-black"></div>
      </div>
    </NavBar>
  );
};
