import React, { useState, useEffect, useRef } from 'react';
import '../../../../App.css';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { RiRobot2Line } from 'react-icons/ri';
import { SiJquery } from 'react-icons/si';

// Import certification images
import certif1 from "../../../../assets/certifications/Certificat1.jpg";
import certif2 from "../../../../assets/certifications/Certificat2.jpg";
import certif3 from "../../../../assets/certifications/Certificat3.jpg";
import certif4 from "../../../../assets/certifications/Certificat4.jpg";
import certif5 from "../../../../assets/certifications/Certificat5.jpg";

const Certifications = () => {
  const certificationsRef = useRef(null);
  const sliderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
    const [modalContent, setModalContent] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [animation, setAnimation] = useState(null);
  const [currentTransform, setCurrentTransform] = useState(0);
    const [cardWidth, setCardWidth] = useState(300);
     const [modalOpen, setModalOpen] = useState(false);
  const getCertificateIcons = (id) => {
        switch (id) {
            case 1: return <RiRobot2Line size={24} />;
            case 2: return <><FaHtml5 size={24} /><FaCss3Alt size={24} /><FaJsSquare size={24} /></>;
            case 3:
            case 4: return <FaReact size={24} />;
            case 5: return <RiRobot2Line size={24} />;
            default: return null;
        }
    };
 const techIcons = {
        'React': <FaReact size={20} />,
        'HTML': <FaHtml5 size={20} />,
        'CSS': <FaCss3Alt size={20} />,
        'JavaScript': <FaJsSquare size={20} />,
        'jQuery': <SiJquery size={20} />,
    };
  const certifications = [
        {
            id: 1,
            image: certif2,
            title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
            text: "Certificat d’accomplissement Microsoft",
            icons: getCertificateIcons(1),
            technologies: [],
             verificationLink: 'https://www.example.com/verify/1'
        },
        {
            id: 2,
            image: certif1,
            title: "Introduction to Web Development with HTML, CSS, JavaScript",
            text: "Throughout the course, I delved into the fundamentals of HTML, CSS, and JavaScript, gaining a solid foundation in building dynamic and interactive websites.",
              icons: getCertificateIcons(2),
            technologies: ['HTML', 'CSS', 'JavaScript'],
            verificationLink: 'https://www.example.com/verify/2'
        },
        {
            id: 3,
            image: certif3,
            title: "Advanced React",
            text: "During the React Basics course by Meta on Coursera, I gained insights into the essential principles of React, such as components, state management, and props, and developed a robust foundation for creating engaging and interactive web applications.",
              icons: getCertificateIcons(3),
            technologies: ['React'],
            verificationLink: 'https://www.example.com/verify/3'
        },
        {
            id: 4,
            image: certif4,
            title: "React Basics",
            text: "Throughout the Advanced React course by Meta on Coursera, I deepened my understanding of advanced React concepts, including hooks, context, and performance optimization, and built a comprehensive skill set for developing sophisticated and efficient web applications.",
             icons: getCertificateIcons(4),
            technologies: ['React'],
             verificationLink: 'https://www.example.com/verify/4'
        },
         {
            id: 5,
            image: certif5,
            title: "OCI AI Certified Foundations Associate",
            text: "In the OCI AI Certified Foundations Associate course, I learned the core concepts of Oracle Cloud Infrastructure and foundational AI services. I gained skills to design, implement, and manage AI solutions using OCI tools.",
             icons: getCertificateIcons(5),
            technologies: [],
            verificationLink: 'https://www.example.com/verify/5'
        },
    ];
 const openCertificateModal = (certificate) => {
        setModalContent(certificate);
         setModalOpen(true);
        document.getElementById('certificate_modal').showModal();
    };
 const closeModal = () => {
      setModalOpen(false);
    document.getElementById('certificate_modal').close();
   };
    const clonedCertifications = [...certifications, ...certifications];


    useEffect(() => {
        if (!sliderRef.current) return;

        const slider = sliderRef.current;
        const handleResize = () => {
          setSliderWidth(slider.scrollWidth);
           setCardWidth(300);
        };
         handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        if (!sliderRef.current) return;

        const slider = sliderRef.current;

        const startAnimation = () => {
            const anim = slider.animate(
                [
                    { transform: `translateX(${currentTransform}px)` },
                    { transform: `translateX(-${sliderWidth / 2}px)` },
                ],
                {
                    duration: 15000,
                    iterations: Infinity,
                    easing: 'linear',
                }
            );

            setAnimation(anim);
        };
         if(!isPaused && sliderWidth > 0){
           startAnimation();
        }else if (animation) {
           animation.pause()
       }


        return () => {
            if (animation) {
                animation.cancel()
            }
        };
    }, [isPaused, sliderWidth, currentTransform]);

      const handleMouseEnter = () => {
        if(animation){
         setCurrentTransform(animation.currentTime * (sliderWidth /2) / 15000 * -1)
             setIsPaused(true)
        }

    };

     const handleMouseLeave = () => {
      if(animation){
        const anim  =  animation;
          anim.currentTime = (currentTransform * -1  * 15000 / (sliderWidth /2))
         setIsPaused(false);

      }
    };


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (certificationsRef.current) {
            observer.observe(certificationsRef.current);
        }

        return () => {
            if (certificationsRef.current) {
                observer.unobserve(certificationsRef.current);
            }
        };
    }, []);

    return (
        <div className="container mx-auto py-12 px-4 md:px-8 lg:px-16" ref={certificationsRef}>
            <h1 className="text-6xl font-bold mb-8 text-center bebasnue">
                Certifications
            </h1>

            <div
                className={`relative overflow-hidden ${
                    isVisible
                        ? 'opacity-100 transform-none'
                        : 'opacity-0 translate-y-5 transition-all duration-500'
                }`}
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
            >
                <div
                    ref={sliderRef}
                    className="flex whitespace-nowrap  "

                >
                    {clonedCertifications.map((cert, index) => (
                           <div
                                key={index}
                              className="card bg-base-100 border border-base-200 hover:border-base-300 hover:cursor-pointer hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 relative flex-none  w-[300px] h-[250px]  flex flex-col justify-between mr-6"
                                onClick={() => openCertificateModal(cert)}
                           >
                                <figure className="  flex items-center justify-center  h-full overflow-hidden ">
                                    <img src={cert.image} alt={`${cert.title} certificate`} className="  w-full h-full object-cover " />
                                </figure>

                            </div>

                    ))}
               </div>
            </div>

                {/* Modal for displaying enlarged certificate image */}
               {modalContent && (
                  <dialog id="certificate_modal" className={`modal ${modalOpen ? 'modal-open': ''}`}>
                        <div className="modal-box w-11/12 max-w-5xl p-0">
                           <div className='flex flex-col md:flex-row gap-4'>
                             <div className='md:w-2/3'>
                                 <img src={modalContent.image} alt="Certificate" className='w-full h-full object-contain ' />
                               </div>
                                 <div className='md:w-1/3 flex flex-col justify-between p-6'>
                                    <div>
                                        <h2 className="card-title text-2xl font-semibold  teko mb-4">
                                          {modalContent.title}
                                      </h2>
                                      <p className="  text-base font-medium mb-4">
                                          {modalContent.text}
                                     </p>
                                   </div>
                                 <div className='flex flex-col gap-3  mt-4'>
                                       <div className="flex flex-wrap gap-1 mb-2">
                                             {Array.from(new Set(modalContent.technologies)).map((tech, i) => (
                                                <span key={i} className=''>{techIcons[tech]}</span>
                                              ))}
                                         </div>
                                      <a  href={modalContent.verificationLink}
                                            target="_blank" rel="noopener noreferrer" className='btn btn-primary btn-sm'
                                       >
                                        Verification page
                                    </a>
                                  </div>
                               </div>
                         </div>
                     </div>
                     <form method="dialog" className="modal-backdrop">
                        <button onClick={closeModal}>close</button>
                     </form>
               </dialog>
           )}
        </div>
    );
};

export default Certifications;