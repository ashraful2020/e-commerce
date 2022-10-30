import React, { memo } from 'react';
import DeleteIcon from '../../custom/icons/deleteIcon';
import productData from './flashProductData';

const FlashProduct = memo(() => {
    return (
        <div>
            <h1 className='text-4xl text-center underline'>Flash Product Request</h1>
            <div className="flex w-full">
                {productData?.length && (
                    <>
                        <div className="w-full">
                            <table className="mx-auto w-11/12 text-left text-gray-500  ">
                                <thead className="border-b-[1.7px] text-xs uppercase">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            Product
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-center">
                                            Action
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {productData?.map(product => {
                                        return (
                                            <React.Fragment key={product._id}>
                                                <tr className="border-b-[.01px] bg-white">
                                                    <th scope="row" className="py-4 px-6 ">
                                                        <div className="flex items-center gap-4">
                                                            <img
                                                                src={product?.img}
                                                                className="h-16 w-16"
                                                                alt="cart images"
                                                            />
                                                            <p>{product?.name} </p>
                                                        </div>
                                                    </th>
                                                    <td className="py-4 px-6">
                                                        <div className='flex justify-center items-center'>
                                                            <button className='bg-blue-400 text-white m-2 px-8 py-2'>Accept ✓ </button>
                                                            <span className='bg-red-700 text-white  m-2 px-8 py-2'>
                                                                <DeleteIcon icon="delete" /> Delete
                                                            </span>
                                                        </div>
                                                    </td>

                                                </tr>
                                            </React.Fragment>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
        </div>

    );
});

export default FlashProduct;