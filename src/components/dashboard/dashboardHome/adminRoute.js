import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Button from '../../custom/components/Button';

const AdminRoute = memo(() => {
    const { handleLogOut } = useAuth();
    return (<>
        <h1 className='text-xl font-bold'>Manage Dashboard </h1>
        <Link className='d-link' to="/account/my-profile">My Profile </Link> 
        <Link className='d-link' to="/account/voucher">Available Vouchers</Link>
        <Link className='d-link' to="/account/available-voucher">available-voucher</Link>
        <Link className='d-link' to="/account/add-product">Add Product</Link>
        <Link className='d-link' to="/account/update-product">Update Product</Link>
        <Link className='d-link' to="/account/order-cancel"> order cancel</Link>
        <Link className='d-link' to="/account/order-status">order status</Link>
        <Link className='d-link' to="/account/return-req">return request </Link>
        <Link className='d-link' to="/account/merchant">MerchantAccount</Link>
        <Button color="px-4 py-2 text-black bg-blue-200 items-start" title="Log out" onClick={handleLogOut}></Button>
    </>
    );
});

export default AdminRoute;
/**
 * 
 * MY Profile
 * Available Vouchers
 * Add new Product
 * update Product
 * Cancellations Request
 * Order Status
 * Return Request
 * Merchant Account request
 * 
 * 
 */