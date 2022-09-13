import React, {memo} from 'react';
import Button from '../../custom/components/Button';
import ArrowIcon from '../../custom/icons/ArrowIcon';
import MinusIcon from '../../custom/icons/minusIcon';
import PlusIcon from '../../custom/icons/plusIcon';
import ProductImage from './productImage';
const ProductDetail = memo(() => {
  const price = 620;
  const discount = 10;
  const name = 'Ripstop Cargo Trousers With Pockets';
  const productInfo = {
    model: "DLH LBA 482q",
    brand: "ADDIDAS",
    material:"fixed"
  }
  return (
    <div className="mx-auto mt-32 w-10/12 bg-rose-50">
      {/*  Product info and order info  */}
      <div className="grid-flow-col grid-cols-3 md:grid">
        <div className="col-span-1">
          <ProductImage />
        </div>
        <div className="col-span-2 text-left">
          <h1 className="text-4xl">{name}</h1>
          <p className="text-lg">⭐⭐⭐⭐⭐ 205 rating </p>
          <p>Brand : Ashraful Group</p>
          <h1>৳ {price - (discount / 100) * price}</h1>
          <div className="flex text-sm">
            <h1 className="text-gray-400 line-through">৳ {price}</h1>
            <ArrowIcon />
            <h1> {discount} %</h1>
          </div>

          <div className="flex items-center">
            Quantity : <MinusIcon /> {1} <PlusIcon />{' '}
          </div>

          <div className="flex justify-evenly">
            <Button color="bg-sky-500" title="Buy Now " />
            <Button cartIcon={true} color="bg-orange-500" title="Add To cart" />
          </div>
        </div>
      </div>
      {/*  Product Details  */}
      <div>
        {/* // ?  Description of the Product  */}
        <div>
          <h1 className="text-left text-2xl">
            Details of the <b>{name}</b>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        {/* // ? Specification of the Product  */}
        <div>
          <h1 className='text-left text-2xl font-medium'>Specification of {name}</h1>
          <div className='md:flex items-center justify-around text-left py-6'>
            <p> <b>Brand</b> : {productInfo.brand? productInfo.brand : "no brand"} </p>
            <p> <b>Model</b> : {productInfo.model? productInfo.model : "no model"} </p>
            <p> <b>Material</b> : {productInfo.material? productInfo.material : "no material"} </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductDetail;
