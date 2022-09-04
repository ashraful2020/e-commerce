import React, { memo } from "react";
import img1 from "../../../assets/trending/banner-01.jpg";
import img2 from "../../../assets/trending/banner-02.jpg";
import img3 from "../../../assets/trending/banner-03.jpg";
const Trending = memo(() => {
  return (
    <div>
      <div className="">
        <div className="mx-auto grid grid-flow-col grid-rows-2 gap-5 ">
          {/* first */}
          <div className="col-span-1  row-span-2 hover:brightness-95">
            <Details
              title="Big patterns are back in fashion"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
              top={true}
            />
            <img
              className="h-80 w-full  object-cover   md:h-full lg:h-full "
              src={img1}
              alt="music"
            />
          </div>
          {/* second */}
          <div className="row-start-3 mx-5 hover:brightness-95 md:mx-0 lg:row-start-1">
            <Details
              title="The latest men's trends this season"
              description="Don't miss this opportunity ."
              top={false}
            />
            <img
              className="h-72 w-full object-cover  lg:h-full"
              src={img2}
              alt="wealth"
            />
          </div>
          {/*  third */}
          <div className=" row-start-3 hidden hover:brightness-95   md:block lg:row-start-2">
            <Details
              title="Show your fashion with summer shoes"
              description="Don't miss this opportunity ."
              top={false}
            />
            <img
              className="h-72 object-cover  lg:h-full"
              src={img3}
              alt="health"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Trending;

function Arrow() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      className="text-2xl"
    >
      <path
        fillRule="evenodd"
        d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Details({ title, description, top }) {
  return (
    <div className="relative z-10 w-4/6 text-black">
      <div className="absolute pt-10 pl-10 text-left">
        <p className="py-3 uppercase">New season </p>
        <h1
          className={`py-2 font-sans ${
            top ? "text-2xl lg:text-5xl" : "text-md lg:text-3xl"
          } font-semibold`}
        >
          {title}
        </h1>
        <p className="w-4/5 py-3">{description}</p>
        <div className="flex items-center py-5 font-bold">
          Shop Now{" "}
          <div className="ml-5 mt-0.5">
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
}
