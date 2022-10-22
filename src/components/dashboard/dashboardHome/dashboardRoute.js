import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Button from '../../custom/components/Button';

const DashboardRoute = memo(() => {
    const { handleLogOut } = useAuth();
    return (<>
        <h1 className='text-xl font-bold'>Manage My Account</h1>
        <Link className='d-link' to="/account/my-profile">My Profile </Link>
        <Link className='d-link' to="/account/address">Address Book</Link>
        <Link className='d-link' to="/account/payment-option">My Payment Option</Link>
        <Link className='d-link' to="/account/voucher">Vouchers</Link>
        <Link className='block hover:text-gray-600 ' to="/account/my-orders">
            <h1 className='text-xl font-bold'>My Orders</h1>
        </Link>
        <Link className='d-link' to="/account/return">My Return</Link>
        <Link className='d-link' to="/account/cancel">My Cancel </Link>
        <Button color="px-8 py-2 text-black bg-orange-400 my-4" title="Log out" onClick={handleLogOut}></Button>
    </>
    );
});

export default DashboardRoute;
