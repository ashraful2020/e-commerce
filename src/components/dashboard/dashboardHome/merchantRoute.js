import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Button from '../../custom/components/Button';

const MerchantRoute = memo(() => {
    
    const { handleLogOut } = useAuth();
    return (<>
        <h1 className='text-xl font-bold'>Manage Shop</h1> 
        <Link className='d-link' to="/account/my-profile">My Profile </Link>
        <Link className='d-link' to="/account/all-product">All products</Link>
        <Link className='d-link' to="/account/address">Pick up Address</Link>
        <Link className='d-link' to="/account/add-product">Add Product</Link>
        <Link className='d-link' to="/account/update-product">Update Product</Link>
        <Link className='d-link' to="/account/payment-option">Payment Option</Link>
        <Button color="px-8 py-2 text-black bg-orange-400 my-4" title="Log out" onClick={handleLogOut}></Button> </>
    );
});

export default MerchantRoute;
