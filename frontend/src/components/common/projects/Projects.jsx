import React, { useState } from 'react';
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

  const [selectedProject, setSelectedProject] = useState(projectsData);
 
  const openModal = (project) => {
    setSelectedProject(project);
    document.getElementById('project_modal').showModal();
  };
  
  return (
    <div className='flex flex-col justify-center items-center container mx-auto'>
      <div className='text-6xl font-bold my-16 bebasnue'>Projects</div>

      <div className='md:grid md:grid-cols-3 gap-6 w-full flex flex-col md:justify-center'>
        {projectsData.map((project) => (
            
            <div onClick={() => openModal(project)} >
              <Project
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                icons={projectIcons(project.id)}
                />
            </div>
        ))}
      </div>

      {selectedProject && (
        <dialog id="project_modal" className="modal  ">
          
          <div className="modal-box p-0   ">
            <figure>
              <img src={selectedProject.image} alt="project" className="w-full h-full object-cover" />
            </figure>

            <div className='p-5 '>

              <h3 className="font-bold text-lg mt-4">{selectedProject.title}</h3>
              <p className="py-4">{selectedProject.description}</p>
              <div className="flex gap-2 text-2xl">
                {projectIcons(selectedProject.id)}
              </div>
              <div className='grid grid-cols-2 gap-6 p-3 mt-6'>


                  <button className="btn  btn-active   w-full">
                    <FaGithub/>
                    GitHub
                  </button>
                  
                  <button className="btn  btn-active text-red-600   w-full"  >
                    <span class="relative flex h-3 w-3 z-10">
                      <span class="animate-ping absolute    inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span class="relative   inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    Live
                  </button>




            </div>

            </div>
            
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default Projects;
