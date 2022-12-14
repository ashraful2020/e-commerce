import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import http from '../../../services/http.service';
import ArrowIcon from '../../custom/icons/ArrowIcon';
import Timer from '../../custom/timer';
const FlashSale = () => {
  const [products, setProducts] = useState([]);
  const [time, setTime] = useState({});
  useEffect(() => {
    http.get("/flash-product")
      .then((res) => {
        setProducts(res.data)
        setTime({ ending: res?.flashEnding, starting: res?.flashStarting })
      });
  }, []);
  return (
    <div className="m-2 mt-12 border-t p-2 shadow-xl">
      <div className="flex justify-between pb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-orange-600">On Sale Now</h1>
          <div className="md:ml-12 hidden md:flex items-center">
            <p>Ending in </p> <Timer starting={time?.starting} ending={time?.ending} duration={8640000000} />
          </div>
        </div>
        <button className="flex h-full border border-orange-500 px-5 py-2 text-orange-500">
          Shop More <ArrowIcon />
        </button>
      </div>
      <div className="flex items-center justify-around md:hidden">
        <p>Ending in </p> <Timer starting={time.starting} ending={time.ending} duration={8640000000} />
      </div>
      <hr />
      <div className="mx-auto grid grid-cols-3 gap-4 py-4 md:grid-cols-5 lg:gap-6">
        {products.map(product => {
          return <Link to={`/flash-product/${product.id}`}
            state="hello"
            key={product.id}
            className="mx-auto text-left hover:shadow-xl lg:p-2">

            <img src={product.img} className="mx-auto md:h-32 md:w-32" alt="" />
            <div>
              <h1 className="hidden font-semibold md:block">
                {product.name.slice(0, 15)}
              </h1>
              <h1>
                ৳ {product.price - (product.stock / 100) * product.price}
              </h1>
              <div className="flex text-sm">
                <h1 className="text-gray-400 line-through">
                  ৳ {product.price}
                </h1>
                <ArrowIcon />
                <h1> {product.stock} %</h1>
              </div>
            </div>
          </Link>
        })}
      </div>
    </div>
  );
};

export default memo(FlashSale);
