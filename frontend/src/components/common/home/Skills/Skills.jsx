import React from 'react'
import SkillType from './Skill';
import '../../../../App.css'

const Skills = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='text-6xl font-bold   my-16  bebasnue '>
            Skills 
        </div>
        <div className='  '>
            <div className='flex flex-wrap gap-3 w-full justify-center items-center'>
              <SkillType
                image={"https://static-00.iconduck.com/assets.00/html-5-icon-224x256-1b5ud2sy.png"}
                title={"HTML"}
              />

              <SkillType
                image={"https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png"}
                title={"CSS"}
              />
              <SkillType
                image={"https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png"}
                title={"JavaScript"}
              />  
              <SkillType
                image={"https://cdn-icons-png.flaticon.com/512/6132/6132222.png"}
                title={"C/C++"}
              />  
              <SkillType
                image={"https://cdn-icons-png.flaticon.com/512/226/226777.png"}
                title={"Java"}
              />  
              <SkillType
                image={"https://cdn-icons-png.flaticon.com/512/5968/5968332.png"}
                title={"PHP"}
              />  
              <SkillType
                image={"https://cdn-icons-png.flaticon.com/512/6132/6132221.png"}
                title={"C#"}
              />  
              <SkillType
                image={"https://cdn-icons-png.flaticon.com/512/5969/5969346.png"}
                title={"Unity"}
              />  
              <SkillType
                image={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Qt_logo_2016.svg/1024px-Qt_logo_2016.svg.png"}
                title={"Qt"}
              />  
              <SkillType
                image={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/1200px-Matlab_Logo.png"}
                title={"MATLAB"}
              />  
              <SkillType
                image={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"}
                title={"Python"}
              />  
              <SkillType
                image={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"}
                title={"Git/GitHub"}
              />  
              <SkillType
                image={"https://static-00.iconduck.com/assets.00/symfony-icon-512x512-g7hivt0k.png"}
                title={"Samphony"}
              />  
              <SkillType
                image={"https://enzofilangi.fr/en/assets/images/programming-logos/UML.png"}
                title={"UML"}
              />  
              <SkillType
                image={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"}
                title={"React"}
              />  
                
              
            </div>



        </div>
        
    </div>
  )
}

export default Skills
