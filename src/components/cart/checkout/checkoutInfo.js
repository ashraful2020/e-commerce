import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../../hooks/useCart';
import Button from '../../custom/components/Button';

const CheckoutInfo = memo(() => {
    const [cart] = useCart()
    let subtotal = 0;
    for (const product of cart) {

        subtotal = subtotal + product?.price * product?.quantity;
    }
    const vat = (subtotal * 0.05).toFixed(2);
    const shipping = subtotal > 50000 ? 0 : 15;
    const total = subtotal + shipping + Number(vat);

    return (
        <div className='w-3/12 mx-auto h-full border border-blue-700'>
            <div className='border-b flex justify-between p-3 m-2'> Your order  </div>
            <div className='border-b flex justify-between p-3 m-2 font-bold'>
                <p>Product</p>
                <p>Subtotal </p>
            </div>
            {
                cart.map((product, index) => {
                    return (<div key={index} className='border-b flex justify-between p-3 m-2'>
                        <p className='text-sm w-9/12'> {product?.name}  <b>× {product.quantity}</b></p>
                        <p> ${product.price * product.quantity}</p>
                    </div>)
                })
            }

            <div className='border-b flex justify-between p-3 m-2'>
                <p>Total :</p>  <p className='text-xl font-bold'> ${total}</p>
            </div>
            <Link to="/checkout" className='m-2'>
                <Button title="Place Order" color="bg-orange-600" />
            </Link>
        </div>
    );
});

export default CheckoutInfo;