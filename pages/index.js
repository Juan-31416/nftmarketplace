import React from 'react';

//INTERNAL IMPORT
import Style from '../styles/Index.module.css';
import { HeroSection } from '../components/Components_index';

const Home = () => {
  return <div className={Style.homePage}>
    <HeroSection/>
  </div>;
};

export default Home;