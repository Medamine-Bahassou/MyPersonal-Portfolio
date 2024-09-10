import React from 'react'
import map from "../../../assets/map.jpg"

const Test = () => {
  return (
    <div>
        <div 
        className="min-h-screen flex justify-center items-center bg-cover bg-center  "
        style={{
            backgroundImage: `url(${map})`,
        }}
        >
            <div className='w-[800px] h-[500px] rounded-md bg-white drop-shadow-2xl'>
            
         </div>
      </div>
    </div>
  )
}

export default Test
