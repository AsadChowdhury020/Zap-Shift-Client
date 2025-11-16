import React from "react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import amazonImage from "../../../assets/brands/amazon.png";
import amazonVectorImage from "../../../assets/brands/amazon_vector.png";
import casioImage from "../../../assets/brands/casio.png";
import moonsterImage from "../../../assets/brands/moonstar.png";
import randstadImage from "../../../assets/brands/randstad.png";
import starImage from "../../../assets/brands/star.png";
import starPeopleImage from "../../../assets/brands/start_people.png";

const brandsLogo = [
  amazonImage,
  amazonVectorImage,
  casioImage,
  moonsterImage,
  randstadImage,
  starImage,
  starPeopleImage,
];

const Brands = () => {
  return (
    <div className="my-10">
    <h3 className="text-3xl font-extrabold text-center">We've helped thousands of sales teams</h3>
    <Swiper
      className="mySwiper my-10"
      loop={true}
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      
    >
      {brandsLogo.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt="" />
        </SwiperSlide>
      ))}
      {/* <SwiperSlide><img src={amazonImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={amazonVectorImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={casioImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={moonsterImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={randstadImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={starImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={starPeopleImage} alt="" /></SwiperSlide> */}
    </Swiper>
    </div>
  );
};

export default Brands;
