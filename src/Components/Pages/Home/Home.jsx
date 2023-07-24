import React from "react";
import Banner from "../../Banner/Banner";
import SocialLinks from "../../../Common/SocialLink";
import CollegeCard from "../../CollegeCard/CollegeCard";
import Logo from "../../../Common/Logo/Logo";
import Gallery from "../../../Common/Gallerry/Gallery";
import Researches from "../Researches/Researches";
import ReviewCard from "../ReviewCard/ReviewCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SocialLinks></SocialLinks>
      <div>
        <Logo></Logo>
      </div>
      <div className="mt-20">
        <CollegeCard></CollegeCard>
      </div>
      <div className="mt-10">
        <Gallery></Gallery>
      </div>
      <div className="mt-20">
        <Researches></Researches>
      </div>
      <div className="mt-20">
        <ReviewCard></ReviewCard>
      </div>
    </div>
  );
};

export default Home;
