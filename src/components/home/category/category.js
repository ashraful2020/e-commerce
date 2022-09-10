import React, { memo } from "react";
import "./category.css";
import img1 from "../../../assets/category/computer.png";
import img2 from "../../../assets/category/electronics.png";
import img3 from "../../../assets/category/fitness.png";
import img4 from "../../../assets/category/personal_and_health_care.png";
import img5 from "../../../assets/category/pet.png";
const Category = memo(() => {
  return (
    <>
      <div className="mb-6 m-2 bg-gradient-to-b from-neutral-300 via-stone-100 to-white lg:-mt-56 md:-mt-32 -mt-12 ">
        <div className="lg:mx-32">
        <div className="mx-auto">
          <div className="items-center justify-center md:flex">
            <Product id={1} title="Computers & Accessories" img={img1} />
            <Product id={2} title="Electronics " img={img2} />
            <Product id={4} img={img4} title="Health & Personal Care" />
          </div>
          <div className="items-center justify-center md:flex">
            <Product id={3} img={img3} title="For your Fitness Needs" />
            <Product img={img5} id={5} title="Shop Pet supplies" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
});

export default Category;

function Product({ img, title}) {
  return (
    <div className=" z-50 mx-auto  w-2/4 m-3 rounded-md bg-white px-3 py-2 lg:px-8 lg:py-4 text-left shadow-2xl">
      <h1 className="lg:text-2xl font-semibold">{title}</h1>
      <img className="" src={img} alt="" srcSet="" />
      <p className="  text-sm text-blue-500 underline">Explore now</p>
    </div>
  );
}
