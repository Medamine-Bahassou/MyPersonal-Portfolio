import React, { useState, useEffect, useRef } from 'react';
import { FaDatabase } from 'react-icons/fa';
import { SiJquery, SiPostgresql } from 'react-icons/si';
import { BsCalendarDate } from 'react-icons/bs'
import megadev from '../../../../assets/experiences/megadev.png';

const ExperiencePage = () => {
    const experiencesRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [experiences, setExperiences] = useState([
          {
            id: 1,
            company: 'MegaDev',
            role: 'Android Developer – Internship',
            years: 'juillet 2024 – septembre 2024',
            description: 'Study and development of a client management application for fiduciaries, using Android Studio, Java, XML, and SQL Server.',
             technologies: ['Java', 'Android Studio', 'XML', 'SQL Server'],
            image: megadev,
        },
    ]);

    const techIcons = {
         'Java':  <SiJquery size={24} />,
        'Android Studio':  <SiJquery size={24} />,
        'XML':  <SiJquery size={24} />,
        'SQL Server': <SiPostgresql size={24} />,
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


    return (
        <div className="container mx-auto py-12 px-4 md:px-8 lg:px-16 " ref={experiencesRef}>
            <h1 className="text-6xl font-bold mb-8 text-center bebasnue ">
                Experiences
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
                            <div className="flex flex-wrap gap-1">
                                {exp.technologies.map((tech, i) => (
                                    <span key={i} className=''>{techIcons[tech]}</span>

                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperiencePage;