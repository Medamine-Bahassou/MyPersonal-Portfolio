import React from 'react'
import '../../../../App.css'
import Certification from './Certification'

const Certifications = () => {
  return (
    <div className='flex flex-col justify-center items-center container mx-auto px-4'>
        <div className='text-6xl font-bold my-16  bebasnue '>
            Certifications 
        </div>

        <div className='flex flex-col items-center gap-10 w-full  '>
            <Certification 
                image={"https://medamine-bahassou.github.io/img/Certificates/Certificat2.jpg"}
                title={"Career Essentials in Generative AI by Microsoft and LinkedIn"}
                text={"Certificat d’accomplissement Microsoft"}
                />

            <Certification 
                image={"https://medamine-bahassou.github.io/img/Certificates/Certificat1.jpg"}
                title={"Introduction to Web Development with HTML, CSS, JavaScript"}
                text={"Throughout the course, I delved into the fundamentals of HTML, CSS, and JavaScript, gaining a solid foundation in building dynamic and interactive websites."}
                />
        </div>

    </div>
  )
}

export default Certifications
