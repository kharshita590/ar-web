"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "../app/card.css";
export default function CardSection() {
  return (
    <main className="container">
        <div className="flex flex-col justify-center items-center">
        <p className="font-poppins text-[24px] p-4 font-bold border-2 rounded-lg border-[rgba(247,99,250,1)]">AR View on Mobile</p>
        </div>
        
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <div className="img-card">
          <SwiperSlide>
            <img src="./card.svg" alt="" />
          </SwiperSlide>
        </div>

        <div className="img-card">
          <SwiperSlide>
            <img src="./card.svg" alt="" />
          </SwiperSlide>
        </div>
        <div className="img-card">
          <SwiperSlide>
            <img src="./card.svg" alt="" />
          </SwiperSlide>
        </div>
        <div className="img-card">
          <SwiperSlide>
            <img src="./card.svg" alt="" />
          </SwiperSlide>
        </div>
        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <IoArrowBackOutline size={24} />
          </div>
          <div className="swiper-button-next slider-arrow">
            <IoArrowForwardOutline size={24} />
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
    </main>
  );
}
