import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Cover from "./Cover/Cover";
import menuCover from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | menu</title>
        
      </Helmet>
      <Cover img={menuCover} title={'our menu'}></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuCover} title={'our menu'}></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuCover} title={'our menu'}></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
