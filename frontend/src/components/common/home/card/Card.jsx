// Card.js
import React from 'react';

const Card = ({ card }) => {
    return (
         <div
            key={card.id}
             className="group relative h-[500px] w-[400px] overflow-hidden bg-base-200 shadow-lg rounded-md border border-base-300 transition-all duration-300 hover:shadow-xl flex-none"

        >
           <div
                style={{
                  backgroundImage: `url(${card.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                 }}
               className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-md"

          ></div>
           <div className="absolute bottom-0 w-full z-10 p-6 flex flex-col">
                <div  className="  backdrop-blur-sm  p-4 rounded-md ">
                      <h2 className="text-2xl  font-bold text-white  mb-2 teko">
                          {card.title}
                      </h2>
                     <p className="text-sm  text-white/80  abel  ">
                          {card.description}
                     </p>
               </div>
             </div>
        </div>
    );
};

export default Card;