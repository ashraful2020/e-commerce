import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import http from "../../../services/http.service";
import "./category.css";

const ProductCategory = memo(() => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    http.get("/category").then((res) => setProductData(res));
  }, []);


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
              "--swiper-navigation-size": "20px",
              "--swiper-navigation-color": "red",
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
              <SwiperSlide key={data._id}>
                <Link to={`/search-by-category?name=${data.name}`}>
                  <div>
                    <img src={data.img} alt="" srcSet="" />
                    <h1>Category Name  </h1>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
});

export default ProductCategory;
