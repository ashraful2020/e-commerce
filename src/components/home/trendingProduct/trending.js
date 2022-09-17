import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/trending/banner-01.jpg';
import img2 from '../../../assets/trending/banner-02.jpg';
import img3 from '../../../assets/trending/banner-03.jpg';
import ArrowIcon from '../../custom/icons/ArrowIcon';

const Trending = memo(() => {
  return (
    <div className="mx-auto grid grid-flow-col grid-rows-2 gap-5 ">
      {/* first */}
      <Link to="/product/3" className="col-span-1 row-span-2 hover:brightness-95">
        <Details
          title="Big patterns are back in fashion"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          top={true}
          id="1"
        />
        <img src={img1} alt="" />
      </Link>
      {/* second */}
      <Link to="/product/3" className="row-start-3 mx-5 hover:brightness-95 md:mx-0 lg:row-start-1">
        <Details
          title="The latest men's trends this season"
          description="Don't miss this opportunity ."
          top={false}
          id="2"
        />
        <img src={img2} alt="" />
      </Link>
      {/*  third */}
      <Link to="/product/3" className="row-start-3 hidden hover:brightness-95   md:block lg:row-start-2">
        <Details
          title="Show your fashion with summer shoes"
          description="Don't miss this opportunity ."
          top={false}
          id="3"
        />
        <img src={img3} alt="" />
      </Link>
    </div>
  );
}); 
export default Trending;

function Details({ title, description, top, id }) {
  return (
    <div className="relative z-10 text-black md:w-4/6">
      <div className="absolute pt-2 pl-2 text-left md:pt-6 md:pl-6 xl:pt-10 xl:pl-10">
        <p className="uppercase lg:py-3">New season </p>
        <h1
          className={`font-sans lg:py-2 ${top ? 'text-2xl lg:text-4xl xl:text-5xl' : 'text-md lg:text-3xl'
            } font-semibold`}>
          {title}
        </h1>
        <p className="lg:w-4/5 lg:py-3">{description}</p>
        <div className="flex items-center font-bold lg:py-5">
          Shop Now{' '}
          <div className="ml-5 mt-0.5">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
