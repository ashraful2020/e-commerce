import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import http from '../../../services/http.service';
import ArrowIcon from '../../custom/icons/ArrowIcon';

const AllProducts = memo(() => {
  const [products, setProducts] = useState([]);
  const uri = '/product/show-product';
  http.get(uri).then(res => setProducts(res));

  return (
    <div className="grid grid-cols-3 gap-5">
      {products.map((product, _i) => (
        <Link
          to={`/products/${product._id}`}
          state="products "
          key={product._id}
          className="mx-auto w-full text-left bg-gray-50 hover:shadow-xl lg:p-2">
          <img src={product?.img} className="mx-auto md:h-72 md:w-72" alt="" />
          <div className='lg:ml-8'>
            <h1 className="hidden font-semibold md:block">
              {product?.name.slice(0, 15)}
            </h1>
            {/* Stock is a dummy discount amount   */}
            <h1>৳ {product?.price - (product?.stock / 100) * product?.price}</h1>
            <div className="flex text-sm">
              <h1 className="text-gray-400 line-through">৳ {product?.price}</h1>
              <ArrowIcon />
              <h1> {product?.stock} %</h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
});

export default AllProducts;
//<div className="grid grid-cols-3 gap-5 ">
//   {products.map(product => (
//     <Link
//       to={`/flash-product/${product._id}`}
//       state="hello"
//       key={product._id}
//       className="mx-auto w-full text-left hover:shadow-xl lg:p-2">
//     </Link>
//   ))}
// </div>;

function Hello({ product }) {
  return (
    <div>
      {!product && (
        <h1 className="text-7xl">Loading.........................</h1>
      )}
      <img src={product?.img} className="mx-auto md:h-72 md:w-72" alt="" />
      <div>
        <h1 className="hidden font-semibold md:block">
          {product?.name.slice(0, 15)}
        </h1>
        {/* Stock is a dummy discount amount   */}
        <h1>৳ {product?.price - (product?.stock / 100) * product?.price}</h1>
        <div className="flex text-sm">
          <h1 className="text-gray-400 line-through">৳ {product?.price}</h1>
          <ArrowIcon />
          <h1> {product?.stock} %</h1>
        </div>
      </div>
    </div>
  );
}
