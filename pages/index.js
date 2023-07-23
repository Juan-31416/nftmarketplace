import React from 'react';

//INTERNAL IMPORT
import Style from '../styles/Index.module.css';
import { HeroSection } from '../components/Components_index';
import {Service } from '../components/Components_index';
import {BigNFTSlider } from '../components/Components_index';

const Home = () => {
  return <div className={Style.homePage}>
    <HeroSection/>
    <Service/>
    <BigNFTSlider/>
  </div>;
};

export default Home;