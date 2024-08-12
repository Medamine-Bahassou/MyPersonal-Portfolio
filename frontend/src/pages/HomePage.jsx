import React, { useRef } from 'react'
import Presentation from '../components/common/home/Presentation';
import Skills from '../components/common/home/Skills/Skills';
import Certifications from '../components/common/home/certifications/Certifications';
import Projects from '../components/common/projects/Projects';
import "../App.css"
import Education from '../components/common/home/educations/Educations';
const HomePage = () => {

   

  return (
    <>
    <div className="w-full  ">

      <div id='pres'   >
        <Presentation />
      </div>

      <div  id='skil'  >
        <Skills />
      </div>
      <div id='proj'>
        <Projects />
      </div>
      <div id='cert'>
        <Certifications />
      </div>
      <div id='edu'>
        <Education />
      </div>

    </div>
    </>
  )
}

export default HomePage
