import React, { useState, useRef } from 'react';
import Project from './Project';
import { SiQt } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaUnity } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoPhp } from "react-icons/bi";
import { RiBootstrapLine } from "react-icons/ri";
import { DiSymfony } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { RiReactjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiOracle } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiDaisyui } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import "../../../App.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from "../../../assets/projects/1/1.avif";
import img2 from "../../../assets/projects/2/2.png";
import img3 from "../../../assets/projects/3/3.png";
import img4 from "../../../assets/projects/4/4.png";
import img5 from "../../../assets/projects/5/5.png";
import img6 from "../../../assets/projects/6/6.webp";
import img7 from "../../../assets/projects/7/7.png";
import img7_1 from "../../../assets/projects/7/7_1.png"
import img7_2 from "../../../assets/projects/7/7_2.png"

const Projects = () => {
    const projectIcons = (id) => {
      switch (id) {
        case 1: return <><SiQt /><TbBrandCpp /><GrMysql /></>;
        case 2: return <><FaUnity /><TbBrandCSharp /></>;
        case 3: return <><BiLogoPhp /><RiBootstrapLine /><GrMysql /></>;
        case 4: return <><DiSymfony /><GrMysql /></>;
        case 5: return <><DiSymfony /><RiReactjsFill /><GrMysql /></>;
        case 6: return <><RiReactjsFill /><SiExpress/><SiMongodb/></>;
        case 7: return <><SiOracle /> <SiSpringboot/><FaAngular/><RiTailwindCssFill/><SiDaisyui/>  </>
        default: return null;
      }
    };
    
    const projectsData = [
      { id: 1, title: "Management of the Computer Engineering department", description: "A project for module C++ . In this project we are used Qt creator for generate multiple Interfaces. for more details you can click the button bellow.", image: img1, images: [img1], githubLink:"https://github.com/Medamine-Bahassou/Gestion-de-departement-genie-informaique-qt-creator" },
      { id: 2, title: "Dungeon Loop", description: "This project is a 2D top-down game featuring procedural map generation, as well as pathfinding algorithms such as Dijkstra and A* (A star). The game provides an immersive experience with dynamically generated maps and challenging navigation scenarios.", image: img2, images: [img2], githubLink:"https://github.com/Medamine-Bahassou/Dungeon_Loop-Unity-Project-Procedural-Map-Generation-PathFinding" },
      { id: 3, title: "AFSTET Gaming Club Website", description: "Le site web du Club Gaming de la FSTT est une plateforme développée en utilisant les technologies PHP, JavaScript, HTML/CSS. Ce site offre une gamme de fonctionnalités permettant de gérer les actualités, les événements, les administrateurs, ainsi que les comptes utilisateurs (connexion et inscription).", image: img3, images: [img3], githubLink:"https://github.com/Medamine-Bahassou/Club_Gaming_FSTT_Website"  },
      { id: 4, title: "MedShop E-Commerce website", description: "MedShop est un site E-Commerce développé avec Symfony et Bootstrap. Ce site a été réalisé par Mohamed Amine Bahassou. Il offre des fonctionnalités permettant d'ajouter, supprimer et modifier des produits ou des profils, ainsi que de gérer le panier d'achats et les commandes.", image: img4, images: [img4], githubLink:"https://github.com/Medamine-Bahassou/MedShop_E-Commerce-Website-Symfony"  },
      { id: 5, title: "3ML", description: "Symfony React app Platform 3ML (عمل) for freelancers, Project that connect freelancers with tailored job opportunities based on their skills and preferences.", image: img5, images: [img5] , githubLink:"https://github.com/Medamine-Bahassou/Symfony-React-app-Platform-3ML" },
      { id: 6, title: "X Clone", description: "A simplified clone of the social media platform X (formerly known as Twitter), developed for educational purposes. This project replicates core features like posting, following, and interacting with other users' posts.", image: img6, images: [img6], githubLink:"https://github.com/Medamine-Bahassou/x-clone-MERN-Stack", liveDemoLink: "https://x-clone-new.onrender.com/"},
      { id: 7, title: "Oracle Admin PRO", description: "Oracle Admin Pro is a web-based administration application designed to streamline database management tasks for Oracle databases. Built using Java EE (Spring Boot) for the backend and Angular for the frontend, this application aims to provide a user-friendly interface for key administrative operations.", image: img7, images: [img7, img7_1, img7_2], githubLink:"https://github.com/Medamine-Bahassou/Oracle-Project-" }
  ].reverse();

    const [selectedProject, setSelectedProject] = useState(null);
    const [img, setImg] = useState("");
    const [showMore, setShowMore] = useState(false);
    const modalRef = useRef(null);
    const imgModalRef = useRef(null);

    const openModal = (project) => {
      setSelectedProject(project);
      modalRef.current.showModal();
    };

    const openImgModal = (img) => {
      setImg(img);
      imgModalRef.current.showModal()
    };

    const closeModal = () => {
        setSelectedProject(null);
        modalRef.current.close();
    };

    const closeImgModal = () => {
      imgModalRef.current.close();
    };


    const projectsToDisplay = showMore
        ? projectsData
        : projectsData.slice(0,3);
    return (
      <div className='flex flex-col justify-center items-center container mx-auto'>
          <div className='text-6xl font-bold my-16 bebasnue z-[1] '>Projects</div>

          <div className='md:grid md:grid-cols-3 gap-6 w-full flex flex-col md:justify-center'>
              {projectsToDisplay.map((project) => (
                  <Project
                      key={project.id}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      icons={projectIcons(project.id)}
                      onClick={() => openModal(project)}
                  />
              ))}
          </div>
           {!showMore && projectsData.length > 3 && (
            <button className="btn btn-sm  mt-6" onClick={() => setShowMore(true)}>
                Show More
            </button>
        )}
        {showMore && (
            <button className="btn btn-sm mt-6" onClick={() => setShowMore(false)}>
                Show Less
            </button>
        )}
          {/* Pre-render the modal structure, conditional rendering of content */}
          <dialog id="project_modal" className="modal" ref={modalRef}>
              <div className="modal-box p-0  md:flex md:flex-row  max-w-5xl w-11/12 ">
                  {selectedProject && (
                      <React.Fragment>
                          <figure className="md:w-1/2">
                              <Swiper
                                  style={{
                                      '--swiper-navigation-color': '#fff',
                                      '--swiper-pagination-color': '#fff',
                                  }}
                                  navigation={true}
                                  modules={[Navigation]}
                                  className='h-52 md:h-full'
                              >
                                  {selectedProject.images.map((img, index) => (
                                      <SwiperSlide
                                        key={index}
                                        onClick={() => openImgModal(img)}
                                        className='h-full flex justify-center items-center hover:cursor-pointer'>
                                          <img src={img} alt={`project-${index}`} className="w-full h-full object-cover" />
                                      </SwiperSlide>
                                  ))}

                              </Swiper>
                          </figure>
                          <div className='p-5 md:w-1/2'>
                              <h3 className="font-bold text-lg mt-4">{selectedProject.title}</h3>
                              <p className="py-4">{selectedProject.description}</p>
                              <div className="flex gap-2 text-2xl">
                                  {projectIcons(selectedProject.id)}
                              </div>
                              <div className='grid grid-cols-2 gap-6 p-3 mt-6'>
                                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-active w-full">
                                      <FaGithub/>
                                      GitHub
                                  </a>
                                  
                                  <a 
                                    href={selectedProject.liveDemoLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={`btn btn-active text-red-600 w-full ${!selectedProject.liveDemoLink ? 'btn-disabled' : ''}`}
                                     
                                    >
                                    <span className={`relative flex h-3 w-3 z-10`}>
                                        <span className={`absolute inline-flex h-full w-full rounded-full ${selectedProject.liveDemoLink ? 'animate-ping bg-red-400' : 'bg-gray-400'} opacity-75`}></span>
                                        <span className={`relative inline-flex rounded-full h-3 w-3 ${selectedProject.liveDemoLink ? 'bg-red-500' : 'bg-gray-500'}`}></span>
                                    </span>
                                      Live
                                    </a>
                               
                              </div>
                          </div>
                      </React.Fragment>
                  )}
              </div>
              <form method="dialog" className="modal-backdrop" onClick={closeModal}>
                <button>close</button>
              </form>
          </dialog>
          <dialog id="img_modal" className="modal" ref={imgModalRef}>
              <div className="modal-box w-11/12 max-w-5xl p-0">
                  {img && <img src={img} className='w-full h-full' />}
              </div>
              <form method="dialog" className="modal-backdrop" onClick={closeImgModal}>
                  <button>close</button>
              </form>
          </dialog>
      </div>
    );
};

export default Projects;  