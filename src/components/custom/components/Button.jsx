import React, {memo} from 'react';
import CartIcon from '../icons/cartIcon';
import GoogleIcon from '../icons/googleIcon';

const Button = memo(({color, title, onClick, icon}) => {
  return ( 
      <button
        className={`flex gap-3 items-center justify-evenly rounded-[4px]  ${
          color ? color : 'bg-blue-300'
        } px-20 py-3  m-2 text-xl text-white`}
        onClick={onClick}>
        {icon === 'cart' && <CartIcon />} {title}
        {icon === 'google' && <GoogleIcon />}
      </button>
 
  );
});

export default Button;
