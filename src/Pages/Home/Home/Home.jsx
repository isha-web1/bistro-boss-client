import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import BistroCard from "../BistroCard/BistroCard";
import PopularMenu from "../PopularMenu/PopularMenu";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonials/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <BistroCard></BistroCard>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
