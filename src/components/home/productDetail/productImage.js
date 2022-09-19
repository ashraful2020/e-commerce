import React, { useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {FreeMode, Navigation, Thumbs,Pagination} from 'swiper';

export default function ProductImage({images}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const images = [
  //   'https://swiperjs.com/demos/images/nature-1.jpg',
  //   'https://swiperjs.com/demos/images/nature-2.jpg',
  //   'https://swiperjs.com/demos/images/nature-3.jpg',
  //   'https://swiperjs.com/demos/images/nature-4.jpg',
  // ];

  return (
    <div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#fff',
          '--swiper-navigation-size':"2rem",
        }}
        loop={true}
        
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper}}
        modules={[FreeMode, Navigation, Thumbs,Pagination]}
        className="mySwiper2">
        {/* //? Load image  */}
        {images.map((img, _i) => (
          <SwiperSlide key={_i}>
            <img className="h-96 w-80 mx-auto" alt="" src={img} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={2}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper bg-white p-4 border border-gray-600 m-2">
        {/* //? Load image  */}

        {images.map((img, _i) => (
          <SwiperSlide key={_i}>
            <img className='w-full h-full' alt="" src={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
