import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/swiper.css"; // Correct CSS import for Swiper v11

import items from "./Items"; // Ensure this file exists and exports the necessary data

export default function Card() {
  return (
    <div className="cards max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="swiper-container"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flip-card">
              <div
                className="flip-card-front bg-cover bg-center h-64 rounded-lg shadow-lg"
                style={{ backgroundImage: `url(${item.url})` }}
              >
                <div className="inner p-5">
                  <h3 className="text-white text-xl font-bold">{item.name}</h3>
                </div>
              </div>
              <div
                className="flip-card-back bg-cover bg-center h-64 rounded-lg shadow-lg"
                style={{ backgroundImage: `url(${item.url})` }}
              >
                <div className="inner p-5">
                  <p className="text-white text-lg">{item.desc}</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    {item.git}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
