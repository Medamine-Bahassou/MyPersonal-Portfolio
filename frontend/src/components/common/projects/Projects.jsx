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
            image={"https://img.freepik.com/vecteurs-libre/illustration-concept-gestion-bureau_114360-8811.jpg"}
            icons={project(1)}
          />
          <Project 
            title={"Dungeon Loop"}
            description={"This project is a 2D top-down game featuring procedural map generation, as well as pathfinding algorithms such as Dijkstra and A* (A star). The game provides an immersive experience with dynamically generated maps and challenging navigation scenarios."}
            image={"https://private-user-images.githubusercontent.com/146652318/338779881-b974d94d-f7b5-4a66-96ea-f17b91cdf2ce.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM0NTcwNjYsIm5iZiI6MTcyMzQ1Njc2NiwicGF0aCI6Ii8xNDY2NTIzMTgvMzM4Nzc5ODgxLWI5NzRkOTRkLWY3YjUtNGE2Ni05NmVhLWYxN2I5MWNkZjJjZS5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgxMlQwOTU5MjZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hYzYzZDUzNjIxNDJkZjA0NmQ5OTEwNzQyYjMyOTc0MTgwNjE5OWU0MWFkZjY2NmQ5NGQ1ZjgzNjcyYmJlZTQwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.lbUMp6kKnciZ8yZ9hk0exFPhpE9QIqxtlkUxnjcKaas"}
            icons={project(2)}
          />
          <Project 
            title={"AFSTET Gaming Club Website"}
            description={"Le site web du Club Gaming de la FSTT est une plateforme développée en utilisant les technologies PHP, JavaScript, HTML/CSS. Ce site offre une gamme de fonctionnalités permettant de gérer les actualités, les événements, les administrateurs, ainsi que les comptes utilisateurs (connexion et inscription)."}
            image={"https://private-user-images.githubusercontent.com/146652318/338267396-7ca0609a-8954-4cbd-81e5-313f0fce1e25.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM0NTcyNzAsIm5iZiI6MTcyMzQ1Njk3MCwicGF0aCI6Ii8xNDY2NTIzMTgvMzM4MjY3Mzk2LTdjYTA2MDlhLTg5NTQtNGNiZC04MWU1LTMxM2YwZmNlMWUyNS5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgxMlQxMDAyNTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04Yjc0OGJlMGNkYjAyYjMyZGYxOWIzNmYzNTFlMTBlNWZkZjQ5ZWVkMzc2ZGRkM2U3YTQ1MzQzYjA4N2E3NGEwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.FpFjzvuW8EbfuqGIn09EoJyNqGPhYJe-oMvVKNdXyks"}
            icons={project(3)}
          />
          <Project 
            title={"MedShop E-Commerce website"}
            description={"MedShop est un site E-Commerce développé avec Symfony et Bootstrap. Ce site a été réalisé par Mohamed Amine Bahassou. Il offre des fonctionnalités permettant d'ajouter, supprimer et modifier des produits ou des profils, ainsi que de gérer le panier d'achats et les commandes."}
            image={"https://private-user-images.githubusercontent.com/146652318/338283527-77928c38-632b-440c-85a7-262195dc0c4c.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM0NTcyNDQsIm5iZiI6MTcyMzQ1Njk0NCwicGF0aCI6Ii8xNDY2NTIzMTgvMzM4MjgzNTI3LTc3OTI4YzM4LTYzMmItNDQwYy04NWE3LTI2MjE5NWRjMGM0Yy5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgxMlQxMDAyMjRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ZjkzZTM2M2U5NzlkNTBhODNiYzMwYzVkN2EzN2M5YTQ4ZWM5ZGJhMWMyN2MxMmM2ODljMjQ0YTE3Mjg2MzdlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.92hd9gR874bI7GLOyV9G3EFFkO8O6PSpOmh8dvWGzTM"}
            icons={project(4)}
          />
          <Project 
            title={"3ML"}
            description={"Symfony React app Platform 3ML (عمل) for freelancers, Project that connect freelancers with tailored job opportunities based on their skills and preferences."}
            image={"https://private-user-images.githubusercontent.com/146652318/338268782-bc5b92fb-7969-456e-9a9e-51e769307d88.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM0NTcyMTEsIm5iZiI6MTcyMzQ1NjkxMSwicGF0aCI6Ii8xNDY2NTIzMTgvMzM4MjY4NzgyLWJjNWI5MmZiLTc5NjktNDU2ZS05YTllLTUxZTc2OTMwN2Q4OC5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgxMlQxMDAxNTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kZDgxMGZjN2RmYjA4ZjhkNjUzNjRmZjQ3NzhhYTU3NDEyZDIxMjQ5MjJiYjYzY2RmMDdjMTdiNzcyMmNmYzkyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.0oI5iZj1jrnAQvhB7xo5ICPTJ-tt40cFcLb4bCdAZcw"}
            icons={project(5)}
          />
        </div>


    </div>
  )
}

export default Projects
