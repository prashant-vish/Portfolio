import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import PricingCard from "../Components/PricingCard";
import Work from "../Components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="POJECTS" text="Some of my latest works" />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;
