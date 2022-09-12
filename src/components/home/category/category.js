import React, {memo} from 'react';
import './category.css';
import img1 from '../../../assets/category/computer.png';
import img2 from '../../../assets/category/electronics.png';
import img3 from '../../../assets/category/fitness.png';
import img4 from '../../../assets/category/personal_and_health_care.png';
import img5 from '../../../assets/category/pet.png';
const Category = memo(() => {
  return (
    <>
      <div className="mb-6 bg-gradient-to-b from-neutral-300 via-stone-100 to-white md:-mt-32 lg:-mt-56">
        <div className="mx-auto lg:w-4/5">
          <div className="items-center justify-center md:flex">
            <Product img={img1} title="Computers & Accessories" />
            <Product img={img2} title="Electronics " />
            <Product none={true} img={img4} title="Health & Personal Care" />
          </div>
          <div className="items-center justify-center md:flex">
            <Product img={img3} title="For your Fitness Needs" />
            <Product none={true} img={img5} title="Shop Pet supplies" />
          </div>
        </div>
      </div>
    </>
  );
});

export default Category;

function Product({img, title, none}) {
  return (
    <div
      className={`z-10 md:m-5 mx-auto mb-5 bg-white text-left shadow-2xl  shadow-indigo-100 lg:px-4 ${
        none && 'hidden lg:block'
      } `}>
      <h1 className="font-semibold lg:text-2xl">{title}</h1>
      <img className="h-full w-full" src={img} alt="" srcSet="" />
      <p className="  text-sm text-blue-500 underline">Explore now</p>
    </div>
  );
}
