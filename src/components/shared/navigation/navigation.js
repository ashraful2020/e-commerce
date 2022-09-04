import React from "react";
import logo from "../../../assets/logo.png"
const Navigation = () => {
  const user = null;
  return (
    <div className="my-2 flex items-center justify-around">
      <p className="w-40">
        <img className="h-20 w-20" src={logo} alt="logo"/>
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
              className="absolute top-0 right-0 h-14 rounded-sm bg-blue-700 p-2.5 px-8 text-sm font-medium text-white "
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
      <div className="flex w-52 justify-around">
        <div>
          <p className="text-left font-serif text-xs leading-3">
            Hello , {user ? user.displayName : "sign in"}
          </p>
          <p className="text-left text-lg font-bold leading-3">
            {" "}
            Account & Lists
          </p>
        </div>
        <div></div>

        <p>🛒</p>
      </div>
    </div>
  );
};

export default Navigation;
