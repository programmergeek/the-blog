import React from "react";
import { Tag } from "../Tag/Tag";
interface Props {
  image: string;
  date: string;
  title: string;
  snippet: string;
  href: string;
  tags?: string[];
}

export const HeroBanner: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="highlight w-full lg:h-auto bg-base-100 sm:grid flex flex-col rounded-xl">
      <img
        src={props.image}
        alt=""
        className=" w-full h-auto rounded-xl sm:mx-2 sm:my-2 "
      />
      <div className="md:pl-5 pl-4 pb-2 md:pb-0 pt-2 pr-2 md:pr-5 lg:p-7 xl:p-8">
        <div className="flex">
          <h5 className="text-left text-orange-400 text-xs sm:text-sm md:text-md lg:text-lg 2xl:text-2xl">
            {props.date}
          </h5>
        </div>
        <h1
          className={`font-semibold sm:font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl  text-left hover:text-secondary`}
          style={{ transition: "150ms" }}
        >
          <a href={props.href}>{props.title}</a>
        </h1>
        <span className="flex flex-row justify-start -ml-2 mb-1">
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
        <p
          className={`text-left text-black text-xs md:text-sm xl:text-xl`}
          style={{ transition: "150ms" }}
        >
          {props.snippet}
        </p>
        <div className="flex sm:hidden lg:flex justify-end lg:justify-start mr-2">
          <button className="btn lg:btn-wide mt-5">
            <a href={props.href}>Read Post</a>
          </button>
        </div>
      </div>
    </div>
  );
};
