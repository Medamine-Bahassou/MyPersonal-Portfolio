import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Education = () => {
  return (
    <div className='  '>
      <div className="flex flex-col items-center">
        <div className='text-6xl font-bold my-16  bebasnue '>
            Educations 
        </div>
      </div>  

      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-base-200">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute bottom-0 w-full z-10 ">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
          <p className="text-sm">
            {card.description}
          </p>
        </p>
        
      </div>
    </div>
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
    description: "Engeneering, Softwares and Intelligent Systems",
    id: 2,
  }, 
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx02mvmDQqv_5i1KK3VMwSPJPgiIimbRfKyw&s",
    title: "Lycée Abi Chouaib Doukali Sala Al jadida",
    description: "BAC, Physics",
    id: 3,
  }, 
 
];