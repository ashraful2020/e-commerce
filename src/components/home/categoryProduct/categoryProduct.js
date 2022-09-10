import React, { memo } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./category.css";

const CategoryProduct = memo(() => {
  const productData = [
    {
      id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
      name: "ULTRABOOST 22 SHOES",
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
    },
    {
      id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
      name: "LUNAR NEW YEAR ULTRABOOST DNA SHOES",

      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",
    },
    {
      id: "307f166f-1d04-4573-bc37-2f461ea9d4f7",
      name: "SUPERNOVA SHOES",
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",
    },
    {
      id: "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
      name: "LITE RACER ADAPT 3.0 SHOES",
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg",
    },
    {
      id: "9496d72b-04ec-41f8-9bc3-0a7c9697be8e",
      name: "4DFWD SHOES",
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c5d1994dfd343e28567ad4400dd351d_9366/4DFWD_Shoes_Black_Q46447_01_standard.jpg",
    },
  ];

  return (
    <div>
      <div className="items-center md:flex">
        <h1 className="mr-8 text-2xl">Best for your categories</h1>
        <p className="mt-2 text-gray-500">
          {" "}
          <span className="font-bold">23 categories </span> belonging to a total
          of <span className="font-bold">34,592 products</span>
        </p>
      </div>
      <div>
        {" "}
        <div>
          <Swiper 
            loop={true}
            slidesPerGroup={1}
            loopFillGroupWithBlank={true}
            modules={[Autoplay, Pagination, Navigation]}
            navigation={true}
            style={{
              "--swiper-navigation-size":"20px",
              "--swiper-navigation-color":"red",
            }}
            autoplay={{
              delay: 2500,
              // disableOnInteraction: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20, 
                
              },
              750: {
                slidesPerView: 3,
                spaceBetween: 25, 
                
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30, 
              },
            }}
            >
            {productData.map((data) => (
              <SwiperSlide key={data.id}>
                <div>
                  <img src={data.img} alt="" srcSet="" />
                  <h1>Category Name </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
});

export default CategoryProduct;
