import React, { use } from "react";
import customerTop from "../../../assets/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";
const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  // console.log(reviews)
  return (
    <div className="my-10">
      <div className="flex flex-col justify-center items-center">
        <img src={customerTop} alt="" />
        <h3 className="font-extrabold text-3xl">
          What our customers are sayings
        </h3>
        <p className="text-center">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>
        <Swiper
        loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: '50%',
            depth: 200,
            scale: 0.75,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review = {review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default Reviews;
