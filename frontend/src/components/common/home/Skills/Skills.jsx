import React, { useState, useEffect, useRef } from 'react';
import SkillType from './Skill';
import '../../../../App.css';
import { SiGithub, SiLeetcode } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

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
        { image: "https://blog.zenika.com/wp-content/uploads/2016/04/spring-boot-logo-1.png", title: "Spring Boot", group: "backend" },
        { image: "https://cdn-icons-png.flaticon.com/512/5969/5969346.png", title: "Unity", group: "game" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Qt_logo_2016.svg/1024px-Qt_logo_2016.svg.png", title: "Qt", group: "desktop" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/1200px-Matlab_Logo.png", title: "MATLAB", group: "data" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png", title: "Python", group: "data" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png", title: "Git/GitHub", group: "tools" },
        { image: "https://static-00.iconduck.com/assets.00/symfony-icon-512x512-g7hivt0k.png", title: "Symfony", group: "backend" },
            { image: "https://enzofilangi.fr/en/assets/images/programming-logos/UML.png", title: "UML", group: "tools" },
            { image: "https://www.ideematic.com/wp-content/uploads/2018/02/mysql.png", title: "MySQL", group: "database" },
            { image: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Symbol.png", title: "PLSql", group: "database" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/800px-Postgresql_elephant.svg.png", title: "PostgreSQL", group: "database" },
        { image: "https://linube.com/blog/wp-content/uploads/sql-server-min.png", title: "SQL Server", group: "database" },
       { image: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg", title: "MongoDB", group: "database" },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81J-za89u1N45eVjIRJ-KhD4VfR3BQwIwjw&s", title: "Merise", group: "tools" },
         { image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", title: "React JS", group: "frontend" },
        { image: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256", title: "Node JS", group: "backend" },
          { image: "https://lh5.googleusercontent.com/proxy/KTMTgxEwIkK5PtvXhl3qRBO_BB797q_ixPFFLP4lLCImNbufF5V6bRvVbBMHSuQ8rF4IiMBjIOW539IuELV-Ir5X7ppI40BUOkd4ytO87v9gDRIgWsm_UXt84aMVd_6v8_pPt_ZACSm-km9RlQ", title: "Express JS", group: "backend" },
          { image: "https://perko.dev/images/angular-logo.png", title: "Angular", group: "frontend" },
       { image: "https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png", title: "Bootstrap", group: "frontend" },
        { image: "https://www.svgrepo.com/show/374118/tailwind.svg", title: "TailwindCSS", group: "frontend" },
            { image: "https://static-00.iconduck.com/assets.00/xml-icon-1792x2048-mgs34nnd.png", title: "XML", group: "mobile" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Microsoft_Office_logo_%282013%E2%80%932019%29.png", title: "Microsoft Office", group: "tools" },
            { image: "https://img.icons8.com/?size=512&id=108792&format=png", title: "Windows", group: "tools" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png", title: "Linux/Unix", group: "tools" },
         { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png", title: "Visual Studio Code", group: "tools" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/2060px-Visual_Studio_Icon_2019.svg.png", title: "Visual Studio", group: "tools" },
       { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/800px-IntelliJ_IDEA_Icon.svg.png", title: "IntelliJ IDEA", group: "tools" },
       { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Android_Studio_Logo_2024.svg/800px-Android_Studio_Logo_2024.svg.png", title: "Android Studio", group: "tools" },
            { image: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png", title: "Docker", group: "tools" },
    
    
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

            <div className='grid grid-cols-2 gap-4 py-8 '>
                <div className='' align="center">
                    <SiGithub className='pb-4 text-6xl opacity-40'/>
                    <img className='select-none' src="https://github-readme-stats.vercel.app/api?username=medamine-bahassou&show_icons=true&theme=dark&border_radius=20&hide_border=true&card_width=500px&rank_icon=github" />

                </div>


                <div className=''  align="center">
                    <SiLeetcode className='pb-4 text-6xl opacity-40'/>
                    <img className='select-none' src="https://leetcard.jacoblin.cool/medamine-bahassou?border=0&radius=20" />

                </div>

            </div>

            <div className='text-6xl font-bold my-16 bebasnue z-[1] '>
                
                <div className='flex justify-center gap-4'>
                    <FaCode />
                    Skills
                </div>

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
                    className={`btn btn-sm ${activeGroup === 'mobile' ? 'btn-active' : ''}`}
                    onClick={() => handleGroupClick('mobile')}
                >
                   Mobile
                </button>
                  <button
                    className={`btn btn-sm ${activeGroup === 'data' ? 'btn-active' : ''}`}
                    onClick={() => handleGroupClick('data')}
                >
                     Data Science
                  </button>
                  <button
                    className={`btn btn-sm ${activeGroup === 'database' ? 'btn-active' : ''}`}
                    onClick={() => handleGroupClick('database')}
                >
                     Database
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
                        <button className='btn btn-sm btn-success' onClick={handleShowMore}>
                           Show more
                        </button>
                    </div>
                )}
            </div>

            



        </div>
    );
};

export default Skills;