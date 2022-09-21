import React, { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import http from '../../../services/http.service';

const CategoryProducts = memo((props) => {
    const location = useLocation();
    const uri = location.pathname + location.search;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        http.get(uri).then((res) => setProducts(res));
    }, [uri]);
    console.log(uri)
    console.log(products);
    console.log("🚀 ~ file: index.js ~ line 13 ~ CategoryProducts ~ products", products)
    return (
        <div className='grid grid-cols-3  gap-5 mx-32'>
            {
                products.map(({_id,name,img,price}) => {
                    return (<div key={_id} className="bg-rose-200 ">
                        <img className='w-72 h-72 mx-auto' src={img}  alt="product images"  />
                        <p>{name}</p>
                        <p>{price}</p>

                    </div>)
                })}
        </div>
    );
});

export default CategoryProducts;