import axios from 'axios';
import React, {memo, useState, useEffect} from 'react';
import Timer from '../../custom/timer';
import {Arrow} from '../trendingProduct/trending';
const FlashSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('./flashProduct.json').then(res => setProducts(res.data));
  }, []);

  return (
    <div className="m-2 mt-12 border-t p-2 shadow-xl">
      <div className="flex justify-between pb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-orange-600">On Sale Now</h1>
          <div className="ml-12 hidden md:block">
            <p>Ending in </p> <Timer duration={864000000} />
          </div>
        </div>
        <button className="flex h-full border border-orange-500 px-5 py-2 text-orange-500">
          Shop More <Arrow />
        </button>
      </div>
      <div className="flex items-center justify-around md:hidden">
        <p>Ending in </p> <Timer duration={864000000} />
      </div>
      <hr />
      <div className="mx-auto grid grid-cols-3 gap-4 py-4 md:grid-cols-5 lg:gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="mx-auto text-left hover:shadow-xl lg:p-2">
            <img src={product.img} className="mx-auto md:h-32 md:w-32" alt="" />
            <div>
              <h1 className="hidden font-semibold md:block">
                {product.name.slice(0, 15)}
              </h1>
              <h1>
                ৳ {product.price - (product.discount / 100) * product.price}
              </h1>
              <div className="flex text-sm">
                <h1 className="text-gray-400 line-through">
                  ৳ {product.price}
                </h1>
                <Arrow />
                <h1> {product.discount} %</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(FlashSale);
