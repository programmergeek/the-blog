import React from "react";

interface Props {
  value: any;
}

// The text block is supposed to handle different types of text, i.e bold, italics, underline, etc...
export const Text: React.FC<Props> = ({ ...props }) => {
  return (
    <p className="my-5">
      {props.value.children.map((text: any) => {
        switch (text.marks[0]) {
          case "strong":
            return <span className="font-semibold">{text.text}</span>;

          case "underline":
            return <span className="underline"> {text.text} </span>;

          case "italic":
            return <span className="italic"> {text.text} </span>;

          default:
            return text.text;
        }
      })}
    </p>
  );
};
