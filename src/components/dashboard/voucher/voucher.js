import React, { memo } from 'react';

const Voucher = memo(() => {
    return (<div>
        <h1 className='text-2xl py-8 text-black font-serif'>My Voucher </h1>
        <div className='bg-white md:py-24'>
        <h1 className='text-xl text-center'>No Vouchers found</h1>
        </div>
    </div>
    );
});

export default Voucher;