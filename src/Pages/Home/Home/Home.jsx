import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BistroCard from '../BistroCard/BistroCard';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
                <Banner></Banner>
                <Category></Category>
                <BistroCard></BistroCard>
                <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;