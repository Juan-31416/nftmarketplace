import React from 'react';

//INTERNAL IMPORT
import Style from '../styles/Index.module.css';
import { 
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe} from '../components/Components_index';

const Home = () => {
  return <div className={Style.homePage}>
    <HeroSection/>
    <Service/>
    <BigNFTSlider/>
    <Subscribe />
  </div>;
};

export default Home;