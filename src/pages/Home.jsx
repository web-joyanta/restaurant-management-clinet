import React from 'react';
import Banner from '../components/Banner';
import Features from '../components/Features';
import TopFoods from '../components/TopFoods';
import Community from '../components/Community';
import { motion } from "motion/react";

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
            <Banner></Banner>
            <Features></Features>
            <TopFoods></TopFoods>
            <Community></Community>
        </motion.div>
    );
};

export default Home;