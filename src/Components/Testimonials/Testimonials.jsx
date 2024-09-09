import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import jsonData from "../../infos/testimonials.json";

function Testimonials() {
  return (
    <div className="testimonials container relative">
      <p className="font-bold text-xl">Testimonials That Speak My Work</p>
      <Swiper
        centeredSlides={true}
        grabCursor={true}
        className="mySwiper "
        loop={true}
        modules={[Navigation, Scrollbar, Autoplay]}
        spaceBetween={40}
        slidesPerView={"1"}
        navigation={true}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        
          {jsonData.map((review) => (
            <SwiperSlide>
            <div key={review.index} className="reviews flex-col justify-center items-center">
              <FormatQuoteRoundedIcon />
              <div className="flex flex-col gap-6">
                <p className="font-medium text-[20px] text-center text-[#3F3D56] leading-[1.65]">
                  {review.review}
                </p>
                <div className="person flex-col gap-1">
                  <p className="name font-semibold text-[#201F2E] text-[18px] text-center">
                    {review.name}
                  </p>
                  <p className="post font-normal text-[#6E6C83] text-[17px]">
                    {review.job}
                  </p>
                </div>
              </div>
            </div>
            </SwiperSlide>
          ))}

      </Swiper>
    </div>
  );
}

export default Testimonials;
