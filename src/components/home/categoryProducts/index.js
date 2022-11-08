import React, { memo, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import withLayout from '../../../hocs/withLayout';
import http from '../../../services/http.service';
import Button from '../../custom/components/Button';

const CategoryProducts = memo((props) => {
    const location = useLocation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        http.get(`/search-by-category?name=${location.state}`).then((res) => setProducts(res));
    }, [location.state]);


    return (
        <div className='mx-44 mb-16'>
            <h1 className='text-5xl text-center my-7 decoration-wavy decoration-sky-400 underline'> {location.state} </h1>
            <div className='grid grid-cols-3 gap-24'>
                {products.map(({ id, name, img, price }) => {
                    return (<Link to={`/product/${id}`} key={id} className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 
                        hover:bg-gradient-to-r hover:from-indigo-200 hover:via-purple-200 hover:to-pink-200 rounded-t-full rounded-l-full mt-12 border-[1px] border-cyan-500 relative drop-shadow-xl">
                        <img className='w-60 h-60 rounded-xl mx-auto -mt-2 border-2 shadow-2xl shadow-blue-100' src={img} alt="product images" />
                        <div className='pl-8'>
                            <p className='text-lg font-medium capitalize '>{name.slice(0, 40) + "...."}</p>
                            <p>price: <span className='font-bold'> ${price}</span></p>
                            <div className='absolute -mt-4 right-0'>
                                <Button icon="cart" color="px-8 py-1 bg-sky-500" title="Add Cart" />
                            </div>
                        </div>
                    </Link>)
                })}
            </div>
        </div>
    );
});

export default withLayout(CategoryProducts);