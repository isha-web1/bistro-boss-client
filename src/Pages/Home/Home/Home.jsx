import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BistroCard from '../BistroCard/BistroCard';

const Home = () => {
    return (
        <div>
                <Banner></Banner>
                <Category></Category>
                <BistroCard></BistroCard>
        </div>
    );
};

export default Home;