import React from "react";
interface Props {
  children: React.ReactNode;
}

export const Header: React.FC<Props> = ({ ...props }) => {
  return (
    <header className="text-3xl md:text-5xl mt-12 lg:text-6xl 2xl:text-7xl text-black font-semibold my-3">
      {props.children}
    </header>
  );
};
