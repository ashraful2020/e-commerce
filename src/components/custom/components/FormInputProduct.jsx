import React, {memo} from 'react';

const FormInputProduct = memo(
  ({type, name, placeholder, onChange, required = false, defaultValue}) => {
    return (
      <div>
        <label className="-mb-6 text-orange-500">{placeholder} </label>
        <input
          className="m-1 mx-auto w-11/12 rounded-sm border-b-[1px] border-blue-200 p-2 text-lg focus:border-b-[2px]  focus:border-blue-400 focus:outline-none  md:mb-5"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          required={required}
          defaultValue={defaultValue}
        />
      </div>
    );
  },
);

export default FormInputProduct;
