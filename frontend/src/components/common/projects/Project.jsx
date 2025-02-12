import React from 'react';

const Project = ({ title, description, image, icons, onClick }) => {
    return (
        <div
            className="relative group card border border-base-200 bg-base-100 md:max-w-96 max-w-full min-w-1/3 overflow-hidden"
        >
            <figure className="relative overflow-hidden">
                <img
                    src={image}
                    alt="project"
                    className="transition-transform transform scale-100 group-hover:scale-110 duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>
            </figure>
            <div className="card-body abel relative overflow-hidden">
                <h2 className="card-title teko text-3xl relative z-10">{title}</h2>
                <p className="relative z-10 max-h-60 overflow-hidden">{description.slice(0,400)}...</p>
                <div className="flex gap-2 text-2xl relative z-10">
                   {icons}
                </div>
               <div className="absolute inset-0 bg-gradient-to-t from-transparent to-base-200 opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
            </div>
          <div className='card-actions justify-end p-4'>
             <button onClick={onClick} className="btn btn-sm btn-primary">View Project</button>
          </div>
        </div>
    );
};

export default Project;