import React, { memo } from 'react';
import districtName from '../../../assets/districtName';
import FormInput from '../../custom/components/FormInput';
import CheckoutInfo from './checkoutInfo';

const Checkout = memo(() => {
    document.title = "Checkout | Amar Store"
    const district = districtName.map((name, _i) => <option value={name} key={_i}> {name} </option>)
    return (
        <div className='flex w-full'>
            <div className="w-8/12">
                <FormInput placeholder="Enter your name" />
                <FormInput placeholder="your email" />
                <FormInput placeholder="city name" />
                <FormInput placeholder="your phone " />
                <FormInput placeholder="your email" />
                <select
                    className="w-52 border px-5 py-2  text-lg shadow-2xl ml-8"
                    onChange={(e) => console.log(e.target.value)}>
                    {district}
                </select>
            </div>

            <CheckoutInfo />

        </div>
    );
});

export default Checkout;    