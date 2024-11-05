import React, { useState } from 'react';
import '../../../../App.css';
import Certification from './Certification';
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";

// Import certification images
import certif1 from "../../../../assets/certifications/Certificat1.jpg";
import certif2 from "../../../../assets/certifications/Certificat2.jpg";
import certif3 from "../../../../assets/certifications/Certificat3.jpg";
import certif4 from "../../../../assets/certifications/Certificat4.jpg";
import certif5 from "../../../../assets/certifications/Certificat5.jpg";

const Certifications = () => {
  
  // Helper function to render skill icons based on certificate type
  const getCertificateIcons = (id) => {
    switch (id) {
      case 1: return <RiRobot2Line />;
      case 2: return <><FaHtml5 /><FaCss3Alt /><FaJs /></>;
      case 3:
      case 4: return <FaReact />;
      case 5: return <RiRobot2Line />;
      default: return null;
    }
  };

  // State to manage modal image
  const [img, setImg] = useState("");

  const openImgModal = (imgSrc) => {
    setImg(imgSrc);
    document.getElementById('certificate_modal').showModal();
  };

  // Certification data array
  const certifications = [
    {
      id: 1,
      image: certif2,
      title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      text: "Certificat d’accomplissement Microsoft",
      icons: getCertificateIcons(1),
    },
    {
      id: 2,
      image: certif1,
      title: "Introduction to Web Development with HTML, CSS, JavaScript",
      text: "Throughout the course, I delved into the fundamentals of HTML, CSS, and JavaScript, gaining a solid foundation in building dynamic and interactive websites.",
      icons: getCertificateIcons(2),
    },
    {
      id: 3,
      image: certif3,
      title: "Advanced React",
      text: "During the React Basics course by Meta on Coursera, I gained insights into the essential principles of React, such as components, state management, and props, and developed a robust foundation for creating engaging and interactive web applications.",
      icons: getCertificateIcons(3),
    },
    {
      id: 4,
      image: certif4,
      title: "React Basics",
      text: "Throughout the Advanced React course by Meta on Coursera, I deepened my understanding of advanced React concepts, including hooks, context, and performance optimization, and built a comprehensive skill set for developing sophisticated and efficient web applications.",
      icons: getCertificateIcons(4),
    },
    {
      id: 5,
      image: certif5,
      title: "OCI AI Certified Foundations Associate",
      text: "In the OCI AI Certified Foundations Associate course, I learned the core concepts of Oracle Cloud Infrastructure and foundational AI services. I gained skills to design, implement, and manage AI solutions using OCI tools.",
      icons: getCertificateIcons(5),
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center container mx-auto px-4 py-6'>
      <div className='text-6xl font-bold my-16 bebasnue z-[1] '>
        Certifications
      </div>

      <div className='flex flex-col items-center gap-10 w-full'>
        {certifications.map((cert) => (
          <div key={cert.id} onClick={() => openImgModal(cert.image)} className='w-full'>
            <Certification 
              image={cert.image}
              title={cert.title}
              text={cert.text}
              icons={cert.icons}
            />
          </div>
        ))}
      </div>

      {/* Modal for displaying enlarged certificate image */}
      {img && (
        <dialog id="certificate_modal" className="modal">
          <div className="modal-box w-full max-w-2xl p-0">
            <img src={img} alt="Certificate" className='w-full h-full' />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default Certifications;
