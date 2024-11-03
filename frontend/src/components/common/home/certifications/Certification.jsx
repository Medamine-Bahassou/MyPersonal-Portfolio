import React from 'react'

const Certification = ({image, title, text, icons}) => {
  return (
    

        
        <div className='grid  md:grid-cols-3 md:grid-rows-1 grid-rows-1 gap-4 w-full border border-base-200 transition card p-4 hover:border-base-300 hover:cursor-pointer'>

            <div className=' md:w-full h-[220px] bg-slate-400 rounded-md overflow-hidden md:col-span-1 justify-center '>
                <img src={image} className='object-cover hover:scale-105 transition ease-in-out w-full h-full'/>
            </div>
            {/* <div className='w-full h-[500px]'>
                <div className="flex flex-col gap-4 w-full">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </div> */}

            <div className=' md:col-span-2 '>
                <div className='text-2xl font-bold teko '>
                    {title}
                </div>
                <div className='text-xl abel'>
                    {text}
                </div>
                <div className='flex gap-3 my-3 text-3xl'>
                    {icons}
                </div>
            </div>

        </div>
  )
}

export default Certification
