import React from "react";

export const HeroBanner: React.FC = () => {
  return (
    <div className="highlight w-full lg:h-auto bg-base-100 cursor-pointer lg:grid flex flex-col">
      <img
        src="https://picsum.photos/615/420"
        alt=""
        className=" w-full h-auto rounded-xl"
      />
      <div className="p-7">
        <h5 className="text-left text-orange-400 sm:text-sm md:text-lg lg:text-xl 2xl:text-2xl">
          {" "}
          24 May 2022{" "}
        </h5>
        <h1
          className={`font-medium text-2xl sm:text-3xl md:text-4xl md:mb-4 lg:text-5xl xl:text-6xl 2xl:text-7xl  text-left hover:text-secondary`}
          style={{ transition: "150ms" }}
        >
          Understanding closures in JavaScript
        </h1>
        <p
          className={`text-left text-black text-xs sm:text-sm md:text-base lg:text-xl`}
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
