import React from 'react'
import photo from "../../../assets/logo/catman.png"

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center'>

        <div className='w-1/2 border-t-2 border-base-300 mx-6 px-6'> </div>

                  <div className='grid grid-cols-2 gap-4 py-8 '>
      
                      <span className={`relative flex h-full`}>
          
                          <img
                              src={photo}
                              className="object-center rounded-3xl shadow shadow-2xl  border border-base-200 hover:border-base-300 " 
                          />
                              
                      </span>
      
                      <div className='flex flex-col justify-between'>
      
                      
                          <div className='flex ' align="center">
      
                              <img className='select-none' src="https://github-readme-stats.vercel.app/api?username=medamine-bahassou&show_icons=true&theme=dark&border_radius=20&hide_border=true&card_width=500px&rank_icon=github" />
      
                          </div>
      
      
                          <div className=''  align="center">
      
                              <img className='select-none' src="https://leetcard.jacoblin.cool/medamine-bahassou?border=0&radius=20" />
      
                          </div>
      
                      </div>
                  </div>
                  <div className='w-1/2 border-t-2 border-base-300 mx-6 px-6'> </div>
      
    </div>
  )
}

export default Footer
