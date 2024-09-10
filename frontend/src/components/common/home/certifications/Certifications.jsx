import React from 'react'
import '../../../../App.css'
import Certification from './Certification'

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";


import certif1 from "../../../../assets/certifications/Certificat1.jpg"
import certif2 from "../../../../assets/certifications/Certificat2.jpg"
import certif4 from "../../../../assets/certifications/Certificat4.jpg"
import certif3 from "../../../../assets/certifications/Certificat3.jpg"
import certif5 from "../../../../assets/certifications/Certificat5.jpg"

const Certifications = () => {


    const certificate_skill = (e) =>{
        if(e === 1){
          return(
            <>
              <RiRobot2Line />    
            </>
          )
        } 
        else if(e === 2){
            return(
                <>
                  <FaHtml5 />    
                  <FaCss3Alt />    
                  <FaJs />    
                </>
            )    
        }
        else if(e === 3){
            return(
                <>
                  <FaReact />    
                </>
            )
        }
        else if(e === 4){
            return(
                <>
                  <FaReact />    
                </>
            )    
        }
        else if(e === 5){
          return(
              <>
                <RiRobot2Line />    
              </>
          )    
      }
    }
  
    
  return (
    <div className='flex flex-col justify-center items-center container mx-auto px-4'>
        <div className='text-6xl font-bold my-16  bebasnue '>
            Certifications 
        </div>

        <div className='flex flex-col items-center gap-10 w-full  '>
            <Certification 
                image={certif2}
                title={"Career Essentials in Generative AI by Microsoft and LinkedIn"}
                text={"Certificat d’accomplissement Microsoft"}
                icons={certificate_skill(1)}
                />  

            <Certification 
                image={certif1}
                title={"Introduction to Web Development with HTML, CSS, JavaScript"}
                text={"Throughout the course, I delved into the fundamentals of HTML, CSS, and JavaScript, gaining a solid foundation in building dynamic and interactive websites."}
                icons={certificate_skill(2)}
                />

            <Certification 
                image={certif3}
                title={"Advanced React"}
                text={"During the React Basics course by Meta on Coursera, I gained insights into the essential principles of React, such as components, state management, and props, and developed a robust foundation for creating engaging and interactive web applications."}
                icons={certificate_skill(3)}
                />

            <Certification 
                image={certif4}
                title={"React Basics"}
                text={"Throughout the Advanced React course by Meta on Coursera, I deepened my understanding of advanced React concepts, including hooks, context, and performance optimization, and built a comprehensive skill set for developing sophisticated and efficient web applications."}
                icons={certificate_skill(4)}
                />

            <Certification 
                image={certif5}
                title={"OCI AI Certified Foundations Associate"}
                text={"In the OCI AI Certified Foundations Associate course, I learned the core concepts of Oracle Cloud Infrastructure and foundational AI services. I gained skills to design, implement, and manage AI solutions using OCI tools."}
                icons={certificate_skill(5)}
                />
        </div>

    </div>
  )
}

export default Certifications
