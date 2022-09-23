import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import withLayout from '../../hocs/withLayout';
import MinusIcon from '../custom/icons/minusIcon';
import PlusIcon from '../custom/icons/plusIcon';

import CartInfo from './cartInfo';
import { decrement_quantity, delete_from_cart, increment_quantity } from '../../features/cartSlice';
import Loader from '../shared/loader/loader';
import DeleteIcon from '../custom/icons/deleteIcon';
import useCart from '../../hooks/useCart';

const Cart = memo(() => {
  document.title = "Cart | Amar Store"
  const dispatch = useDispatch();
  const [cart] = useCart()
  if (!cart) {
    return <Loader />
  }
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

            {cart.map((product) =>
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
                      <MinusIcon onClick={() => dispatch(decrement_quantity(product?._id))} size={1} /> {product?.quantity}
                      <PlusIcon onClick={() => dispatch(increment_quantity(product?._id))} size={1} />
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    ${product?.quantity * product.price}
                  </td>
                  <td>
                    <DeleteIcon onClick={(e) => dispatch(delete_from_cart(product._id))} />
                  </td>
                </tr>

              </React.Fragment>
            )}

          </tbody>
        </table>
      </div>
      {/*  There information of cart  */}
      <CartInfo />
    </div>
  );
})

export default withLayout(Cart);
