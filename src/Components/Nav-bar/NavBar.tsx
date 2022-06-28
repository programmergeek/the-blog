import React, { useEffect, useState } from "react";
import { Logo } from "../logo";
import { Menu } from "../menu";

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
    // <nav id="nav" className="grid grid-cols-2 fixed top-0 w-full bg-base-100">
    //   <section id="logo" className="">
    //     <a href="/">
    //       <Logo size={logoSize} />
    //     </a>
    //   </section>
    //   <section id="nav-buttons" className="grid grid-cols-4">
    //     <a href="/" className="font-semibold text-primary w-fit h-fit">
    //       <div id="home" className="w-fit">
    //         Home
    //         <div className="h-1 w-10 ml-1 bg-primary rounded-full"></div>
    //       </div>
    //     </a>
    //     <a
    //       href="http://github.com/programmergeek"
    //       className="text-accent hover:text-gray-900 font-semibold w-fit h-fit"
    //       style={{ transition: "150ms" }}
    //     >
    //       Github
    //     </a>
    //     <a
    //       href="https://twitter.com/programergeek"
    //       className="text-accent hover:text-[#1DA1F2] font-semibold w-fit h-fit"
    //       style={{ transition: "150ms" }}
    //     >
    //       Twitter
    //     </a>
    //     <a
    //       href="https://www.linkedin.com/in/thato-will-joseph-b0aa54219/"
    //       className="text-accent hover:text-[#0077b5] font-semibold w-fit h-fit"
    //       style={{ transition: "150ms" }}
    //     >
    //       Linkedin
    //     </a>
    //   </section>
    // </nav>
    <div className="drawer drawer-end fixed top-0">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-base-100">
          <div className="flex-1 px-2 mx-2">
            <a href="/">
              <Logo size={logoSize} />{" "}
            </a>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal bg-base-100">
              {/* <!-- Navbar menu content here --> */}
              <li>
                <a
                  href="/"
                  className="font-semibold text-primary w-fit h-fit hover:bg-base-100"
                >
                  <div id="home" className="w-fit">
                    Home
                    <div className="h-1 w-10 ml-1 bg-primary rounded-full"></div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="http://github.com/programmergeek"
                  className="text-accent hover:text-gray-900 font-semibold w-fit h-fit hover:bg-base-100"
                  style={{ transition: "150ms" }}
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/programergeek"
                  className="text-accent hover:text-[#1DA1F2] font-semibold w-fit h-fit hover:bg-base-100"
                  style={{ transition: "150ms" }}
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/thato-will-joseph-b0aa54219/"
                  className="text-accent hover:text-[#0077b5] font-semibold w-fit h-fit hover:bg-base-100"
                  style={{ transition: "150ms" }}
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <Menu />
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li>
            <a
              href="/"
              className="font-semibold text-primary w-fit h-fit hover:bg-base-100"
            >
              <div id="home" className="w-fit text-3xl">
                Home
                <div className="h-1 w-20 ml-2 bg-primary rounded-full"></div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="http://github.com/programmergeek"
              className="text-accent text-3xl hover:text-gray-900 font-semibold w-fit h-fit hover:bg-base-100"
              style={{ transition: "150ms" }}
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/programergeek"
              className="text-accent text-3xl hover:text-[#1DA1F2] font-semibold w-fit h-fit hover:bg-base-100"
              style={{ transition: "150ms" }}
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/thato-will-joseph-b0aa54219/"
              className="text-accent text-3xl hover:text-[#0077b5] font-semibold w-fit h-fit hover:bg-base-100"
              style={{ transition: "150ms" }}
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
