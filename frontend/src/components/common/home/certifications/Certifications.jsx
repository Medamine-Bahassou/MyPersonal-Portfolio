import React, { useState, useEffect, useRef, useCallback } from 'react';
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
import ParallaxText from '../../ParallaxText';

const Certifications = () => {
    const certificationsRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    // Memoize the certificate icons function
    const getCertificateIcons = useCallback((id) => {
        switch (id) {
            case 1: return <RiRobot2Line size={24} />;
            case 2: return <><FaHtml5 size={24} /><FaCss3Alt size={24} /><FaJsSquare size={24} /></>;
            case 3:
            case 4: return <FaReact size={24} />;
            case 5: return <RiRobot2Line size={24} />;
            default: return null;
        }
    }, []);

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

    // Use useCallback to prevent unnecessary re-renders
    const openCertificateModal = useCallback((certificate) => {
        setModalContent(certificate);
        setModalOpen(true);
        const modal = document.getElementById('certificate_modal');
        if (modal) {
            modal.showModal();
        }
    }, []);

    const closeModal = useCallback(() => {
        setModalOpen(false);
        const modal = document.getElementById('certificate_modal');
        if (modal) {
            modal.close();
        }
    }, []);

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

            <ParallaxText baseVelocity={-3}>
                <div className='flex '>
                    {certifications.map((certification) => (

                        <img
                            key={certification.id}
                            src={certification.image}
                            alt={certification.title}
                            style={{
                                width: '800px',
                                height: 'auto',
                                marginRight: '10px',
                                display: 'inline-block',
                                cursor: 'pointer', // Indicate it's clickable
                            }}
                            onClick={() => openCertificateModal(certification)} // Open modal on click
                            />
                    ))}
                </div>
            </ParallaxText>

            {/* Modal for displaying enlarged certificate image */}
            {modalContent && (
                <dialog id="certificate_modal" className={`modal ${modalOpen ? 'modal-open' : ''}`}>
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
                                        {/* Use Set to remove duplciate, and map each of techicons */}
                                        {modalContent.technologies && Array.from(new Set(modalContent.technologies)).map((tech, i) => (
                                            techIcons[tech] ? <span key={i}>{techIcons[tech]}</span> : null
                                        ))}
                                    </div>
                                    <a href={modalContent.verificationLink}
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