"use client";
import React, { useRef } from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from "react-icons/fa";
import RecentProjects from './RecentProjects';
import { socialMedia } from '@/data/index';

const Hero = () => {

  {/*const showMyGithub = () => {
    window.open("https://github.com/ddssamu3l", '_blank');
  }*/}

  const handleClick = (url: string | URL | undefined) => {
    window.open(url, '_blank');
  }

  return (
    <div className="pb-36 pt-20">
        <div className="flex justify-center relative z-10 w-full h-full">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col items-center justify-center">
            <TextGenerateEffect className="tracking-widest text-xs text-center text-blue-100 max-w-80 leading-tight"
                words="ddsamuel.com" />

            <TextGenerateEffect 
                className="-mt-4 font-bold text-center text-6xl lg:text-9xl tracking-tight leading-tight" 
                words="Hi! My Name Is Jingxi Deng"/>
              
            <TextGenerateEffect className="mt-4 sm:max-w-[540px] max-w-[75vw] text-center md:tracking-wider leading-normal mb-4 text-sm md:text-md tracking-tight"
              words="I&apos;m A CS Student Aspiring To Be A Full-Stack Developer. My passion is building responsive applications with fluid interactive animations!" />

            <div className="flex items-center gap-3">
              {socialMedia.map((info) => (
                <div
                  key={info.id}
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-transparent rounded-lg border border-white hover:shadow-[0_8px_16px_rgb(0_0_0/1)]"
                  onClick={() => handleClick(info.url)}
                  >
                    <img src={info.img} alt="icons" width={20} height={20} />
                </div>
              ))}
            </div>

            <a className="mt-8 md:pt-0" href="#projects">
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

export default Hero;
