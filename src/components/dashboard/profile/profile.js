import React, { memo } from 'react';
import useAuth from '../../../hooks/useAuth';
import Button from '../../custom/components/Button';

const Profile = memo(() => {
    const user = {
        name: "Ashraful Islam",
        email: "ashraful.islam@gmail.com",
        phone: "123-456-1234",
        gender: "male",
    }
    return (
        <div className=''>
            <h1 className='text-2xl py-4'>My Profile</h1>
            <div className='grid grid-flow-row grid-cols-3 bg-white px-5 py-10'>
                {user.name && <p className='text-black font-semibold p-2'><span className='font-normal text-gray-600'>Full name </span><br /> {user.name}</p>}
                {user.email && <p className='text-black font-semibold p-2'><span className='font-normal text-gray-600'>Email Address</span> <br /> {user.email}</p>}
                {user.phone && <p className='text-black font-semibold p-2'><span className='font-normal text-gray-600'>Mobile</span> <br /> {user.phone}</p>}
                {user.gender && <p className='text-black font-semibold p-2'><span className='font-normal text-gray-600'>Gender</span> <br /> {user.gender}</p>}
            </div>

        </div>
    );
});

export default Profile;