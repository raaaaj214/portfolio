'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import ArrowHover from "../../public/assets/arrow-up-right-svgrepo-com.svg"
import Arrow from "../../public/assets/arrow-up-right-svgrepo-com (1).svg"
import Link from 'next/link'

function Button() {
    const [hover , setHover] = useState(false)
  return (
    <a href="#contact-me" className='scroll-smooth'>
    <button  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='flex justify-center items-center gap-2 font-bold text-text bg-primary px-4 py-2 rounded-full hover:bg-text hover:text-primary hover:shadow-md transition-all'>Contact
        <Image loading='eager' src={hover === true ? ArrowHover : Arrow} alt='' width={20} height={20}/>
      </button>
      </a>
  )
}

export default Button
