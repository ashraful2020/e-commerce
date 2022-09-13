import React, {memo} from 'react';
import CartIcon from '../icons/cartIcon';

const Button = memo(({color,title,cartIcon}) => { 
  return (
    <div>
      <button className={`flex gap-3 ${color ? color :"bg-blue-300" } px-20 py-3  text-xl text-white`}>
       {cartIcon && <CartIcon/>}  {title}
      </button>
    </div>
  );
});

export default Button;
