import React, { memo } from 'react';
import EditIcon from '../../custom/icons/editIcon';

const UpdatedData = memo(({ name, value, onChange }) => {
    // console.log(!name)
    // console.log(!value && "hello")
    return (
        <div className='relative'>

            <label className='text-orange-500 text-2xl -top-10 left-0'>{name}</label>
            <input className='w-10/12 text-lg pt-1 ' type="text" name="fruit" value={value} onChange={onChange} />

        </div>
    );
});

export default UpdatedData;