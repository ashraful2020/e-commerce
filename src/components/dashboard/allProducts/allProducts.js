import React, {memo, useState} from 'react';
import {Link} from 'react-router-dom';
import http from '../../../services/http.service';
import ArrowIcon from '../../custom/icons/ArrowIcon';
import InfiniteScroll from 'react-infinite-scroll-component';

const AllProducts = memo(() => {
  const [products, setProducts] = useState([]);
  const uri = '/product/show-product';
  http.get(uri).then(res => setProducts(res));
  const style = {
    // height: 30,
    border: '1px solid green',
    margin: 6,
    padding: 8,
  };
  //  Infinite scrolling code
  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      setProducts(products.concat(Array.from({length: 2})));
    }, 5000);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        hasMore={products.length !== 0}
        loader={<h4>Loading...</h4>}>
        {products.map((i, index) => (
          <div style={style} key={index}>
            <Hello product={i} />
          </div>
        ))}
      </InfiniteScroll>
    </>
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

function Hello({product}) {
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
