import React, { Suspense } from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Brands from "../Brands/Brands";
import Advantages from "../Advantages/Advantages";
import Slogans from "../Slogans/Slogans";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  const reviewsPromise = fetch("/reviews.json").then((response) =>
    response.json()
  );
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <Advantages></Advantages>
      <Slogans></Slogans>
      <Suspense>
        <Reviews reviewsPromise={reviewsPromise}></Reviews>
      </Suspense>
    </div>
  );
};

export default Home;
