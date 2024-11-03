import React from 'react'

const Project = ({title, description, image, icons}) => {


  const handleModal = () => {

    document.getElementById('my_modal_2').showModal()

  }
  return (
    <div>

    <div onClick={() => handleModal()} className="card border border-base-200 hover:border-base-300 transition bg-base-100 md:max-w-96 max-w-full  min-w-1/3 cursor-pointer ">
        <figure>
            <img
            src={image}
            alt="project" />
        </figure>
        <div className="card-body abel">
            <h2 className="card- teko text-3xl">{title}</h2>
            <p>{description}</p>
            <div className='flex gap-2 text-2xl'>
                {icons}
            </div>

        </div>
        
    </div>

    {/* <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click outside to close</p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog> */}

    </div>
    
  )
}

export default Project
