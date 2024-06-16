"use client"
import React, { useRef } from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from "react-icons/fa";
import RecentProjects from './RecentProjects'
import { socialMedia } from '@/data'

const Hero = () => {

  {/*const showMyGithub = () => {
    window.open("https://github.com/ddssamu3l", '_blank');
  }*/}

  const handleClick = (url: string | URL | undefined) => {
    window.open(url, '_blank');
  }

  return (
    <div className = "pb-20 pt-36">
        <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="white"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="white" />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.15] bg-grid-black/[0.1] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                {/*background*/}
            </p>
        </div>

        <div className = "flex justify-center relative my-20 z-10">
            <div className = "max-w-[89vw] md:max-w-2xl lg:max-2-[60vw] flex flex-col items-center justify-center">
                <h2 className = "tracking-widest text-xs text-center text-blue-100 max-w-80">
                    ddsamuel.com
                </h2>

                <TextGenerateEffect 
                    className = "text-center text-[40px] md:text-5xl lg:text-7xl" 
                    words = "Hi! My Name is Jingxi Deng"/>
                
                <p className = "text-center md:trackin-wider mb-4 text-sm md:text-lg lg: text-2xl">
                I&apos;m A Student From Vancouver Canada Aspiring To Be A Full-Stack Developer
                </p>

                <div className="flex items-center md:gap-3 gap-6 mt-5">
                  {socialMedia.map((info) => (
                    <div
                      key={info.id}
                      className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-white"
                      onClick={() => handleClick(info.url)}
                      >
                        <img src={info.img} alt="icons" width={20} height={20} />
                    </div>
                  ))}
                </div>

                <a href="#projects">
                  <MagicButton
                    title="Show my work"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero