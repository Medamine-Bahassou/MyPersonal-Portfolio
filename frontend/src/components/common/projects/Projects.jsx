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

import "../../../App.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from "../../../assets/projects/1.avif";
import img2 from "../../../assets/projects/2.png";
import img3 from "../../../assets/projects/3.png";
import img4 from "../../../assets/projects/4.png";
import img5 from "../../../assets/projects/5.png";
import img6 from "../../../assets/projects/6.webp";

const Projects = () => {
    const projectIcons = (id) => {
      switch (id) {
        case 1: return <><SiQt /><TbBrandCpp /><GrMysql /></>;
        case 2: return <><FaUnity /><TbBrandCSharp /></>;
        case 3: return <><BiLogoPhp /><RiBootstrapLine /><GrMysql /></>;
        case 4: return <><DiSymfony /><GrMysql /></>;
        case 5: return <><DiSymfony /><RiReactjsFill /><GrMysql /></>;
        case 6: return <><RiReactjsFill /></>;
        default: return null;
      }
    };

    const projectsData = [
        { id: 1, title: "Management of the Computer Engineering department", description: "A project for module C++ . In this project we are used Qt creator for generate multiple Interfaces. for more details you can click the button bellow.", image: img1 },
        { id: 2, title: "Dungeon Loop", description: "This project is a 2D top-down game featuring procedural map generation, as well as pathfinding algorithms such as Dijkstra and A* (A star). The game provides an immersive experience with dynamically generated maps and challenging navigation scenarios.", image: img2 },
        { id: 3, title: "AFSTET Gaming Club Website", description: "Le site web du Club Gaming de la FSTT est une plateforme développée en utilisant les technologies PHP, JavaScript, HTML/CSS. Ce site offre une gamme de fonctionnalités permettant de gérer les actualités, les événements, les administrateurs, ainsi que les comptes utilisateurs (connexion et inscription).", image: img3 },
        { id: 4, title: "MedShop E-Commerce website", description: "MedShop est un site E-Commerce développé avec Symfony et Bootstrap. Ce site a été réalisé par Mohamed Amine Bahassou. Il offre des fonctionnalités permettant d'ajouter, supprimer et modifier des produits ou des profils, ainsi que de gérer le panier d'achats et les commandes.", image: img4 },
        { id: 5, title: "3ML", description: "Symfony React app Platform 3ML (عمل) for freelancers, Project that connect freelancers with tailored job opportunities based on their skills and preferences.", image: img5 },
        { id: 6, title: "X Clone", description: "A simplified clone of the social media platform X (formerly known as Twitter), developed for educational purposes. This project replicates core features like posting, following, and interacting with other users' posts.", image: img6 },
    ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [img, setImg] = useState("");
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


  return (
    <div className='flex flex-col justify-center items-center container mx-auto'>
      <div className='text-6xl font-bold my-16 bebasnue z-[1] '>Projects</div>

      <div className='md:grid md:grid-cols-3 gap-6 w-full flex flex-col md:justify-center'>
        {projectsData.map((project) => (
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
        {/* Pre-render the modal structure, conditional rendering of content */}
      <dialog id="project_modal" className="modal" ref={modalRef}>
      <div className="modal-box p-0  md:flex md:flex-row  max-w-5xl w-11/12 ">
            {selectedProject && ( // Only render modal content when selectedProject is available
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
                    <SwiperSlide onClick={()=> openImgModal(selectedProject.image) } className='h-full flex justify-center items-center hover:cursor-pointer'>
                      <img src={selectedProject.image} alt="project" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide className='h-full flex justify-center items-center hover:cursor-pointer'>

                      <img src={img2} alt="project" className="w-full h-full object-cover" />
                  </SwiperSlide>
                  </Swiper>
            </figure>
            <div className='p-5 md:w-1/2'>
                <h3 className="font-bold text-lg mt-4">{selectedProject.title}</h3>
                <p className="py-4">{selectedProject.description}</p>
                <div className="flex gap-2 text-2xl">
                    {projectIcons(selectedProject.id)}
                </div>
                <div className='grid grid-cols-2 gap-6 p-3 mt-6'>
                  <button className="btn btn-active w-full">
                      <FaGithub/>
                      GitHub
                  </button>
                  <button className="btn btn-active text-red-600 w-full" >
                        <span className="relative flex h-3 w-3 z-10">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        Live
                    </button>
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