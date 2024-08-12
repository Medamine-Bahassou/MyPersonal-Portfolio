import React from 'react'

const SkillType = ({image, title}) => {
  return (
        
          <div className='rounded-sm shadow-md md:w-[200px] md:h-[200px] w-[100px] h-[100px] flex flex-col items-start justify-center gap-3 bg-base-100 hover:bg-base-300 transition'>
            <div className=' h-2/3 w-full overflow-hidden'>
              <img src={image} className='h-full w-full object-contain'/>
            </div>
            <div className='text-xl  font-extrabold w-full text-center teko '>
              {title}
            </div>
          </div>
    )
}

export default SkillType