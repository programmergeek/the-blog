import React from "react";
import { block } from "./types";

// The text block is supposed to handle different types of text, i.e bold, italics, underline, etc...
export const Text: React.FC<block> = ({ ...props }) => {
  return (
    <div className="text-xs md:text-base">
      {props.content.map((text, i) => {
        if (text.type === "bold") {
          return (
            <span key={i} className="font-bold">
              {" "}
              {props.content[i].content}
            </span>
          );
        } else if (text.type === "italic") {
          return (
            <span key={i} className="italic">
              {" "}
              {props.content[i].content}{" "}
            </span>
          );
        } else if (text.type === "link") {
          return (
            <span key={i}>
              <a
                className="text-primary hover:underline"
                href={props.content[i].link}
              >
                {props.content[i].content}
              </a>
            </span>
          );
        } else if (text.type === "underline") {
          return (
            <span key={i} className="underline">
              {" "}
              {props.content[i].content}{" "}
            </span>
          );
        } else {
          return <span key={i}> {props.content[i].content} </span>;
        }
      })}
    </div>
  );
};
