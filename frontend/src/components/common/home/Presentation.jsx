import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import lsi from "../../../assets/logo/lsi.webp";

import photo from "../../../assets/logo/Photo.png"

const Presentation = () => {
  return (
    
    <div className="flex flex-col justify-center min-h-screen overflow-auto  ">
        <div className="hero-content flex-col lg:flex-row-reverse md:gap-28 ">
            <img
            src={photo}
            className="max-w-xs card  border border-base-200 hover:border-base-300 " />
            <div>
            <h1 className="md:text-7xl text-5xl md:text-start text-center bebasnue">Mohamed Amine BAHASSOU</h1>
            <p className="py-6 text-xl md:text-start text-center abel font-medium">
                Software & AI Engineering Student
                At the Faculty of Science and Technology.
            </p>

            <div className='flex md:justify-start md:items-start justify-center items-center '>

                <a className="btn btn-ghost text-2xl hover:text-blue-500" href='https://www.linkedin.com/in/mohamed-amine-bahassou/' target='_blank'>
                    <FaLinkedinIn />
                </a>
                <a className="btn btn-ghost text-2xl hover:text-purple-950" href='https://github.com/Medamine-Bahassou' target='_blank'>
                    <FaGithub />
                </a>
                <a className="btn btn-ghost text-2xl hover:text-blue-600" href='https://www.facebook.com/mohamedamine.bahassou.1/' target='_blank'>
                    <FaFacebook />
                </a>
            
            </div>

            </div>
        </div>
    </div>
  )
}

export default Presentation
