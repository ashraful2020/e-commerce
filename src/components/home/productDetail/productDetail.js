import React, { memo, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import http from '../../../services/http.service';
import Button from '../../custom/components/Button';
import ArrowIcon from '../../custom/icons/ArrowIcon';
import MinusIcon from '../../custom/icons/minusIcon';
import PlusIcon from '../../custom/icons/plusIcon';
import ProductImage from './productImage';
import { useDispatch } from 'react-redux'
import { add_to_cart } from '../../../features/cartSlice';
import useAuth from '../../../hooks/useAuth';
const ProductDetail = memo((props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const { currentUser } = useAuth()
  const handleAddToCart = (e) => {
    dispatch(add_to_cart(e))
  }

  // TODO
  useEffect(() => {
    http.get(`/product/${id}`).then((res) => setProduct(res));
  }, [id]);

  const { name, price, stock, img, detail, detail2, detail3 } = product;
  const images = [
    img,
    detail,
    detail2,
    detail3,
  ]

  const productInfo = {
    model: "DLH LBA 482q",
    brand: "ADDIDAS",
    material: "fixed"
  }
  return (
    <div className="mx-auto pt-12 w-10/12 ">
      {/*  Product info and order info  */}
      <div className="grid-flow-col grid-cols-3 md:grid">
        <div className="col-span-1">
          <ProductImage images={images} />
        </div>
        <div className="col-span-2 text-left">
          <h1 className="text-4xl">{name}</h1>
          <p className="text-lg">⭐⭐⭐⭐⭐ 205 rating </p>
          <p>Brand : Ashraful Group</p>
          <h1>৳ {price - (stock / 100) * price}</h1>
          <div className="flex text-sm">
            <h1 className="text-gray-400 line-through">৳ {price}</h1>
            <ArrowIcon />
            <h1> {stock} %</h1>
          </div>

          <div className="flex items-center">
            Quantity : <MinusIcon /> {1} <PlusIcon />{' '}
          </div>

          <div className="flex justify-evenly">
            {/* A button that will redirect to the checkout page.  */}
            {/*  TODO */}
            <Button color="bg-sky-500" icon="ab" title="Buy Now " />
            <Button icon="cart" color="bg-orange-500" title="Add To cart" onClick={(e) => handleAddToCart(id)} />
            {/* <Button icon="cart" color="bg-orange-500" title="Add To cart" onClick={(e) => dispatch(add_to_cart(id))} /> */}
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
            <p> <b>Brand</b> : {productInfo.brand ? productInfo.brand : "no brand"} </p>
            <p> <b>Model</b> : {productInfo.model ? productInfo.model : "no model"} </p>
            <p> <b>Material</b> : {productInfo.material ? productInfo.material : "no material"} </p>
          </div>
        </div>
      </div>
    </div>
  );

});
export default ProductDetail;
