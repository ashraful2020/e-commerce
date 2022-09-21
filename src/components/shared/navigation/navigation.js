import React, { useState, useEffect } from 'react';
import logo from '../../../assets/logo.png';
import HomeIcon from '../../custom/icons/homeIcon';
import CategoryIcon from '../../custom/icons/categoryIcon';
import CartIcon from '../../custom/icons/cartIcon';
import profileIcon from '../../custom/icons/profileIcon';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  const Menus = [
    { name: 'Home', icon: HomeIcon, link: "/" },
    { name: 'Category', icon: CategoryIcon, link: "/category" },
    { name: 'Cart', icon: CartIcon, link: "/cart" },
    { name: 'Account', icon: profileIcon, link: "/account" },
  ];
  const [active, setActive] = useState(0);
  const { user } = useAuth();
  const [searchValue, setSearchValue] = useState('');
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newProduct=products.filter(product=>product.name.toLowerCase().match(searchValue.toLowerCase()))
    console.log(newProduct);
    console.log(searchValue); 
  
  }
  return (
    <div>
      <div className="my-2 hidden items-center justify-around md:flex">
        <Link to="/" className="w-40">
          <img className="h-20 w-20" src={logo} alt="logo" />
        </Link>
        <form className="w-3/5" onSubmit={handleOnSubmit}>
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                className="z-20 block h-14 w-full rounded-sm border border-gray-200   bg-gray-50 p-2.5 text-xl text-gray-900 focus:border-blue-200 focus:outline-none"
                placeholder="Search your product"
                required={true}
                onChange={(e) => setSearchValue(e.target.value)}
              />

              <button
                // type="submit"
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
          <Link to={`${user.email ? '/account' : '/login'}`}>
            <p className="text-left font-serif text-xs leading-3">
              Hello , {user.email ? user.displayName : 'sign in'}
            </p>
            <p className="text-left text-lg font-bold leading-3">
              Account & Lists
            </p>
          </Link>
          <Link to="/cart">
            <CartIcon />
          </Link>
        </div>
      </div>
      {/*  Mobile menu  */}
      <div>
        <div className=" fixed bottom-0 left-0  right-0 z-50 block h-[3rem] rounded-t-lg  bg-gray-800 text-white md:hidden">
          <ul className="relative flex justify-around">

            {Menus.map((menu, i) => (
              <li key={i} className="w-16 p-1">
                <Link to={menu.link}
                  className="flex flex-col"
                  onClick={() => setActive(i)}>
                  <span
                    className={` mx-auto cursor-pointer text-xl  duration-500 ${i === active && '-mt-6 p-2 border-[3px] border-transparent rounded-full bg-blue-500'
                      }`}>
                    <menu.icon />{' '}
                  </span>
                  <span
                    className={` text-xs ${active === i
                      ? 'translate-y-5 pt-1 -mt-6 opacity-100 duration-700'
                      : 'translate-y-100 opacity-0'
                      } `}>
                    {menu.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;


