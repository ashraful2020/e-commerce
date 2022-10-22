import React, {memo} from 'react';

const FormInput = memo(
  ({type, name, placeholder, onChange, required = false, defaultValue}) => {
    return (
      <input
        className="m-1 mx-auto w-11/12 rounded-sm border-[1px]
         border-blue-200 p-2 text-lg focus:border-[2px]  focus:outline-none md:m-5"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        required={required}
        defaultValue={defaultValue}
      />
    );
  },
);
  
export default FormInput;
