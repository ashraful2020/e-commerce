import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Button from '../../custom/components/Button';

const DashboardRoute = memo(() => {
    const { handleLogOut } = useAuth();
    return (<>
        <h1 className='text-xl font-bold'>Manage My Account</h1>
        <Link className='block text-gray-600 hover:text-black' to="/account/my-profile">My Profile </Link>
        <Link className='block text-gray-600 hover:text-black' to="/account/address">Address Book</Link>
        <Link className='block text-gray-600 hover:text-black' to="/account/payment-option">My Payment Option</Link>
        <Link className='block text-gray-600 hover:text-black' to="/account/address">Vouchers</Link>
        <Link className='block hover:text-gray-600 ' to="/account/my-orders">
            <h1 className='text-xl font-bold'>My Orders</h1>
        </Link>
        <Link className='block text-gray-600 hover:text-black' to="/account/return">My Return</Link>
        <Link className='block text-gray-600 hover:text-black' to="/account/cancel">My Cancel </Link>

        <Button color="px-4 py-2 text-black bg-blue-200 items-start" title="Log out" onClick={handleLogOut}></Button>
    </>
    );
});

export default DashboardRoute;