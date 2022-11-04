import React, { memo, useEffect, useState } from 'react';
import withLayout from '../../hocs/withLayout';
import MinusIcon from '../custom/icons/minusIcon';
import PlusIcon from '../custom/icons/plusIcon';
import CartInfo from './cartInfo';


import { useDispatch } from 'react-redux';
import {
  decrement_quantity,
  increment_quantity,
  delete_from_cart,
} from '../../features/cartSlice';

import DeleteIcon from '../custom/icons/deleteIcon';
import useCart from '../../hooks/useCart';
import Button from '../custom/components/Button';
import { Link } from 'react-router-dom';
import MiniLoader from '../shared/loader/miniLoader';
import useCartFunc from '../../hooks/useCartFunc';
import useAuth from '../../hooks/useAuth';

const Cart = memo(() => {
  // const { decrement_quantity2, increment_quantity2, delete_from_cart2 } = useCartFunc()
  document.title = "🛒Cart | Amar Store";
  const [cart, isLoading] = useCart();
  useEffect(() => {
  }, [])
  const dispatch = useDispatch();
  // const [cart, isLoading,  delete_from_cart2, increment_quantity2, decrement_quantity2] = useCart();
  console.log("cart render.......");
  if (isLoading) return <MiniLoader />;
  const handleIncrementQuantity = (id) => {
    console.log(id)
    dispatch(increment_quantity(id))
  }
  const handleDecrementQuantity = (id) => {
    console.log(id)
    dispatch(decrement_quantity(id))
  }

  return (
    <div className="flex w-full">
      {(cart?.length ? (
        <>
          <div className="w-8/12">
            <table className="mx-auto w-11/12 text-left text-gray-500  ">
              <thead className="border-b-[1.7px] text-xs uppercase">
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
                {cart?.map(product => {
                  return (
                    <React.Fragment key={product.id}>
                      <tr className="border-b-[.01px] bg-white">
                        <th scope="row" className="py-4 px-6 ">
                          <div className="flex items-center gap-4">
                            <img
                              src={product?.img}
                              className="h-16 w-16"
                              alt="cart images"
                            />
                            <p>{product?.name} </p>
                          </div>
                        </th>
                        <td className="py-4 px-6">${product?.price}</td>
                        <td className="">
                          <div className="flex items-center">
                            <MinusIcon
                              onClick={() => handleDecrementQuantity(product.id)}
                              size={1}
                            />{' '}
                            {product?.quantity}
                            <PlusIcon
                              onClick={() => handleIncrementQuantity(product.id)}
                              size={1}
                            />
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          ${product?.quantity * product.price}
                        </td>
                        <td
                          onClick={() => dispatch(delete_from_cart(product.id))}>
                          <DeleteIcon />
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/*  There information of cart  */}
          <CartInfo />
        </>
      ) : !cart.length && (
        <>
          <p className="mx-auto text-xl">
            Your cart is currently empty.
            <Link to="/">
              {' '}
              <Button color="bg-orange-400 mt-10" title="Return to Shop" />
            </Link>
          </p>
        </>
      ))}
    </div>
  );
});

export default withLayout(Cart);
