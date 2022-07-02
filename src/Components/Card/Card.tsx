import React from "react";

export const Card: React.FC = () => {
  return (
    <div
      className="card w-96 bg-base-100 rounded-md hover:shadow-2xl"
      style={{ transition: "150ms" }}
    >
      <figure className="p-3">
        <img
          className="rounded-xl"
          src="https://picsum.photos/615/420"
          alt="card"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">CSS Specificity</h2>
        <p className="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          aliquam quo animi blanditiis nisi reprehenderit laboriosam nesciunt
          sed corrupti, quae totam, eaque hic nobis fugiat? Eaque repudiandae
          facilis accusantium mollitia!
        </p>
        <div className="card-actions justify-end">
          <button className="btn">Read more</button>
        </div>
      </div>
    </div>
  );
};
