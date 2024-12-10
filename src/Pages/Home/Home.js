import React from 'react';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Blog from '../../Components/Blog/Blog';
import Services1 from '../../Components/Service1/Service1';
import CardService from '../../Components/CardService/CardService';

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Services1/>
      <Blog/>
      <CardService/>
    </div>
  )
}

export default Home;