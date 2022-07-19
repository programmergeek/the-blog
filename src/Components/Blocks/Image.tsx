import React from "react";
import { content } from "./types";

export const Image: React.FC<content> = ({ ...props }) => {
  return (
    <div className="w-full my-7">
      <img
        src={props.content}
        alt=""
        className="mx-auto max-w-xs md:max-w-md lg:max-w-2xl rounded-md"
      />
      {props.link ? (
        <p className="text-center text-xs md:text-base font-medium">
          Source:{" "}
          <a
            className="text-primary hover:underline"
            href={props.link}
            target="_blank"
            rel="noreferrer"
          >
            {props.link}
          </a>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};
