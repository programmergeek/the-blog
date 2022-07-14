import React from "react";

interface Props {
  title: string;
  href: string;
  image?: string;
  snippet: string;
}

export const Card: React.FC<Props> = ({ ...props }) => {
  return (
    <div
      className="card w-[400px] bg-base-100 rounded-md hover:shadow-2xl"
      style={{ transition: "150ms" }}
    >
      {props.image ? (
        <figure className="p-3">
          <img className="rounded-xl" src={props.image} alt="card" />
        </figure>
      ) : (
        ""
      )}
      <div className="card-body px-3">
        <h2 className="card-title text-4xl">{props.title}</h2>
        <p className="text-left">{props.snippet}</p>
        <div className="card-actions justify-end">
          <a href={props.href} className="w-fit">
            <button className="btn">Read more</button>
          </a>
        </div>
      </div>
    </div>
  );
};
