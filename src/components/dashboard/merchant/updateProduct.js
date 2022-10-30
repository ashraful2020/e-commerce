import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import dummyUser from '../../../dummyUser';
import http from '../../../services/http.service';
import Button from '../../custom/components/Button';
import FormInputProduct from '../../custom/components/FormInputProduct';

const UpdateProduct = memo(() => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const uri = `/product/${id}`
    useEffect(() => {
        http.get(uri).then((res) => {
            setProduct(res)
        });
    }, [uri]);

    // const product = {
    //     name: "name",
    //     price: 10,
    //     category: "category",
    //     stock: 20,
    //     description: "description",
    //     quantity: 190,
    //     ratings: "ratings",
    //     ratingsCount: "ratingsCount",
    //     shipping: "shipping",
    //     discount: 0,
    // }    

    const [name, setName] = useState(product?.name);
    const [price, setPrice] = useState(product?.price);
    const [category, setCategory] = useState(product?.category);
    const [stock, setStock] = useState(product?.stock);
    const [description, setDescription] = useState(product?.description);
    const [quantity, setQuantity] = useState(product?.quantity);
    const [ratings, setRatings] = useState(product?.ratings);
    const [ratingsCount, setRatingsCount] = useState(product?.ratingsCount);
    const [shipping, setShipping] = useState(product?.shipping);
    const [discount, setDiscount] = useState(product?.discount);

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(console.log('first'));
        alert("Congratulation's blog post successful");
        // navigate("/dashboard");
    };



    const productCategory = [product?.category, "shoe", "shirt", "jewelry", "t-shirt", "computer", "electronics"]
    const categoryName = productCategory.map((name, _i) => <option
        className='bg-blue-50 capitalize'
        value={name} key={_i} defaultValue="Ashraful"> {name} </option>)
    if (!product.name) return "Loading........"
    return (
        <div className="mx-auto pt-12 w-10/12">
            {/*  Product info and order info  */}
            <div className="grid-flow-col grid-cols-3 md:grid">
                <div className="col-span-1">
                    <img src={product?.img} className="w-full" alt='product images' />
                </div>
                <div className="col-span-2 text-left ml-12 relative">
                    {product.name &&
                        <form className="" onSubmit={handleSubmit}>
                            <input
                                className="absolute -top-5  hidden rounded-sm bg-black px-12 py-4 text-sm font-semibold uppercase tracking-widest text-white hover:bg-sky-700  md:-right-8 lg:block"
                                type="Submit"
                                defaultValue="Update Product"
                            />
                            <div>

                                <div className='grid grid-flow-row grid-cols-2 mt-12'>
                                    <FormInputProduct
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="product name"
                                        defaultValue={product.name}
                                    />
                                    <select
                                        className="m-1 mx-auto w-11/12 p-2 text-lg bg-blue-200 focus:outline-dotted md:m-5"
                                        onChange={(e) => setCategory(e.target.value)}>
                                        {categoryName}
                                    </select>
                                    <FormInputProduct
                                        onChange={(e) => setPrice(e.target.value)}
                                        placeholder="Product price "
                                        defaultValue={product.price}
                                        type="number"
                                    />
                                    <FormInputProduct
                                        onChange={(e) => setStock(e.target.value)}
                                        placeholder="Product Quantity In your Stock"
                                        defaultValue={product.stock}
                                        type="number"
                                    />

                                    <FormInputProduct
                                        onChange={(e) => setDiscount(e.target.value)}
                                        placeholder="Enter Discount "
                                        defaultValue={product.quantity}
                                        type="number"
                                    />

                                    <FormInputProduct
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Brand name "
                                        defaultValue={product.name}
                                    />
                                    <FormInputProduct
                                        onChange={(e) => setQuantity(e.target.value)}
                                        placeholder="Model"
                                        defaultValue={product.quantity}
                                    />
                                    <FormInputProduct
                                        onChange={(e) => setShipping(e.target.value)}
                                        placeholder="Material "
                                        defaultValue={product.shipping}
                                    />
                                </div>
                                <textarea
                                    className="m-1  w-full h-56 rounded-sm border-[1px] border-blue-200 p-2 text-lg focus:border-[2px]  focus:outline-none font-sans"
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Enter Product description"
                                    defaultValue={product.description}
                                />
                            </div>
                        </form>}
                </div>
            </div>

            <div className="md:flex justify-evenly md:my-6">
                {/* A button that will redirect to the checkout page.  */}
                <Button color="bg-sky-500" icon="ab" title="Request For Flash Product " />
                <Button color="bg-orange-500" title="Request For Latest Deal" onClick={(e) => console.log(product._id)} />
            </div>





        </div>

    );
});

export default UpdateProduct;
