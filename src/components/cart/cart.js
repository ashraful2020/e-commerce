import React, { memo } from 'react';
import withLayout from '../../hocs/withLayout';

const Cart = memo(() => {
    document.title="Cart | Amar Store"
    return (
        <div className=''>
            This is cart 
        </div>
    );
});

export default withLayout(Cart);