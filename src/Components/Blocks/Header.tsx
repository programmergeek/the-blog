import React from "react";
import { content } from "./types";

export const Header: React.FC<content> = ({ ...props }) => {
  return (
    <header className="text-6xl text-black font-semibold">
      {props.content}
    </header>
  );
};
