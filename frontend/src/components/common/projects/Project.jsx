import React from 'react'

const Project = ({title, description, image, icons}) => {
  return (
    <div className="card bg-base-100 md:max-w-96 max-w-full shadow-xl min-w-1/3 ">
        <div className="card-body abel">
            <h2 className="card- teko text-3xl">{title}</h2>
            <p>{description}</p>
            <div className='flex gap-2 text-2xl'>
                {icons}
            </div>

        </div>
        <figure>
            <img
            src={image}
            alt="project" />
        </figure>
    </div>
  )
}

export default Project
