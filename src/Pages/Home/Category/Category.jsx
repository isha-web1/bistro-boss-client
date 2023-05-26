import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slider1} alt="" />
            <h1 className='text-4xl uppercase text-center -mt-16 text-white'>salad</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider2} alt="" />
            <h1 className='text-4xl uppercase text-center -mt-16 text-white'>pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider3} alt="" />
            <h1 className='text-4xl uppercase text-center -mt-16 text-white'>soup</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider4} alt="" />
            <h1 className='text-4xl uppercase text-center -mt-16 text-white'>desert</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider5} alt="" />
            <h1 className='text-4xl uppercase text-center -mt-16 text-white'>salad</h1>
        </SwiperSlide>
        
      </Swiper>
    );
};

export default Category;