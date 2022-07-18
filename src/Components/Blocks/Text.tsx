import React from "react";
import { block } from "./types";

// The text block is supposed to handle different types of text, i.e bold, italics, underline, etc...
export const Text: React.FC<block> = ({ ...props }) => {
  return (
    <div>
      {props.content.map((text, i) => {
        if (text.type === "bold") {
          return <span className="font-bold"> {props.content[i].content}</span>;
        } else if (text.type === "italic") {
          return <span className="italic"> {props.content[i].content} </span>;
        } else if (text.type === "link") {
          return (
            <span>
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
            <span className="underline"> {props.content[i].content} </span>
          );
        } else {
          return <span> {props.content[i].content} </span>;
        }
      })}
    </div>
  );
};
