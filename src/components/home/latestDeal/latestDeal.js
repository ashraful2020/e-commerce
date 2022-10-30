import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../../services/http.service";
import Timer from "../../custom/timer";

const LatestDeal = memo(() => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    http.get("/latest-deal").then((res) => setProducts(res));
  }, []); 
  console.log("🚀 ~ file: latestDeal.js ~ line 12 ~ LatestDeal ~ products", products)
  return (
    <div>
      <div className="my-12 items-center justify-center text-left md:flex">
        <h1 className="p-1 font-sans text-3xl font-medium md:w-1/3">
          Don't Miss The Last Deals
        </h1>
        <p className="p-1 text-justify md:w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas
        </p>
      </div>
      <div className="justify-between gap-4 lg:flex">
        {products.map((product, _i) => {
          return (
            <Link to={`/latest-deal/${product.id}`} key={_i} className="mb-5 border-2 p-1 md:flex md:p-5">
              <div className="md:w-2/5">
                <img
                  className="mx-auto h-72 w-52 object-cover"
                  src={product.img}
                  srcSet=""
                  alt=""
                />
              </div>
              <div className="text-left md:ml-4 md:w-3/5">
                <h1 className="py-1 font-sans text-lg font-medium capitalize">
                  {product.name}
                </h1>
                <h1 className="py-1 font-sans text-lg font-semibold capitalize">
                  {" "}
                  $ {product.price}
                </h1>
                <p>⭐⭐⭐⭐⭐ {product.ratings} reviews </p>
                <p className="py-3 text-sm font-normal text-gray-600">
                  {product.description.slice(0,95)+'....'}
                </p>
                <p className="text-sm font-semibold">Offer end in : </p>{" "}
                <Timer starting={Number(product?.latestAt)} ending={Number(product?.latestEnd)} />
                  <p className="py- text-sm font-normal text-gray-600">
                  Available - {product.stock}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
});

export default LatestDeal;