import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Presentation = () => {
  return (
    
    <div className="flex flex-col justify-center min-h-screen overflow-auto  ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
            <img
            src="https://medamine-bahassou.github.io/img/Photo.png"
            className="max-w-sm rounded-sm shadow-2xl " />
            <div>
            <h1 className="text-7xl bebasnue">Mohamed Amine BAHASSOU</h1>
            <p className="py-6 text-xl abel font-medium">
                Software Engineering Student
                At the Faculty of Science and Technology.
            </p>
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
  )
}

export default Presentation
