import React from 'react'

const SkillType = ({image, title}) => {
  return (
        
          <div className=' border  border-base-200 hover:border-base-300 hover:cursor-pointer    md:w-[200px] md:h-[200px] w-[100px] h-[100px] flex flex-col items-start justify-center gap-3 bg-base-100   transition'>
            <div className=' h-2/3 w-full overflow-hidden   '>
              <img src={image} className='h-full w-full object-contain  '/>
            </div>
            <div className='text-xl  font-extrabold w-full text-center teko '>
              {title}
            </div>
          </div>
    )
}

export default SkillType
