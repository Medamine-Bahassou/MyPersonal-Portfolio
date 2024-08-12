import React from 'react'
import Project from './Project'
import { SiQt } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaUnity } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoPhp } from "react-icons/bi";
import { RiBootstrapLine } from "react-icons/ri";
import { DiSymfony } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { RiReactjsFill } from "react-icons/ri";

import img1 from "../../../assets/projects/1.avif" 
import img2 from "../../../assets/projects/2.gif" 
import img3 from "../../../assets/projects/3.gif"
import img4 from "../../../assets/projects/4.gif"
import img5 from "../../../assets/projects/5.gif"

const Projects = () => {

  const project = (e) =>{
      if(e == 1){
        return(
          <>
            <SiQt />    
            <TbBrandCpp />
            <GrMysql />
            </>
        )
      } 
      else if(e == 2){
        return(
          <>
            <FaUnity />    
            <TbBrandCSharp />
          </>
        )
      }
      else if(e == 3){
        return(
          <>
            <BiLogoPhp />    
            <RiBootstrapLine />
            <GrMysql />
          </>
        )
      }
      else if(e == 4){
        return(
          <>
            <DiSymfony />    
            <GrMysql />
          </>
        )
      }
      else if(e == 5){
        return(
          <>
            <DiSymfony />    
            <RiReactjsFill />
            <GrMysql />
          </>
        )
      }
      
  }


  return (
    <div className='flex flex-col justify-center items-center container mx-auto'>
        <div className='text-6xl font-bold my-16  bebasnue '>
            Projects 
        </div>

        <div className='md:grid md:grid-cols-3 gap-6 w-full flex flex-col md:justify-center     '>
          <Project 
            title={"Management of the Computer Engineering department"}
            description={"A project for module C++ . In this project we are used Qt creator for generate multiple Interfaces. for more details you can click the button bellow."}
            image={img1}
            icons={project(1)}
          />
          <Project 
            title={"Dungeon Loop"}
            description={"This project is a 2D top-down game featuring procedural map generation, as well as pathfinding algorithms such as Dijkstra and A* (A star). The game provides an immersive experience with dynamically generated maps and challenging navigation scenarios."}
            image={img2}
            icons={project(2)}
          />
          <Project 
            title={"AFSTET Gaming Club Website"}
            description={"Le site web du Club Gaming de la FSTT est une plateforme développée en utilisant les technologies PHP, JavaScript, HTML/CSS. Ce site offre une gamme de fonctionnalités permettant de gérer les actualités, les événements, les administrateurs, ainsi que les comptes utilisateurs (connexion et inscription)."}
            image={img3}
            icons={project(3)}
          />
          <Project 
            title={"MedShop E-Commerce website"}
            description={"MedShop est un site E-Commerce développé avec Symfony et Bootstrap. Ce site a été réalisé par Mohamed Amine Bahassou. Il offre des fonctionnalités permettant d'ajouter, supprimer et modifier des produits ou des profils, ainsi que de gérer le panier d'achats et les commandes."}
            image={img4}
            icons={project(4)}
          />
          <Project 
            title={"3ML"}
            description={"Symfony React app Platform 3ML (عمل) for freelancers, Project that connect freelancers with tailored job opportunities based on their skills and preferences."}
            image={img5}
            icons={project(5)}
          />
        </div>


    </div>
  )
}

export default Projects
