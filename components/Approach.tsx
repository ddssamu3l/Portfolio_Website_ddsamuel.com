"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className = "w-full py-20">
        <h1 className = "heading">
            My <span className = "text-yellow-100">approach</span>
        </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card 
            title="My Brainstorming Process" 
            icon={<AceternityIcon order = "Step 1"/>} 
            description = "I'll try to set up a virtual or in-person meeting to discuss and map out your goals, intended audience and key functionalities you find most important. I'll discuss things like site structure, navigation structure, ideal UI/UX designs and the content you want to put on your site."
            >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-white"
            colors={[[180,180,180]]}
            dotSize={2}
          />
        </Card>
        <Card 
            title="Development Process & Updates" 
            icon={<AceternityIcon order = "Step 2"/>}
            description = "Once we decide on a plan we're happy with, I'll head home, fire up my PC, and start jump right into the technical nitty gritty on my dual-monitor ultrawide setup. Of course, I'll keep you updated on every step of the process such as including screenshots of our work-in-progress stage as well as a short message on what I'm currently trying to implement."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-white"
            colors={[[180,180,180]]}
            dotSize={2}
          />
          
        </Card>
        <Card 
            title="Development & Launch" 
            icon={<AceternityIcon order = "Step 3"/>}
            description = "Once we've reached a satisfactory prototype, I'll chose an appropreate method/service to launch our website!"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-white"
            colors={[[180,180,180]]}
            dotSize={2}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-md"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-black-100 text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black-100 mt-4 font-bold group-hover/canvas-card:text-black group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
          {title}
        </h2>
        <h2 className="dark:text-black-100 text-md opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black-100 mt-4 font-bold group-hover/canvas-card:text-black group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{color:'#000000'}}>
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}: {order: string}) => {
  return (
   <div>
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f7c602_0%,#5d6bfc_50%,#f7c602_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 lg:font-bold font-medium text-white backdrop-blur-3xl lg:text-2xl text-xl">
            {order}
        </span>
    </button>
   </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default Approach