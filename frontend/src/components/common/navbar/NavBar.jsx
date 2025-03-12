// NavBar.js
import React from 'react'
import "../../../App.css"
import logo from "../../../assets/logo/logo1.png"
import toast from 'react-hot-toast';
import { FaProjectDiagram } from "react-icons/fa";
import { RiHome6Fill  } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { FaNewspaper } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi"; // Import Education Icon
import { useState, useEffect, useRef, useCallback } from 'react';

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('pres');
    const blogButtonRef = useRef(null);
    const homeButtonRef = useRef(null);
    const skillsButtonRef = useRef(null);
    const projectsButtonRef = useRef(null);
    const certificationsButtonRef = useRef(null);
    const experienceButtonRef = useRef(null);
    const educationButtonRef = useRef(null); // Ref for Education Button

    const sectionRefs = {
        'pres': homeButtonRef,
        'skil': skillsButtonRef,
        'proj': projectsButtonRef,
        'experience': experienceButtonRef, // experience
        'certifications': certificationsButtonRef,
        'education': educationButtonRef, // Ref for Education Button
        'blog': blogButtonRef,
    };


    const handleBlog = ()=>{
        toast('Comming soon ...', {
            icon: '📣',
          });
    }

    const handleClick = (section) => {
        setActiveSection(section);
    };


    const observeSections = useCallback(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        setActiveSection(sectionId.replace('-section', ''));
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        const sectionsToObserve = [
            'pres-section',
            'skil-section',
            'proj-section',
            'experience-section',
            'certifications-section',
            'education-section',
        ];
        sectionsToObserve.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, [setActiveSection]);


    useEffect(() => {
        observeSections();
    }, [observeSections]);


    useEffect(() => {
        Object.values(sectionRefs).forEach(ref => {
            if (ref.current) {
                ref.current.classList.remove('active');
            }
        });

        if (sectionRefs[activeSection] && sectionRefs[activeSection].current) {
            sectionRefs[activeSection].current.classList.add('active');
        }
    }, [activeSection, sectionRefs]);


  return (
    <div className='fixed top-0 z-50 w-full'>
    <div className=" md:px-32 navbar bg-base-100  shadow-md h-16 w-full md:backdrop-blur-xl md:bg-base-100/30 bg-base-100/80   ">

        <div className="flex-1">
            <a className="btn btn-ghost  " href='#pres-section'>
                <img src={logo} alt="logo" width={45}/>
            </a>
        </div>
        <div className="flex-none  ">
            <ul className="menu menu-horizontal px-1 teko text-lg font-bold md:flex hidden  ">
                <li><a href='#skil-section'>Skills</a></li>
                <li><a href='#proj-section'>Projects</a></li>
                <li><a href='#experience-section'>Experience</a></li>
                <li><a href='#certifications-section'>Certifications</a></li>
                <li><a href='#education-section'>Education</a></li>
            </ul>

            <label className="swap swap-rotate mx-4">
                <input type="checkbox" className="theme-controller" value="light" />
                <svg
                    className="swap-off h-7 w-7 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                    className="swap-on h-7 w-7 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
            </label>
        </div>
    </div>

        <div className="btm-nav md:hidden flex w-full">
        <a
            ref={homeButtonRef}
            id='pres-section'
            href='#pres-section'
            className={`nav-item ${activeSection === 'pres' ? 'active' : ''}`}
            onClick={() => handleClick('pres')}
        >
            <RiHome6Fill />
            <h2>Home</h2>
        </a>
        <a
             ref={skillsButtonRef}
            id='skil-section'
            href='#skil-section'
            className={`nav-item ${activeSection === 'skil' ? 'active' : ''}`}
            onClick={() => handleClick('skil')}
        >
            <IoSettings/>
            <h2>Skills</h2>
        </a>

        <a
             ref={projectsButtonRef}
            id='proj-section'
            href='#proj-section'
            className={`nav-item ${activeSection === 'proj' ? 'active' : ''}`}
            onClick={() => handleClick('proj')}
        >
            <FaProjectDiagram/>
            <h2>Projects</h2>
        </a>
        <a
             ref={experienceButtonRef}
            id='experience-section'
            href='#experience-section'
            className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => handleClick('experience')}
        >
            <PiCertificateFill/> {/* Or a more suitable icon for experience */}
            <h2>Experience</h2>
        </a>
        <a
             ref={certificationsButtonRef}
            id='certifications-section'
            href='#certifications-section'
            className={`nav-item ${activeSection === 'certifications' ? 'active' : ''}`}
            onClick={() => handleClick('certifications')}
        >
            <PiCertificateFill/>
            <h2>Certifications</h2>
        </a>
        <a // Added Education Button
            ref={educationButtonRef}
            id='education-section'
            href='#education-section'
            className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}
            onClick={() => handleClick('education')}
        >
            <PiStudentFill/> {/* Education Icon */}
            <h2>Education</h2>
        </a>

        </div>
    </div>
  )
}

export default NavBar