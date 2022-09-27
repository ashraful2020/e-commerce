import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import uploadImage from "../../../assets/trousers1.jpeg"
import FormInput from '../../custom/components/FormInput';
import { v4 as id } from 'uuid';
import { addProductInDatabase } from '../../../features/addProductSlice';
import { useDispatch } from 'react-redux';
const AddProduct = memo(() => {
    const { user } = useAuth();
    const dispatch = useDispatch()
    const formData = new FormData();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [img, setImg] = useState(null);
    const [category, setCategory] = useState(null);
    const [description, setDescription] = useState("");
    const [discount, setDiscount] = useState(null);
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [material, setMaterial] = useState("");
    const [images, setImages] = useState([]);
    const [showDetailsImage, setShowDetailsImage] = useState([]);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("ratings", 5);
    formData.append("img", img);
    formData.append("seller", user.displayName);
    formData.append("owner", user.displayName);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("discount", discount);
    formData.append("id", id());
    formData.append("type", 'general');
    formData.append("specification", JSON.stringify({ name, brand, material }));
    formData.append("shopEmail", user.email);
    formData.append("shopPhoto", user.photoURL);
    formData.append("images", images['0']);
    formData.append("images", images['1']);
    formData.append("images", images['2']);

    // const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProductInDatabase(formData));
        alert("Congratulation's blog post successful");
        // navigate("/dashboard");
    };
    
    const onImageChange = (e) => {
        setImages(e.target.files);
        // This code just for preview the image to the UI ... 
        const fileObj = [];
        const fileArray = [];
        fileObj.push(e.target.files);
        for (let i = 0; i < fileObj[0]?.length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]));
        }
        setShowDetailsImage(fileArray)

    };

    const productCategory = ["Default", "shoe", "shirt", "jewelry", "t-shirt", "computer", "electronics"]
    const categoryName = productCategory.map((name, _i) => <option
        className='bg-blue-50 capitalize'
        value={name} key={_i}> {name} </option>)
    return (
        <div className="bg-neutral-100">
            <div
                className="mx-auto "
            >
                <form className="relative" onSubmit={handleSubmit}>
                    <input
                        className="absolute top-8 hidden rounded-sm bg-black px-12 py-4 text-sm font-semibold uppercase tracking-widest text-white hover:bg-sky-700  md:right-0 lg:block"
                        type="Submit"
                        defaultValue="publish"
                    />
                    <div>
                        <div className='grid grid-flow-row grid-cols-3'>

                            {showDetailsImage && showDetailsImage.map((img, _i) => <div
                                key={_i}>
                                <img
                                    src={img}
                                    alt=""
                                    className="flex mx-auto h-40 w-full object-contain text-center xl:h-72"
                                />
                            </div>)}
                        </div>

                        {/*  There image upload form  */}
                        {showDetailsImage.length < 1 && (
                            <div className="m-auto px-6 sm:w-8/12 sm:px-0 md:w-7/12 lg:w-6/12 xl:w-4/12">
                                <div className="group relative flex h-64 w-full items-center justify-center">
                                    <div className="absolute inset-0 h-full w-full rounded-xl bg-white bg-opacity-80 shadow-2xl backdrop-blur-xl transition duration-300 group-hover:scale-110 group-hover:bg-opacity-70"></div>
                                    <input
                                        className="relative z-10 h-full w-full cursor-pointer opacity-0"
                                        type="file"
                                        accept="image/*"
                                        onChange={onImageChange}
                                        multiple
                                    />
                                    <div className="m-auo absolute top-0 right-0 bottom-0 left-0 flex h-full w-full items-center justify-center">
                                        <div className="space-y-6 text-center">
                                            <img
                                                src={uploadImage}
                                                className="m-auto w-32 sm:w-40"
                                                alt="upload_image"
                                            />
                                            <p className="text-lg text-gray-700">
                                                Image size cann't greater then 20 KB
                                                <label
                                                    title="Upload a file"
                                                    className="relative z-20 block cursor-pointer text-blue-500 hover:text-blue-600"
                                                >
                                                    Upload a file
                                                </label>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className='grid grid-flow-row grid-cols-2 mt-12'>
                            <FormInput
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="product name"

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
                        </div>
                        <p className='pl-6 text-2xl text-blue-300 font-bold underline underline-offset-2'>Product specification</p>
                        <div className='grid grid-cols-3'>
                            <FormInput
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Brand name "

                            />
                            <FormInput
                                onChange={(e) => setBrand(e.target.value)}
                                placeholder="Model"

                            />
                            <FormInput
                                onChange={(e) => setMaterial(e.target.value)}
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
    );
});

export default AddProduct;


