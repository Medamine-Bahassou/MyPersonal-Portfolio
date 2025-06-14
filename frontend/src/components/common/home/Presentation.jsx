import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import lsi from "../../../assets/logo/lsi.webp";

import photo from "../../../assets/logo/Photo.png"
import { SiLeetcode, SiReaddotcv } from 'react-icons/si';

const Presentation = () => {
  return (
    
    <div className="flex flex-col justify-center min-h-screen overflow-auto min-w-full ">
        <div className="hero-content flex-col lg:flex-row-reverse md:gap-28 min-w-full ">
            
            <span className={`relative flex  `}>

                <img
                    src={photo}
                    className="object-center max-w-xs rounded-full shadow shadow-2xl shadow-gray-600 card  border border-base-200 hover:border-base-300 " 
                />
                    
            </span>

            <div>
            <h1 className="md:text-7xl text-5xl md:text-start text-center bebasnue"> Mohamed Amine BAHASSOU</h1>
            <p className="py-6 text-xl md:text-start text-center abel font-medium">
                Software & AI Engineering Student
                At the Faculty of Science and Technology.
            </p>

            <div className='flex md:justify-start md:items-start justify-center items-center '>

                <a className="btn btn-ghost text-2xl hover:text-blue-500 tooltip tooltip-bottom flex items-center" data-tip="LinkedIn"  href='https://www.linkedin.com/in/mohamed-amine-bahassou/' target='_blank'>
                    <FaLinkedinIn />
                </a>
                <a className="btn btn-ghost text-2xl hover:text-purple-950 tooltip tooltip-bottom flex items-center" data-tip="GitHub"  href='https://github.com/Medamine-Bahassou' target='_blank'>
                    <FaGithub />
                </a>
                <a className="btn btn-ghost text-2xl hover:text-blue-600 tooltip tooltip-bottom flex items-center" data-tip="Facebook"  href='https://www.facebook.com/mohamedamine.bahassou.1/' target='_blank'>
                    <FaFacebook />
                </a>
                <a className=" btn btn-ghost text-2xl hover:text-yellow-600 tooltip tooltip-bottom flex items-center" data-tip="LeetCode"  href='https://leetcode.com/u/Medamine-Bahassou/' target='_blank'>
                    <SiLeetcode />
                </a>
                <a className=" skeleton  btn btn-ghost text-2xl hover:text-green-600 tooltip tooltip-bottom flex items-center" data-tip="CV"  href='https://www.canva.com/design/DAGeDYgcrBk/OKnHlwhwF6UiJYGIFQQ-IA/view?utm_content=DAGeDYgcrBk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd1ea83de39' target='_blank'>
                    <SiReaddotcv />
                </a>
                
            </div>

            </div>
        </div>
    </div>
  )
}

export default Presentation
