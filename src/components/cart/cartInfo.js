import React, { useState } from 'react';
import Button from '../custom/components/Button';

const CartInfo = ({ cartProduct }) => {
 
    let subtotal = 0;
    for (const product of cartProduct) {
        // total = total + subtotal; 
        subtotal = subtotal + product.price * product.quantity;
    }
    const vat = subtotal * 0.05;
    const shipping = subtotal > 50000 ? 0 : 15;
    const total = subtotal + shipping + vat;
    return (
        <div className='w-3/12 mx-auto h-full border border-blue-700'>
            <div className='border-b flex justify-between p-3 m-2'>  Cart total  </div>
            <div className='border-b flex justify-between p-3 m-2'>
                <p>Subtotal : </p>
                <p> ${subtotal}</p></div>
            <div className='border-b flex justify-between p-3 m-2'>
                <p>Shipping fee : </p>
                <p> {shipping < 1 ? "You Got free Delivery " : `$ ${shipping}`} </p>
            </div>
            <div className='border-b flex justify-between p-3 m-2'>
                <p>Vat :</p> <p> ${vat}</p>
            </div>
            <div className='border-b flex justify-between p-3 m-2'>
                <p>Total :</p>  <p className='text-xl font-bold'> ${total}</p>
            </div>
            <div className='m-2'><Button title="Proceed to checkout" color="bg-orange-600" /> </div>
        </div>
    );
};

export default CartInfo;