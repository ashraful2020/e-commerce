import React, { memo } from 'react';
import Button from '../../custom/components/Button';
import PlusIcon from '../../custom/icons/plusIcon';

const Address = memo(() => {
    const user = {
        name: 'ashraful',
        address: "kasba",
        region: 'brahamnbaria',
        phone: "028893839",
    }
    const cart = []
    return (
        <div>
            <table className="w-11/12 mx-auto text-left text-gray-500  ">
                <thead className="text-xs uppercase border-b-[1.7px]">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Full Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Address
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Region
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Phone Number
                        </th>
                    </tr>
                </thead>
                <tbody className="text-md capitalize border-b-[1.7px]">
                    <tr>
                        <td className="py-3 px-6">
                             {user?.name}</td >
                        <td className="py-3 px-6">
                             {user?.address}</td >
                        <td className="py-3 px-6">
                             {user?.region}</td >
                        <td className="py-3 px-6">
                             {user?.phone}</td >
                    </tr>
                </tbody>
            </table>
            
            <Button icon="icon" title="+ ADD NEW ADDRESS" />
        </div>
    );
});

export default Address;