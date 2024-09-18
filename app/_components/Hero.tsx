'use client'
import React from 'react'
import Image from "next/image";
// import backgroundOverlay from "../public/assets/9158697.jpg"
import linkedinLogo from "../../public/assets/linkedin-161-svgrepo-com.svg"
import instagramLogo from "../../public/assets/instagram-svgrepo-com.svg"
import twitterLogo from "../../public/assets/icons8-twitterx-150.svg"
import githubLogo from "../../public/assets/github-142-svgrepo-com.svg"
import Link from "next/link";


function Hero() {
//     gsap.set(".heading .paragraph .logos", {
//         opacity : 0
//     })
    
// useGSAP(()=>{
//     const tl = gsap.timeline()


//     tl.from('.heading', {
//         opacity : 0,
//         y : 40,
//     }).from(".paragraph" , {
//         opacity : 0,
//         y : 40
//     } ).from(".logos" , {
//         opacity : 0,
//         stagger : 3
//     })
// })
  return (
    <section className=" hero w-full bg-fourth py-36 flex flex-col justify-center items-center px-2 relative">
      <div className="flex justify-center items-center flex-col gap-4 max-w-fit">
      <h1 className="heading text-primary text-5xl md:text-7xl lg:text-8xl font-bold text-center z-30">HI THERE, I'M <br/> RAJ DESHMUKH.</h1>
      <p className="paragraph text-base lg:text-xl font-normal w-4/5 text-center">Passionate web developer dedicated to crafting elegant and efficient digital solutions.</p>
      </div>
      <div className="logos flex justify-center items-center gap-6 w-full pt-8 ">
        <Link href="https://www.linkedin.com/in/raj-deshmukh-8a7657243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" passHref={true} className="z-40">
        <Image src={linkedinLogo} alt="linkedin" width={25} height={25} />
        </Link>
        <Link href="https://www.instagram.com/raaaa.aj_24?igsh=MzNlNGNkZWQ4Mg==" target="_blank" passHref={true} className="z-40">
        <Image src={instagramLogo} alt="instagram" width={25} height={25}/>
        </Link>
        <Link href="https://x.com/raaaaj214?t=tEwNSFMYYkW-y_933PdWEw&s=08" target="_blank" passHref={true} className="z-40">
        <Image src={twitterLogo} alt="instagram" width={25} height={25}/>
        </Link>    
        <Link href="https://github.com/raaaaj214" target="_blank" passHref={true} className="z-40">
        <Image src={githubLogo} alt="instagram" width={25} height={25}/>
        </Link>    
          </div>
      
      </section>
  )
}

export default Hero
