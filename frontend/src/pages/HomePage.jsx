import React from 'react';
import Presentation from '../components/common/home/Presentation';
import Skills from '../components/common/home/Skills/Skills';
import Certifications from '../components/common/home/certifications/Certifications';
import Projects from '../components/common/projects/Projects';
import Education from '../components/common/home/educations/Educations';
import ParallaxText from '../components/common/ParallaxText'; // Adjust path if needed
import "../App.css";
import SmoothScroll from '../components/motion/SmoothScroll.component';
import immg from './wallpaper.jpg'

const HomePage = () => {
  return (
    <>
      <div className="w-full divide-y divide-base-300">
        <div id="pres" className='py-6'>
          <div className='fixed w-full'>
            <img src={immg} alt='bg' className='w-full h-screen object-cover' />
            <div className='absolute top-0 left-0 right-0 z-50 h-screen opacity-75 bg-base-100 origin-top-left' />
          </div>
          <Presentation />
        </div>
        <div id="skil" className="relative py-6">
        <div className='absolute  top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent from-5% via-base-100 via-30%  to-base-100 z-20'/>

        <section className='p-6 rubik'>
          <ParallaxText baseVelocity={-3}>Welcome to My Portfolio</ParallaxText>
          <ParallaxText baseVelocity={3}>Explore My Work</ParallaxText>
        </section>


          <div className="relative z-20">
            <Skills />
          </div>
        </div>

        <div id="proj" className="py-6 relative ">
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-base-100' />
          <div className='relative z-20'>

            <Projects />
          </div>
        </div>

        <div id="cert" className="py-6   relative">
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-base-100' />
          <div className='relative z-20'>
            <Certifications />
          </div>
        </div>

        <div id="edu" className="py-6 relative">
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-base-100' />
          <div className='relative z-20'>
            <Education />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
