import React from "react";

interface Props {
  value: any;
}

export const BlockQuote: React.FC<Props> = ({ ...props }) => {
  return (
    <blockquote className="flex bg-accent p-5 rounded-md shadow-md">
      <div className="w-2 bg-primary rounded-sm"></div>
      <div className="ml-3">
        {props.value.children.map((text: any) => text.text)}
      </div>
    </blockquote>
  );
};
