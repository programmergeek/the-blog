import React from "react";
import { Tags } from "../Tag/Tags";

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
      className="card w-full bg-base-100 rounded-md shadow-md hover:shadow-2xl"
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
          <a href={props.href}>{props.title}</a>
        </h2>
        <span className="flex flex-row flex-wrap justify-start mt-2">
          <Tags tags={props.tags} />
        </span>
        <p className="text-left text-xs md:text-base mt-1">{props.snippet}</p>
        <div className="card-actions justify-end py-2">
          <a href={props.href} className="w-fit">
            <button className="btn">Read more</button>
          </a>
        </div>
      </div>
    </div>
  );
};
