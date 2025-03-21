// HomePage.js
import React from 'react';
import Presentation from '../components/common/home/Presentation';
import Skills from '../components/common/home/Skills/Skills';
import Certifications from '../components/common/home/certifications/Certifications';
import Projects from '../components/common/projects/Projects';
import Education from '../components/common/home/educations/Educations';
import ParallaxText from '../components/common/ParallaxText';
import "../App.css";
import SmoothScroll from '../components/motion/SmoothScroll.component';
import immg from './wallpaper.jpg';
import ExperiencePage from '../components/common/home/experiences/ExperiencePage ';
import { motion } from 'framer-motion';

const HomePage = () => {

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    const parallaxVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
    };


    return (
        <>
            <div className='fixed w-full'>
                <img src={immg} alt='bg' className='w-full h-screen object-cover' />
                <div className='absolute top-0 left-0 right-0 z-50 h-screen opacity-75 bg-base-100 origin-top-left' />
            </div>
            <div className="w-full  ">
                <motion.div
                    id="pres-section"
                    className='py-6'
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: true }}
                >
                    <Presentation />
                </motion.div>

                <motion.div
                    id="skil-section"
                    className="relative py-6"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: true }}
                >
                    <div className='absolute  top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent from-5% via-base-100 via-30%  to-base-100 z-20'/>
                    {/* <section className='p-6 rubik'>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={parallaxVariants}
                            viewport={{ once: true }}
                        >
                            <ParallaxText baseVelocity={-3}>Welcome to My Portfolio</ParallaxText>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={parallaxVariants}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <ParallaxText baseVelocity={3}>Explore My Work</ParallaxText>
                        </motion.div>
                    </section> */}
                    <div className="relative z-20">
                        <Skills />
                    </div>
                </motion.div>

                <motion.div
                    id="proj-section"
                    className="py-6 relative "
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: true }}
                >
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-base-100' />
                    <div className='relative z-20'>
                        <Projects />
                    </div>
                </motion.div>

                <motion.div>
                    <motion.div
                        id="experience-section"
                        className="py-6   relative"
                        initial="hidden"
                        whileInView="visible"
                        variants={sectionVariants}
                        viewport={{ once: true }}
                    >
                        <div className='absolute top-0 left-0 right-0 bottom-0 ' />
                        <div className='relative z-20'>
                            <ExperiencePage />
                        </div>
                    </motion.div>
                </motion.div>


                <motion.div
                    id="certifications-section"
                    className="py-6   relative"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: true }}
                >
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-base-100' />
                    <div className='relative z-20'>
                        <Certifications />
                    </div>
                </motion.div>

                <motion.div
                    id="education-section"
                    className="py-6 relative"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: true }}
                >
                    <div className='absolute top-0 left-0 right-0 bottom-0 ' />
                    <div className='relative z-20' id='education-section'>
                        <Education />
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default HomePage;