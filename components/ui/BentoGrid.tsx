'use client'
import Lottie from "react-lottie";
import { useState } from "react";
import { IoCheckmark, IoCopyOutline } from "react-icons/io5";


import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import animationData from "@/data/confetti.json"
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
    className={cn(
        "grid grid-cols-1 grid-row-4 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto max-w-[70vw]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const[copied, setCopied] = useState(false);
  
  const handelCopy = () =>{
    navigator.clipboard.writeText(`samueldeng78@gmail.com`);
    setCopied(true);
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:border-white/[0.1] border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "#020201",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      
      <div className = {`${id === 6 && 
        'flex justify-center'} h-full`}>
            <div className = "w-full h-full absolute">
                {img && (
                    <img src={img}
                    alt={img}
                    className={cn(imgClassName, 'object-cover, object-center')}
                    />
                )}
            </div>
            <div className={`absolute right-0 -bottom-5 ${id===5 && `w-full opacity-80`}`}>
                {spareImg && (
                    <img src={spareImg}
                    alt={spareImg}
                    className={'object-cover, object-center w-28 h-28'}
                    />
                )}
            </div>
            {id===6 && (
                <BackgroundGradientAnimation
                    gradientBackgroundStart = "#030303"
                    gradientBackgroundEnd = "#020202"
                    thirdColor = "250, 201, 5"
                    fourthColor = "245, 120, 2"
                    fifthColor = "250, 221, 2"
                    pointerColor = "10, 67, 191"
                />
            )}

            <div className={cn(
                titleClassName, 'relative md:h-full min-h-49 flex flex-col px-5 p-5 lg:p-10'
            )}>
                <div className="font-sans font-extralight text-{#C1C2D3} text-sm md:text-xs lg:text-base z-10">
                    {description}
                </div>
                <div className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10">
                    {title}
                </div>
        
            {id === 2 && <GlobeDemo />}

            {id === 3 && (
              <img 
                src="/usf.png" 
                alt="usf" 
                className="mt-4 h-24"
              />
            )}

            {id === 6 && (
                <div className = "relative sm:pt-0 pt-6">
                    <div className = {`absolute -bottom-5 right-0`}>
                        <Lottie options = {{
                            loop: copied, 
                            autoplay: copied,
                            animationData,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }
                        }} />
                    </div>

                    <MagicButton
                        title = {copied ? 'Email Copied!' : "Copy Email"}
                        icon = {copied ? <IoCheckmark/> : <IoCopyOutline />}
                        position = "right"
                        handleClick = {handelCopy}
                        />
                </div>
            )}
            </div>
        </div>
    </div>
  );
};