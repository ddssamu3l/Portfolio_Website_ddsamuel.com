"use client";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {

    const handleClick = (url: string | URL | undefined) => {
        window.open(url, '_blank');
    }
  return (
    <footer className="sm:pt-64 pt-32 w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        
        <h1 className="heading sm:max-w-[60vw] max-w-[75vw] mb-10" style={{ textShadow: '2px 2px 3px rgba(0, 0, 0, 0.5)'}}>
          I&apos;m <span className="text-yellow-100">always rechable</span> with an email
        </h1>
       
        <a href="mailto:samueldeng78@gmail.com">
          <MagicButton
            title="Let's get in touch!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light flex flex-col">
          Copyright © 2024 Samuel Deng
          <a href="http://www.freepik.com">Background designed by Drawnhy97 / Freepik</a>
        </p>

       

        <div className="flex items-center md:gap-3 gap-6 mt-5">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-transparent rounded-lg border border-white hover:shadow-[0_8px_16px_rgb(0_0_0/1)]"
              onClick={() => handleClick(info.url)}
              >
                <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;