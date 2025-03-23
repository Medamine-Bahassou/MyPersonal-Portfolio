import React, { useState, useEffect, useRef } from 'react';
import { FaDatabase, FaJava } from 'react-icons/fa';
import { SiJquery, SiPostgresql } from 'react-icons/si';
import { BsAndroid2, BsCalendarDate } from 'react-icons/bs'
import megadev from '../../../../assets/experiences/megadev.png';
import { TbFileTypeXml } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';
import { FaGithub } from 'react-icons/fa'; // Import Github icon if you want to add a link
import { IoIosGitNetwork } from 'react-icons/io';

const ExperiencePage = () => {
    const experiencesRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [experiences, setExperiences] = useState([
        {
            id: 1,
            company: 'MegaDev',
            role: 'Android Developer – Internship',
            years: 'juillet 2024 – septembre 2024',
            description: 'Study and development of a client management application for fiduciaries, using Android Studio, Java, XML, and SQL Server.',
            technologies: ['Java', 'Android Studio', 'XML', 'SQL Server'],
            image: megadev,
            details: 'During my internship at MegaDev, I was immersed in the world of Android application development. My primary focus was on creating a client management application tailored for fiduciary businesses. This involved a deep dive into Android Studio, leveraging Java for backend logic, XML for UI design, and SQL Server for database management. I gained hands-on experience in the full development lifecycle, from understanding client requirements to deploying a functional application. Key tasks included database schema design, API integration, UI/UX implementation, and rigorous testing. This experience significantly enhanced my skills in mobile development and database management within a professional setting.',
            githubLink: null, // Example: Add a githubLink if relevant for experiences
        },
    ]);

    const techIcons = {
        'Java':  <FaJava size={24} />,
        'Android Studio':  <BsAndroid2 size={24} />,
        'XML':  <TbFileTypeXml size={24} />,
        'SQL Server': <DiMsqlServer size={24} />,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (experiencesRef.current) {
            observer.observe(experiencesRef.current);
        }

        return () => {
            if (experiencesRef.current) {
                observer.unobserve(experiencesRef.current);
            }
        };
    }, []);

    const openModal = (experience) => {
        setSelectedExperience(experience);
        document.getElementById('experience_modal').showModal();
    };

    const closeModal = () => {
        setSelectedExperience(null);
        document.getElementById('experience_modal').close();
    };


    return (
        <div className="container mx-auto py-12 px-4 md:px-8 lg:px-16 " ref={experiencesRef}>
            <h1 className="text-6xl font-bold mb-8 text-center bebasnue ">
                <div className='flex justify-center gap-4'>
                    <IoIosGitNetwork />
                    Experiences
                </div>
            </h1>
            <div
                className={`space-y-8 md:space-y-10 ${
                    isVisible
                        ? 'opacity-100 transform-none'
                        : 'opacity-0 translate-y-5 transition-all duration-500'
                }`}
            >
                {experiences.map((exp, index) => (
                    <div
                        key={exp.id}
                        style={{ transitionDelay: `${index * 100}ms` }}
                        className="card bg-base-100 border border-base-200 hover:border-base-300 hover:cursor-pointer hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 grid grid-cols-1 md:grid-cols-4"
                    >
                        <figure className="md:col-span-1 flex items-center justify-center p-4 md:p-6">
                            {exp.image && (
                                <img
                                    src={exp.image}
                                    alt={`${exp.company} logo`}
                                    className="max-h-24 w-auto object-contain"
                                />
                            )}
                        </figure>
                        <div className="card-body md:col-span-3 p-4 md:p-6">
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="card-title text-xl font-semibold  teko">
                                    {exp.company}
                                </h2>
                                <span className="badge badge-secondary badge-md text-xs flex items-center gap-1">
                                  <BsCalendarDate/>
                                    {exp.years}
                                </span>
                            </div>
                            <p className="text-base font-medium mb-2">
                                {exp.role}
                            </p>
                            <p className=" text-sm leading-relaxed mb-3">
                                {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-1 mb-4">
                                {exp.technologies.map((tech, i) => (
                                    <span key={i} className=''>{techIcons[tech]}</span>
                                ))}
                            </div>
                            <div className='w-full flex justify-end'>
                                <div className='btn btn-sm btn-primary ' onClick={() => openModal(exp)}>
                                    show more
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <dialog id="experience_modal" className="modal">
                
                <div className="modal-box p-0  md:flex md:flex-row  max-w-5xl w-11/12 "> {/* Modal Box with Flex Layout */}
                            
                    {selectedExperience && (
                        
                        <React.Fragment>
                            
                            <figure className="md:w-1/2"> {/* Left side - Image */}
                                <img
                                    src={selectedExperience.image}
                                    alt={`${selectedExperience.company} logo`}
                                    className="w-full h-full object-contain" // Make image take full height and width of its container
                                />
                            </figure>
                            <div className='p-5 md:w-1/2'> {/* Right side - Content */}
                                <div className='flex justify-end pt-6'>
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm  btn-circle btn-primary absolute right-2 top-2">✕</button>
                                </form>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-bold text-2xl teko">{selectedExperience.company}</h3>
                                    <span className="badge badge-secondary badge-md text-xs flex items-center gap-1">
                                        <BsCalendarDate/>
                                        {selectedExperience.years}
                                    </span>
                                </div>
                                <h4 className="text-lg font-semibold mb-2">{selectedExperience.role}</h4>
                                <p className="py-4 overflow-y-auto ">{selectedExperience.details || selectedExperience.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {selectedExperience.technologies.map((tech, i) => (
                                        <div key={i} className="badge badge-outline h-10 gap-1 hover:bg-base-300">
                                            <span>{techIcons[tech]}</span>
                                            <span>{tech}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-3 mt-6'> {/* Optional buttons area */}
                                    {selectedExperience.githubLink && ( // Conditionally render Github button
                                        <a href={selectedExperience.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-active w-full">
                                            <FaGithub/>
                                            GitHub
                                        </a>
                                    )}
                                    {/* Add other buttons here if needed for experiences (e.g., link to company website) */}
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                </div>
                <form method="dialog" className="modal-backdrop" onClick={closeModal}>
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default ExperiencePage;