import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import withLayout from '../../hocs/withLayout';
import http from '../../services/http.service';
import ArrowIcon from '../custom/icons/ArrowIcon';
import MinusIcon from '../custom/icons/minusIcon';
import PlusIcon from '../custom/icons/plusIcon';
import ProductImage from '../home/productDetail/productImage';

const Cart = () => {
    document.title = "Cart | Amar Store"
    const productId = useSelector((state) => state.cart.product);
    const [products, setProducts] = useState([]);
    const [cartProduct, setCartProduct] = useState([]);
    const uri = "/flash-product"
    useEffect(() => {
        http.get(uri)
            .then((res) => {
                if (res?.data?.length) {
                    let storeProduct = []
                    for (const id in productId) {
                            
                            const addedProduct = res?.data?.find(product => product._id === id);
                            storeProduct.push(addedProduct);
                        }
                        setCartProduct(storeProduct);
                }
            });
    }, [productId,products]);
 


    return (

        <div className='grid grid-flow-rows grid-cols-3'>
            {cartProduct.map((product) =><div className="mx-auto pt-12 w-10/12 ">
        {/*  Product info and order info  */}
        <div className="grid-flow-col grid-cols-3 md:grid">
          <div className="col-span-1">
            <img src={product.img} alt="what" />
          </div>
          <div className="col-span-2 text-left">
            <h1 className="text-4xl">{product.name}</h1>
            <p className="text-lg">⭐⭐⭐⭐⭐ 205 rating </p>
            <p>Brand : Ashraful Group</p>
            <h1>৳ {product.price - (product.stock / 100) * product.price}</h1>
            <div className="flex text-sm">
              <h1 className="text-gray-400 line-through">৳ {product.price}</h1>
              <ArrowIcon />
              <h1> {product.stock} %</h1>
            </div>
  
            <div className="flex items-center">
              Quantity : <MinusIcon /> {1} <PlusIcon />{' '}
            </div>
  
         
          </div>
        </div>
        {/*  Product Details  */}
        <div>
          {/* // ?  Description of the Product  */}
          <div>
            <h1 className="text-left text-2xl">
              Details of the <b>{product.name}</b>
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
           
        </div>
      </div>)};
        </div>
    );
};

export default withLayout(Cart);