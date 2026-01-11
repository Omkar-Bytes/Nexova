import React from "react";
import HeroBanner from "../components/HeroBanner";
import CategorySection from "../components/CategorySection";
import FeaturedCategories from "../components/FeaturedCatergories";
import FeaturedProducts from "../components/FeaturedProducts";
import PromoBanner from "../components/PromoBanner";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";



const Home = () => {
  return (
    <div>
      <HeroBanner />
      <FeaturedCategories/>
      <FeaturedProducts/>
      <PromoBanner/>
      <Newsletter/>
      <Testimonials/>
      <Footer/>
      
      {/* We will add categories and trending products here next */}
    </div>
  );    
};

export default Home;
