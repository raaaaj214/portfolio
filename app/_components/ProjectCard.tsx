import React from 'react'
import Image, { StaticImageData } from 'next/image'
import linkImage from '../../public/assets/external-link-svgrepo-com.svg'
import { link } from 'fs'
import Link from 'next/link'

const ProjectCard = ({img,title,description,link} : {img : StaticImageData,title : string ,description : string,link:string}) => {
  return (
    <div className='bg-tertiary flex flex-col justify-start items-start rounded-md p-4 gap-4 h-full'>
                <Image
                loading='eager'
                src={img} alt="project-1" 
                className='w-full'
                />
                <div className='flex justify-center items-center gap-4'>
                <h1 className='text-xl md:text-2xl font-bold text-text2'>{title}</h1>
                <Link href={link} passHref={true} target='_blank'>
                <Image src={linkImage} alt="link" width={20} height={20} className='cursor-pointer'/>
                </Link>
                </div>
                <p className='text-base text-text'>{description}</p>
              </div>
  )
}

export default ProjectCard