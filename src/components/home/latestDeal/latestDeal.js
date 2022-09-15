import React, { memo } from "react";
import Timer from "../../custom/timer";

const LatestDeal = memo(() => {

  const products = [
    {
      id: "be7a4d0a-c681-416c-ab8d-f9be28223f4e",
      category: "Earphones",
      name: "adidas Z.N.E. 01 True Wireless Earbuds",
      seller: "Addidas",
      price: 142,
      duration:1599000000,
      stock: 11,
      ratings: 5,
      ratingsCount: 22,
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/00276c6c380b41bcb29fadcc00f98312_9366/adidas_Z.N.E._01_True_Wireless_Earbuds_Grey_EY5116_42_detail.jpg",
      shipping: 23,
      quantity: 0,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus, in laborum aliquid .",
      heading:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus.",
      detail:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1105dc0c9232477eb80dac7d000edc0c_9366/Steel_Metal_Bottle_600_ML_White_EX7306_01_standard.jpg",
      detail2:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f7fb63986ed34112bc57ac7d002c9f43_9366/Steel_Straw_Metal_Bottle_600_ML_White_EX7316_01_standard.jpg",
      detail3:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d870a680644e4d98e9ac7d0008ecc7_9366/Steel_Metal_Bottle_600_ML_Yellow_EX7307_01_standard.jpg",
    },
    {
      id: "30698483-f7aa-49ba-9de9-9070f64dc263",
      category: "Bottle",
      name: "Steel Bottle 600 ML",
      seller: "Addidas",
      duration:1599000000,
      price: 23,
      stock: 11,
      ratings: 5,
      ratingsCount: 35,
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/48057b65216644f683a9aa1c0172ae6e_9366/Steel_Bottle_600_ML_Black_CL6093_01_standard.jpg",
      shipping: 5,
      quantity: 0,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus, in laborum aliquid.",
      heading:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum accusamus.",
      detail:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1105dc0c9232477eb80dac7d000edc0c_9366/Steel_Metal_Bottle_600_ML_White_EX7306_01_standard.jpg",
      detail2:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f7fb63986ed34112bc57ac7d002c9f43_9366/Steel_Straw_Metal_Bottle_600_ML_White_EX7316_01_standard.jpg",
      detail3:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d870a680644e4d98e9ac7d0008ecc7_9366/Steel_Metal_Bottle_600_ML_Yellow_EX7307_01_standard.jpg",
    },
  ];
  
  return (
    <div>
      <div className="my-12 items-center justify-center text-left md:flex">
        <h1 className="p-1 font-sans text-3xl font-medium md:w-1/3">
          Don't Miss The Last Deals
        </h1>
        <p className="p-1 text-justify md:w-2/3">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas{" "}
        </p>
      </div>
      <div className="justify-between gap-4 lg:flex">
        {products.map((product,_i) => (
          <div key={_i} className="mb-5 border-2 p-1 md:flex md:p-5">
            <div className="md:w-2/5">
              <img
                className="mx-auto h-72 w-52 object-cover"
                src={product.img}
                srcSet=""
                alt=""
              />
            </div>
            <div className="text-left md:ml-4 md:w-3/5">
              <h1 className="py-1 font-sans text-lg font-medium capitalize">
                {product.name}
              </h1>
              <h1 className="py-1 font-sans text-lg font-semibold capitalize">
                {" "}
                $ {product.price}
              </h1>
              <p>⭐⭐⭐⭐⭐ {product.ratings} reviews </p>
              <p className="py-3 text-sm font-normal text-gray-600">
                {product.description}
              </p>
              <p className="text-sm font-semibold">Offer end in : </p>{" "}
              <Timer duration={product.duration} />
              <p className="py- text-sm font-normal text-gray-600">
                Available - {product.stock}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default LatestDeal;
