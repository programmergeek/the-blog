import React from "react";
import { content } from "./types";

export const SubHeader: React.FC<content> = ({ ...props }) => {
  return (
    <span className="text-2xl md:text-3xl lg:text-5xl text-black font-semibold">
      {props.content}
    </span>
  );
};
