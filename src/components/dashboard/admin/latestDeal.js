import React, { memo } from 'react';
import DeleteIcon from '../../custom/icons/deleteIcon';
const productData = [{
  _id: "632056db75cb9a5e1ada15a7",
  name: "NMD_R1 PRIMEBLUE SHOES",
  img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e03e7a2a9cb44dfac2bad6a00f95888_9366/NMD_R1_Primeblue_Shoes_White_GZ9261_01_standard.jpg"
},
{
  _id: "632056db75cb9a5e1ada15ad",
  name: "TIRO PANTS BLACK GOLD",
  img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c447324cf06544b78105ade500fd9e2f_9366/Tiro_Pants_Black_HI1073_21_model.jpg"
},
{
  _id: "632056db75cb9a5e1ada15b0",
  name: "OPEN HEM 3-STRIPES TRACK PANTS",
  img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d47f8bc94b2c401b9eafad23007fd8c4_9366/Primegreen_Essentials_Warm-Up_Open_Hem_3-Stripes_Track_Pants_Black_H48430_21_model.jpg"
}]
const LatestDeal = memo(() => {
  return (<div>

    <h1 className='text-4xl text-center underline'>Latest Product Request</h1>
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
  </div>);
});

export default LatestDeal;
