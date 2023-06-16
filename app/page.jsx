"use client";

import '@styles/globals.css';

import ProjectSlider from '@components/ProjectSlider';
import Hero from '@components/Hero';


const Home = () => {

  return (
    <div className="w-full">

        <Hero />

        <ProjectSlider />
        
    </div>
  )
}

export default Home;