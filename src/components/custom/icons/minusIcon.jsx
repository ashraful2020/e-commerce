import * as React from 'react';

function MinusIcon(props, {onClick}) {
  return (
    <div
      className={`m-5 bg-gray-200 ${props?.size ? 'px-2 py-1' : 'px-5 py-4'} `}
      onClick={onClick}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        height="1rem"
        width="1rem"
        {...props}>
        <path d="M5 11H19V13H5z" />
      </svg>
    </div>
  );
}

export default MinusIcon;
