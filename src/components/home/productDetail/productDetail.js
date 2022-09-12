import React, {memo} from 'react';
import image from '../../../assets/trousers1.jpeg';
import ArrowIcon from '../../custom/icons/ArrowIcon';
import MinusIcon from '../../custom/icons/minusIcon';
import PlusIcon from '../../custom/icons/plusIcon';
import ProductImage from './productImage';
const ProductDetail = memo(() => {
  const price = 620;
  const discount = 10;
  return (
    <div className="mx-auto mt-32 w-10/12 bg-rose-200">
      {/*  Product info and order info  */}
      <div className="grid-flow-col grid-cols-3 md:grid">
        <div className="col-span-1">
          <ProductImage />
        </div>
        <div className="col-span-2 text-left">
          <h1 className="text-4xl">Ripstop Cargo Trousers With Pockets</h1>
          <p className="text-lg">⭐⭐⭐⭐⭐ 205 rating </p>
          <p>Brand : Ashraful Group</p>
          <h1>৳ {price - (discount / 100) * price}</h1>
          <div className="flex text-sm">
            <h1 className="text-gray-400 line-through">৳ {price}</h1>
            <ArrowIcon />
            <h1> {discount} %</h1>
          </div>

          <div className="flex items-center">
            {' '}
            Quantity : <MinusIcon /> {1} <PlusIcon />{' '}
          </div>
          {/* Add to cart button */}

          <div className="flex justify-evenly">
            <button className="bg-sky-500 px-20 py-3 text-xl text-white">
              Buy Now{' '}
            </button>
            <button className="bg-orange-500 px-20 py-3 text-xl text-white">
              Add to cart{' '}
            </button>
          </div>
        </div>
      </div>
      {/*  Product Details  */}
      <div></div>
    </div>
  );
});

export default ProductDetail;
