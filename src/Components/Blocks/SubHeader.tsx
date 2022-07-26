import React from "react";

interface Props {
  children: React.ReactNode;
}

export const SubHeader: React.FC<Props> = ({ ...props }) => {
  return (
    <span className="text-2xl md:text-3xl lg:text-5xl mt-8 text-black font-semibold my-2">
      {props.children}
    </span>
  );
};
