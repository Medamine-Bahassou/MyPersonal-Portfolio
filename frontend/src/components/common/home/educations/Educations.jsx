// Education.js
import React, { useRef } from "react";
import Card from '../card/Card'; // Import the new Card component
import { IoMdSchool } from "react-icons/io";

const Education = () => {
    return (
        <div className=' '>
            <div className="flex flex-col items-center">
                <div className='text-6xl font-bold my-16  bebasnue '>
                    <div className='flex justify-center gap-4'>
                        <IoMdSchool />
                        Educations
                    </div>
                </div>
            </div>

            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);

    return (
         <section ref={targetRef} className="relative  flex justify-center ">
             <div className="flex flex-wrap  flex justify-center overflow-x-auto gap-8  py-6  w-full ">
                 {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
             </div>
         </section>
    );
};


export default Education;

const cards = [
    {
        url: "https://i.ytimg.com/vi/4FYLs4ZD5QI/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEAgWShyMA8=&rs=AOn4CLD9nbgC4nuD-4VwqBzKz94pPwKsCw",
        title: "FST Errachidia",
        description: "DEUST, MIP",
        id: 1,
    },
    {
        url: "https://fstt.ac.ma/Portail2023/wp-content/uploads/2023/04/%D8%B4%D8%B3.png",
        title: "FST Tanger",
        description: "Engineering, Softwares and Intelligent Systems",
        id: 2,
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx02mvmDQqv_5i1KK3VMwSPJPgiIimbRfKyw&s",
        title: "Lycée Abi Chouaib Doukali Sala Al jadida",
        description: "BAC, Physics",
        id: 3,
    },
];