import React, { memo } from 'react';

const MyOrder = memo(() => {
    return (
        <div>
            <div>
                <h1 className='text-2xl py-8 text-black font-serif'>My Orders </h1>
                <div className='bg-white md:py-24'>
                    <div className='flex items-center justify-around'>
                        <FaCreditCard className="text-gray-200 text-7xl" />
                    </div>
                    <h1 className='text-xl text-center'>My Orders</h1>
                </div>
            </div>
        </div>
    );
});

export default MyOrder;

function FaCreditCard(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 576 512" height="1em" width="1em" {...props}><path d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z" /></svg>;
}


