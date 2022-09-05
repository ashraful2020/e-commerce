import axios from "axios";
import React, { memo, useState, useEffect } from "react";
import Timer from "../../custom/timer";
import { Arrow } from "../trendingProduct/trending";
const FlashSale = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("./flashProduct.json").then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="m-2 mt-12 border-t p-2 shadow-xl">
      <div className="flex justify-between pb-2">
        <div className="flex items-center justify-between">
          <h1 className="pr-14 text-orange-600">On Sale Now</h1>
          <p className="pr-2">Ending in </p> <Timer />
        </div>
        <button className="flex h-full border border-orange-500 px-5 py-2 text-orange-500">
          Shop More <Arrow />
        </button>
      </div>
      <hr />
      <div className="grid grid-cols-7 py-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="mx-auto p-2 text-left hover:shadow-xl"
          >
            <img src={product.img} className="mx-auto h-32 w-32" alt="" />
            <div>
              <h1 className="font-semibold">{product.name}</h1>
              <h1>
                ৳ {product.price - (product.discount / 100) * product.price}
              </h1>
              <div className="flex text-sm">
                <h1 className="text-gray-400 line-through">
                  ৳ {product.price} tk
                </h1>
                <Arrow />
                <h1> {product.discount} %</h1>
              </div>
            </div>
          </div>
        ))}
        {/* <Timer/> */}
      </div>
    </div>
  );
};

export default memo(FlashSale);
