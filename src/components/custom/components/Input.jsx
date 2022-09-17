import React from 'react';

const Input = ({name, type, placeholder, onChange, required = false}) => {
  return (
    <input
      className={`m-1 w-11/12 border-b border-blue-500 p-3 text-lg focus:border-none md:m-5 md:w-7/12 ${
        type === 'submit' &&
        'w-full rounded-md  border-none bg-orange-400 text-xl text-white'
      }`}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      required={required}
    />
  );
};

export default Input;
