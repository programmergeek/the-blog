import React from "react";
import { Tag } from "./Tag";

interface Props {
  tags: string[] | undefined;
}

export const Tags: React.FC<Props> = ({ ...props }) => {
  return (
    <span className="flex flex-row flex-wrap justify-start -ml-2 mb-1 w-fit">
      {props.tags
        ? props.tags.map((tag, i) => {
            return (
              <div className="" key={i}>
                <Tag tagName={tag} />
              </div>
            );
          })
        : ""}
    </span>
  );
};
