import * as React from 'react';

function MinusIcon(props) { 
  return (
    <div className={`m-5 bg-gray-200 px-5 py-4 `}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        {...props}>
        <path d="M5 11H19V13H5z" />
      </svg>
    </div>
  );
}

export default MinusIcon;
