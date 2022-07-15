import React from "react";
import { Tag } from "../Tag/Tag";

interface Props {
  title: string;
  href: string;
  image?: string;
  snippet: string;
  tags?: string[];
}

export const Card: React.FC<Props> = ({ ...props }) => {
  return (
    <div
      className="card w-full bg-base-100 rounded-md hover:shadow-2xl"
      style={{ transition: "150ms" }}
    >
      {props.image ? (
        <figure className="p-3">
          <img className="rounded-xl mb-0" src={props.image} alt="card" />
        </figure>
      ) : (
        ""
      )}
      <div className="p-3 mt-0">
        <h2 className="card-title text-xl text-left md:text-3xl">
          {props.title}
        </h2>
        <span className="flex flex-row flex-wrap justify-start -ml-2 my-2">
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
        <p className="text-left text-xs md:text-base">{props.snippet}</p>
        <div className="card-actions justify-end py-2">
          <a href={props.href} className="w-fit">
            <button className="btn">Read more</button>
          </a>
        </div>
      </div>
    </div>
  );
};
