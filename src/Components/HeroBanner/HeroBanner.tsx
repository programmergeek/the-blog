import React from "react";

export const HeroBanner: React.FC = () => {
  return (
    <div className="highlight w-full lg:h-auto bg-base-100 cursor-pointer sm:grid flex flex-col">
      <img
        src="https://picsum.photos/615/420"
        alt=""
        className=" w-full h-auto rounded-xl"
      />
      <div className="p-7">
        <h5 className="text-left text-orange-400 sm:text-sm md:text-2xl">
          {" "}
          24 May 2022{" "}
        </h5>
        <h1
          className={`sm:text-xl font-medium md:text-[56px] md:leading-[60px] md:mb-4 lg:text-7xl text-left hover:text-secondary`}
          style={{ transition: "150ms" }}
        >
          Understanding closures in JavaScript
        </h1>
        <p
          className={`text-left font-medium text-black sm:text-sm md:text-base`}
          style={{ transition: "150ms" }}
        >
          Donec a velit ac lorem consectetur semper. Vestibulum felis neque,
          vestibulum sed ligula sit amet, lobortis consectetur lacus. In semper
          arcu eget lectus bibendum, vitae aliquet metus dignissim. Curabitur
          rutrum volutpat odio, eu varius sem.
        </p>
        <div className="flex justify-start">
          <button className="btn btn-wide mt-5">
            <a href="/">Read Post</a>
          </button>
        </div>
      </div>
    </div>
  );
};
