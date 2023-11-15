import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CarouselComponent from "./CarouselComponent";

const HomeCarousel = ({ allArticles }) => {
  const [carouselElm, setCarouselElm] = useState([]);
  useEffect(() => {
    setCarouselElm(allArticles?.slice(0, 5));
  }, [allArticles]);

  return (
    <div
      id='carousel-container'
      className='w-[80vw] mx-auto my-10 transition-all'
    >
      <Swiper
        className='rounded-md shadow-2xl z-0 shadow-black transition-all'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {carouselElm?.map((elm) => {
          if (elm?.title !== "[Removed]") {
            return (
              <SwiperSlide className='z-0' key={elm?.url}>
                <CarouselComponent elm={elm} />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
