import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from "../../../assets/BannerImages/2.jpg";
import img3 from "../../../assets/BannerImages/3.jpg";
import img4 from "../../../assets/BannerImages/4.jpg";
import "./carousel.css";

const Carousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="home-images" src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="home-images" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="home-images" src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
      {/* <div className="bg-blue-300 rounded-lg flex items-center justify-around">
        hi there <img src={logo} className="h-4 w-4" alt="" srcset="" />
        <img src={logo} alt="" srcset="" />
 
      </div> */}
    </div>
  );
};

export default Carousel;
