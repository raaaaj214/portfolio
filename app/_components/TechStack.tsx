import React from 'react'
import BoxWrapper from './BoxWrapper'

function TechStack() {
  const frontEndSkills = ['HTML' , 'CSS' , 'Tailwind' , 'JavaScript' , 'Typescript' , 'React Js' , 'Next Js']
  const backEndSkills = ['Node Js' , 'Express Js' , 'MonogoDB',"Postgres  "]
  return (
    <div className='flex flex-col justify-center items-center lg:flex-row min-h-screen bg-primary  w-full gap-12 py-8 lg:px-16 px-4'>
      <div className='flex flex-col gap-8 justify-center items-start lg:w-full'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl w-3/5 text-text font-bold'>What I know.</h1>
        <p className='text-lg/7 lg:text-xl text-text '>I&apos;m a full-stack developer with expertise in crafting intuitive user interfaces and seamless user experiences. Proficient in HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js and MongoDB, ensuring robust back-end solutions.</p>
      </div>
      <div className='flex flex-col gap-6 justify-center items-start w-full md:flex-row lg:flex-col lg:gap-8'>
      <BoxWrapper arr={frontEndSkills} heading="Frontend"/>
      <BoxWrapper arr={backEndSkills} heading='Backend'/>
      </div>
    </div>
  )
}

export default TechStack
