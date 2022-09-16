import React from 'react';

const Input = ({ name,type, placeholder, onChange, required = false }) => {
  console.log(type, placeholder, required,onChange);
  return (
    <div>
      <input
        className="md:m-5 w-11/12 m-1 md:w-7/12 border-b focus:border-none border-blue-500 p-3 text-lg"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        required={required}
      />
    </div>
  );
};

export default Input;
 