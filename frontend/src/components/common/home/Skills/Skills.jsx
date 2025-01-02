import React, { useState, useEffect, useRef } from 'react';
import SkillType from './Skill';
import '../../../../App.css';

const Skills = () => {
    const skillsRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeGroup, setActiveGroup] = useState('all');
    const [showAll, setShowAll] = useState(false);

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

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
          if(skillsRef.current){
            observer.unobserve(skillsRef.current)
          }

        };
    }, []);

    const skills = [
        { image: "https://static-00.iconduck.com/assets.00/html-5-icon-224x256-1b5ud2sy.png", title: "HTML", group: "frontend" },
        { image: "https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png", title: "CSS", group: "frontend" },
        { image: "https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png", title: "JavaScript", group: "frontend" },
        { image: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png", title: "C/C++", group: "backend" },
        { image: "https://cdn-icons-png.flaticon.com/512/226/226777.png", title: "Java", group: "backend" },
        { image: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png", title: "PHP", group: "backend" },
        { image: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png", title: "C#", group: "backend" },
        { image: "https://cdn-icons-png.flaticon.com/512/5969/5969346.png", title: "Unity", group: "game" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Qt_logo_2016.svg/1024px-Qt_logo_2016.svg.png", title: "Qt", group: "desktop" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/1200px-Matlab_Logo.png", title: "MATLAB", group: "data" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png", title: "Python", group: "data" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png", title: "Git/GitHub", group: "tools" },
        { image: "https://static-00.iconduck.com/assets.00/symfony-icon-512x512-g7hivt0k.png", title: "Samphony", group: "backend" },
        { image: "https://enzofilangi.fr/en/assets/images/programming-logos/UML.png", title: "UML", group: "tools" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png", title: "React", group: "frontend" },
    ];

    const filteredSkills = activeGroup === 'all'
        ? skills
        : skills.filter(skill => skill.group === activeGroup);

    const displayedSkills = showAll ? filteredSkills : filteredSkills.slice(0, 5);

    const handleGroupClick = (group) => {
        setActiveGroup(group);
        setShowAll(false);
    };

    const handleShowMore = () => {
        setShowAll(true);
    };

    return (
        <div className='flex flex-col justify-center items-center' ref={skillsRef}>
            <div className='text-6xl font-bold my-16 bebasnue z-[1] '>
                Skills
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
                <button
                  className={`btn btn-sm ${activeGroup === 'all' ? 'btn-active' : ''}`}
                  onClick={() => handleGroupClick('all')}
                >
                  All
                </button>
                <button
                  className={`btn btn-sm ${activeGroup === 'frontend' ? 'btn-active' : ''}`}
                  onClick={() => handleGroupClick('frontend')}
                >
                  Frontend
                </button>
                <button
                  className={`btn btn-sm ${activeGroup === 'backend' ? 'btn-active' : ''}`}
                  onClick={() => handleGroupClick('backend')}
                >
                    Backend
                  </button>
                  <button
                    className={`btn btn-sm ${activeGroup === 'game' ? 'btn-active' : ''}`}
                    onClick={() => handleGroupClick('game')}
                >
                   Game Dev
                </button>
                  <button
                    className={`btn btn-sm ${activeGroup === 'desktop' ? 'btn-active' : ''}`}
                    onClick={() => handleGroupClick('desktop')}
                >
                   Desktop App
                </button>
                  <button
                    className={`btn btn-sm ${activeGroup === 'data' ? 'btn-active' : ''}`}
                    onClick={() => handleGroupClick('data')}
                >
                     Data Science
                  </button>
                  <button
                    className={`btn btn-sm ${activeGroup === 'tools' ? 'btn-active' : ''}`}
                    onClick={() => handleGroupClick('tools')}
                >
                   Tools
                </button>

            </div>
            <div className={` w-full ${isVisible ? 'skill-container-visible' : 'skill-container-hidden' } `}>
                <div className='flex flex-wrap gap-3 w-full justify-center items-center '>
                    {displayedSkills.map((skill, index) => (
                        <SkillType
                            key={index}
                            image={skill.image}
                            title={skill.title}
                            style={{transitionDelay: `${index * 100}ms` }}
                        />
                    ))}
                </div>
                {!showAll && filteredSkills.length > 5 && (
                    <div className='flex justify-center mt-4'>
                        <button className='btn btn-sm' onClick={handleShowMore}>
                           Show more
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;