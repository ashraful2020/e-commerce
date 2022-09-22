import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import withLayout from '../../hocs/withLayout';
import http from '../../services/http.service';
import ArrowIcon from '../custom/icons/ArrowIcon';
import MinusIcon from '../custom/icons/minusIcon';
import PlusIcon from '../custom/icons/plusIcon';
import ProductImage from '../home/productDetail/productImage';
import img from '../../assets/category/fitness.png';
import Button from '../custom/components/Button';
import CartInfo from './cartInfo';
import { cart_length } from '../../features/productSlice';

const Cart = () => {
  document.title = "Cart | Amar Store"
  const productId = useSelector((state) => state.cart.product);
  const [cartProduct, setCartProduct] = useState([]);
  const dispatch = useDispatch();
  const uri = "/flash-product" || "/products" || "/latest-deal"
  useEffect(() => {
    http.get(uri)
      .then((res) => {
        if (res?.data?.length) {
          let storeProduct = []
          for (const id in productId) {
            let addedProducts = res?.data?.find(product => product._id === id);
            // storeProduct.push(addedProduct);
            if (addedProducts) {
              const quantity = productId[id];
              addedProducts.quantity = quantity;
              storeProduct.push(addedProducts);
            }
          }
          setCartProduct(storeProduct);
          dispatch(cart_length(storeProduct.length))
        }
      });
  }, [uri, productId,dispatch]); 
  console.log("render")
  return (
    <div className='flex w-full'>
      <div className="w-8/12">
        <table className="w-11/12 mx-auto text-left text-gray-500  ">
          <thead className="text-xs uppercase border-b-[1.7px]">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product
              </th>
              <th scope="col" className="py-3 px-6">
                price
              </th>
              <th scope="col" className="py-3 px-6">
                Quantity
              </th>
              <th scope="col" className="py-3 px-6">
                subtotal
              </th>
            </tr>
          </thead>
          <tbody>

            {cartProduct.map((product) =>
              <React.Fragment key={product._id}>
                <tr className="bg-white border-b-[.01px]">
                  <th scope="row" className="py-4 px-6 ">
                    <div className='flex items-center gap-4'>
                      <img src={product?.img} className="w-16 h-16" alt="cart images" />
                      <p>{product?.name} </p>
                    </div>
                  </th>
                  <td className="py-4 px-6">
                    ${product?.price}
                  </td>
                  <td className="">
                    <div className="flex items-center">
                      <MinusIcon size={1} /> {product?.quantity} <PlusIcon size={1} />
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    ${product?.quantity * product.price}
                  </td>
                </tr>
              </React.Fragment>
            )}
          </tbody>
        </table>
      </div>
      <CartInfo cartProduct={cartProduct} />


    </div>
  );
};

export default withLayout(Cart);
