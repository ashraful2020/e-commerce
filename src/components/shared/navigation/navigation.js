import React, {useState} from 'react';
import logo from '../../../assets/logo.png';

import {AiFillHome} from 'react-icons/ai';
const Navigation = () => {
  const Menus = [
    {name: 'Home', icon: AiFillHome, dis: '-translate-x-[7.3rem]'},
    {name: 'Profile', icon: AiFillHome, dis: '-translate-x-10'},
    {name: 'Message', icon: AiFillHome, dis: 'translate-x-10'},
    {name: 'Photos', icon: AiFillHome, dis: 'translate-x-[7.2rem]'},
  ];
  const [active, setActive] = useState(0);
  const user = null;
  return (
    <div>
      <div className="my-2 hidden items-center justify-around md:flex">
        <p className="w-40">
          <img className="h-20 w-20" src={logo} alt="logo" />
        </p>
        <form className="w-3/5">
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                className="z-20 block h-14 w-full rounded-sm border border-gray-200   bg-gray-50 p-2.5 text-xl text-gray-900 focus:border-blue-200 focus:outline-none"
                placeholder="Search your product"
                required=""
              />

              <button
                type="submit"
                className="absolute top-0 right-0 h-14 rounded-sm bg-blue-700 p-2.5 px-8 text-sm font-medium text-white ">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
        <div className="flex w-52 justify-around">
          <div>
            <p className="text-left font-serif text-xs leading-3">
              Hello , {user ? user.displayName : 'sign in'}
            </p>
            <p className="text-left text-lg font-bold leading-3">
              Account & Lists
            </p>
          </div>
          <div></div>

          <p>🛒</p>
        </div>
      </div>
      {/*  Mobile menu  */}
      <div>
        <div className=" block md:hidden fixed  bottom-0 left-0 right-0 z-50 max-h-[4.4rem] rounded-t-xl bg-black px-1 text-white">
          <ul className="relative flex justify-around">
            <span
              className={`bg-rose-600 duration-500 ${Menus[active].dis} absolute -top-5 h-16 w-16 rounded-full border-2 border-gray-50`}>
              <span className="absolute top-4 -left-[18px] h-3.5 w-3.5 rounded-tr-[11px] bg-transparent"></span>
              <span className="absolute top-4 -right-[18px] h-3.5 w-3.5 rounded-tl-[11px] bg-transparent"></span>
            </span>
            {Menus.map((menu, i) => (
              <li key={i} className="w-16">
                <a
                  className="flex flex-col pt-6 text-center"
                  onClick={() => setActive(i)}>
                  <span
                    className={`z-50 mx-auto cursor-pointer text-xl duration-500 ${
                      i === active && '-mt-6 text-white'
                    }`}>
                    {' '}
                    <menu.icon />{' '}
                  </span>
                  <span
                    className={` ${
                      active === i
                        ? 'translate-y-4 opacity-100 duration-700'
                        : 'translate-y-10 opacity-0'
                    } `}>
                    {menu.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
