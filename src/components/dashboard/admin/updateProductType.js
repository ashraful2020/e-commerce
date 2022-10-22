import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import http from '../../../services/http.service';
import Button from '../../custom/components/Button';
import FormInput from '../../custom/components/FormInput';
import ArrowIcon from '../../custom/icons/ArrowIcon';
import EditIcon from '../../custom/icons/editIcon';
import MinusIcon from '../../custom/icons/minusIcon';
import PlusIcon from '../../custom/icons/plusIcon';
import ProductImage from '../../home/productDetail/productImage';
import UpdatedData from './updatedData';

const UpdateProductType = memo(() => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const uri = `/product/${id}`
    useEffect(() => {
        http.get(uri).then((res) => {
            setProduct(res)
        });
    }, [uri]);


    // const {
    //     name,
    //     price,
    //     stock,
    //     img,
    //     _id,
    //     category,
    //     description,
    //     quantity,
    //     ratings,
    //     ratingsCount,
    //     seller,
    //     shipping,
    // } = product;

    // const elements = [
    //     { name: "name", value: name },
    //     { name: "price", value: price },
    //     { name: "stock", value: stock },
    //     { name: "img", value: img },
    //     { name: "_id", value: _id },
    //     { name: "category", value: category },
    //     { name: "description", value: description },
    //     { name: "quantity", value: quantity },
    //     { name: "ratings", value: ratings },
    //     { name: "ratingsCount", value: ratingsCount },
    //     { name: "seller", value: seller },
    //     { name: "shipping", value: shipping },
    // ]

    const [state, setState] = useState({
        name: product?.name,
        price: product?.price,
        stock: product?.stock,
        img: product?.img,
        _id: product?._id,
        category: product?.category,
        description: product?.description,
        quantity: product?.quantity,
        ratings: product?.ratings,
        ratingsCount: product?.ratingsCount,
        seller: product?.seller,
        shipping: product?.shipping,
    });
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
    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState("");
    // const [stock, setStock] = useState("");
    // const [img, setImg] = useState(product?.img);
    // const [category, setCategory] = useState(null);
    // const [description, setDescription] = useState("");
    // const [discount, setDiscount] = useState(null);
    // const [name, setName] = useState("");
    // const [brand, setBrand] = useState("");
    // const [material, setMaterial] = useState("");
    // const [images, setImages] = useState([]);
    // const [showDetailsImage, setShowDetailsImage] = useState([]);
    const _id = 2334;



    // const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(console.log('first'));
        alert("Congratulation's blog post successful");
        // navigate("/dashboard");
    };



    const productCategory = ["Default", "shoe", "shirt", "jewelry", "t-shirt", "computer", "electronics"]
    const categoryName = productCategory.map((name, _i) => <option
        className='bg-blue-50 capitalize'
        value={name} key={_i}> {name} </option>)



    return ( 
            <div className="mx-auto pt-12 w-10/12">
                {/*  Product info and order info  */}
                <div className="grid-flow-col grid-cols-3 md:grid">
                    <div className="col-span-1">
                        <img src={product?.img} className="w-full" alt='product images' />
                    </div>
                    <div className="col-span-2 text-left ml-12 border">
                        <form className="relative" onSubmit={handleSubmit}>
                            <input
                                className="absolute -top-6  hidden rounded-sm bg-black px-12 py-4 text-sm font-semibold uppercase tracking-widest text-white hover:bg-sky-700  md:-right-10 lg:block"
                                type="Submit"
                                defaultValue="Update Product"
                            />
                            <div>

                                <div className='grid grid-flow-row grid-cols-2 mt-12'>
                                    <FormInput
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="product name"
                                        defaultValue="Ashraful"

                                    />
                                    <select
                                        className="m-1 mx-auto w-11/12 rounded-sm border-[1px]
                                border-blue-200 p-2 text-lg focus:border-[2px]  focus:outline-none md:m-5"
                                        onChange={(e) => setCategory(e.target.value)}>
                                        {categoryName}
                                    </select>
                                    <FormInput
                                        onChange={(e) => setPrice(e.target.value)}
                                        placeholder="Product price "
                                        type="number"

                                    />
                                    <FormInput
                                        onChange={(e) => setStock(e.target.value)}
                                        placeholder="Product Quantity In your Stock"

                                    />

                                    <FormInput
                                        onChange={(e) => setDiscount(e.target.value)}
                                        placeholder="Enter Discount Percentage   => 1-99%"
                                        type="number"
                                    />

                                    <FormInput
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Brand name "

                                    />
                                    <FormInput
                                        onChange={(e) => setQuantity(e.target.value)}
                                        placeholder="Model"

                                    />
                                    <FormInput
                                        onChange={(e) => setShipping(e.target.value)}
                                        placeholder="Material "

                                    />
                                </div>
                                <textarea
                                    className="m-1  w-11/12 h-56 rounded-sm border-[1px] border-blue-200 p-2 text-lg focus:border-[2px]  focus:outline-none md:m-5 font-serif"
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Enter Product description"

                                />
                            </div>
                        </form>
                    </div>

                </div>



                <div className="flex justify-evenly">
                    {/* A button that will redirect to the checkout page.  */}
                    <Button color="bg-sky-500" icon="ab" title="Make Flash Product " />
                    <Button color="bg-orange-500" title="Make Latest Deal " onClick={(e) => console.log(product._id)} />
                </div>





            </div>
      
    );
});

export default UpdateProductType;
