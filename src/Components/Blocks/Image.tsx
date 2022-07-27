import React from "react";
import { urlFor } from "../../sanityFunctions";

interface Props {
  value: any;
}

export const Image: React.FC<Props> = ({ ...props }) => {
  return (
    <img
      src={urlFor(props.value.asset._ref).width(500).url()}
      alt=""
      className="rounded-md mx-auto my-12"
    />
  );
};
