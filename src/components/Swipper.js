import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <div style={{height: "100vh", width: "100vw", backgroundImage: "url(https://plus.unsplash.com/premium_photo-1670719161518-c6c8d9c25907?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundSize: "cover", backgroundPosition: "center", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src=""></img></SwiperSlide>
        <SwiperSlide><img src=""></img></SwiperSlide>
        <SwiperSlide><img src=""></img></SwiperSlide>
        <SwiperSlide><img src=""></img></SwiperSlide>
        <SwiperSlide><img src=""></img></SwiperSlide>
        <SwiperSlide><img src=""></img></SwiperSlide>
        <SwiperSlide><img src=""></img></SwiperSlide>
        <SwiperSlide><img src=""></img></SwiperSlide>
        <SwiperSlide><img src=""></img></SwiperSlide>
      </Swiper>
    </div>
  );
}

