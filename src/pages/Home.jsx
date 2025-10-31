import React from 'react';
import Banner from '../components/Banner';
import Features from '../components/Features';
import TopFoods from '../components/TopFoods';
import Community from '../components/Community';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <TopFoods></TopFoods>
            <Community></Community>
        </div>
    );
};

export default Home;