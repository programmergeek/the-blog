import React, { useEffect, useState } from "react";
import { Logo } from "../logo";

export const NavBar: React.FC = () => {
  const [logoSize, updateLogoSize] = useState<"small" | "big" | "xs" | "md">(
    "big"
  );

  useEffect(() => {
    // when the user scrolls on the page
    window.onscroll = () => {
      // check if the user has scrolled to the top of the page
      if (window.scrollY < 150) {
        // if the user has, change the logo size to 'big'
        updateLogoSize("big");
      } else {
        // if not make the logo size 'small'
        updateLogoSize("small");
      }
    };
  }, []);

  return (
    <nav id="nav" className="grid grid-cols-2 fixed top-0 w-full bg-base-100">
      <section id="logo" className="">
        <Logo size={logoSize} />
      </section>
      <section id="nav-buttons" className="grid grid-cols-4">
        <a href="/" className="font-semibold text-primary w-fit h-fit">
          <div id="home" className="w-fit">
            Home
            <div className="h-1 w-10 ml-1 bg-primary rounded-full"></div>
          </div>
        </a>
        <a
          href="http://github.com/programmergeek"
          className="text-accent hover:text-gray-900 font-semibold w-fit h-fit"
          style={{ transition: "150ms" }}
        >
          Github
        </a>
        <a
          href="https://twitter.com/programergeek"
          className="text-accent hover:text-[#1DA1F2] font-semibold w-fit h-fit"
          style={{ transition: "150ms" }}
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/thato-will-joseph-b0aa54219/"
          className="text-accent hover:text-[#0077b5] font-semibold w-fit h-fit"
          style={{ transition: "150ms" }}
        >
          Linkedin
        </a>
      </section>
    </nav>
  );
};