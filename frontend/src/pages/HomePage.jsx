import React, { useRef } from 'react'
import Presentation from '../components/common/home/Presentation';
import Skills from '../components/common/home/Skills/Skills';
import Certifications from '../components/common/home/certifications/Certifications';
import Projects from '../components/common/projects/Projects';
import "../App.css"
import Education from '../components/common/home/educations/Educations';
import Test from "../components/common/home/Test"

const HomePage = () => {


  return (
    <>



    <div  className="w-full  divide-y divide-base-300  " >

      <div id='pres' className='py-6'   >
        <Presentation />
      </div>

      <div  id='skil' className='py-6'  >
        <Skills />
      </div>
      <div id='proj' className='py-6'>
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
