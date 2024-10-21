import React from 'react'
import Image from 'next/image'
import img1 from "../../public/assets/onboard1.png"
import img2 from "../../public/assets/taskManager.png"
import img3 from "../../public/assets/fileUpload.png"
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col justify-start items-start lg:flex-row min-h-screen bg-sceondary  w-full gap-12 py-24 lg:px-16 px-4'>
      <div className='flex flex-col gap-16 justify-start items-start lg:w-full'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl w-3/5 text-text font-bold'> <span className='text-gray-200 opacity-20'>RECENT </span><br></br>PROJECTS</h1>
          <div className='h-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center'>
              <ProjectCard img={img1} title='Job Boarding Application' description='Developed a job Seeking application that allows employers to post job listings and job seekers to browse, search, and apply for positions. Implemented features such as user authentication, role-based dashboards, job filtering, etc. Ensured a responsive UI and optimized backend performance to enhance user experience.' link='https://github.com/raaaaj214/Job-board-appliation-frontend'/>
              <ProjectCard img={img2} title='Task Manager' description='Built a task manager that allows users to create, update, and delete tasks. Implemented features like task prioritization, deadlines, and status tracking. Designed a user-friendly interface to enhance productivity and ensure seamless task management across devices.'
              link='https://github.com/raaaaj214/task-manager'
              />
              <ProjectCard img={img3} title='File Upload Application' description='Built a robust file upload application that allows users to upload, store, and share files seamlessly. It supports cloud storage integration to handle files efficiently and provides a user-friendly interface for managing uploads. The application ensures secure sharing through generated links, making it ideal for collaboration and easy access.'
              link='https://github.com/raaaaj214/File-Upload-Application'
              />
              
              
              
          </div>
      </div>
    </div>
  )
}

export default Projects