import React from "react";

interface Props {
  tagName: string;
}

export const Tag: React.FC<Props> = ({ ...props }) => {
  return (
    <span className="badge badge-secondary border-2 font-medium mx-2 min-w-[60px] mt-1 py-2 badge-outline text-xs md:text-sm lg:text-base">
      {props.tagName}
    </span>
  );
};
