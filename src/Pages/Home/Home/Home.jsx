import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BistroCard from '../BistroCard/BistroCard';
import PopularMenu from '../PopularMenu/PopularMenu';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
                <Banner></Banner>
                <Category></Category>
                <BistroCard></BistroCard>
                <PopularMenu></PopularMenu>
                <Contact></Contact>
        </div>
    );
};

export default Home;