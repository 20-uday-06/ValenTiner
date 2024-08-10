import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>

    <div style={{ height: "100vh", width: "100vw", backgroundImage: "url(https://plus.unsplash.com/premium_photo-1670719161518-c6c8d9c25907?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundSize: "cover", backgroundPosition: "center", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "30px"}}>

    <h1 style={{color :"white", fontSize: '2.8vw'}}>20 Reasons Why I am in deeply love with my Chomu! 🤍</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide><h1>Always prioritise our relationship above our ego </h1></SwiperSlide>
        <SwiperSlide><h1>Because of your honesty ( very very transparent in relationship and bahot zyada truthful)</h1></SwiperSlide>
        <SwiperSlide><h1>Tera style ( ohoho ) unique fashion senses that can't be comparable aur mujhe bhi chomuu se stylish bana diya 🥹
        </h1></SwiperSlide>
        <SwiperSlide><h1>Most important is your warmth that makes me feel comfortable same as I feel with my parents .
        </h1></SwiperSlide>
        <SwiperSlide><h1>Your support and the way you 
          motivate is something that apart from my parents nobody has done
        </h1></SwiperSlide>
        <SwiperSlide><h1>And a huge reason is how you are so ambitious about your goal and never compromise it with anything
        </h1></SwiperSlide>
        <SwiperSlide><h1>And most importantly the way you love makes me feel cherished everyday
        </h1></SwiperSlide>
        <SwiperSlide><h1>Teri listening skills - the way you value my as well as your opinions
        </h1></SwiperSlide>
        <SwiperSlide><h1>Teri beauty ke baare m kya hi bolun 🥰 , both from inside and outside. 😋
        </h1></SwiperSlide>
        <SwiperSlide><h1>Your super cute nature - the way you pronounce my new nicknames ( suar , Pathakji , chomu ) literally makes my day </h1></SwiperSlide>
        <SwiperSlide><h1>Your charm mtlb tu kisi se bhi baat kare to uss insaan ko tere se baat karne ka aur man hone lagta hai .
        </h1></SwiperSlide>
        <SwiperSlide><h1>And your humors 😂 bahot vahiyaad hai lekin fir bhi that always brightens my day . Mtlb day completed sa nahi lagta jabki tu vahiyaad joke nahi sunati</h1></SwiperSlide>
        <SwiperSlide><h1>The way you surprise with unexpected gifts and keeps things excited</h1></SwiperSlide>
        <SwiperSlide><h1>Tu kabhi kisi aur ke relationship se apna relationship nahi compare karti , jabki kaafi baar m yeh galti kar deta hun .</h1></SwiperSlide>
        <SwiperSlide><h1>You are so humble , despite your accomplishments ( solid mechanics dassi )</h1></SwiperSlide>
        <SwiperSlide><h1>The way you surprise with unexpected gifts and keeps things excited .</h1></SwiperSlide>
        <SwiperSlide><h1>You have a way of finding the good in everything, and it's one of the many reasons I love you."</h1></SwiperSlide>
        <SwiperSlide><h1>I love u kyu ki mere parents ke baad ek tu hi hai jo mera gussa control kar leti hai</h1></SwiperSlide>
      </Swiper><a href="/qrcode">
                <button class="button" style={{fontSize: "2vw", borderRadius: "20px", padding: "0.7vw 2.3vw", color: "white", backgroundColor: "red", fontWeight: "bold" }}>Click Me :)</button>
                </a>
    </div>
    </>
  );
}

