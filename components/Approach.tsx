"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className = "justify-center sm:pt-48 pt-24">
        <h1 className = "heading" style={{ textShadow: '2px 2px 3px rgba(0, 0, 0, 0.2)'}}>
            My <span className = "text-yellow-100">approach</span> to workflow
        </h1>

        <p className = "mt-5 text-center sm:text-xl text-md" style={{ textShadow: '2px 2px 3px rgba(0, 0, 0, 0.15)'}}> Try hovering your mouse over the cards</p>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card 
            title="My Brainstorming Process" 
            icon={<AceternityIcon order = "Step 1"/>} 
            description = "Understanding the context of the customer is the most crucial consideration when designing a concept. I will lay out a list of practical requirements that align most with actual customer needs while thinking from their perspectives. Visualizing ideas is also one of my key brainstorming processes. When working with clients or team members, I will always try to set up a virtual or in-person meeting with either a sketch or a mockup to communicate my ideas effectively. "
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
            description = "I will always provide my group members and customers with the most up-to-date information reguarding the latest developement insignt. I do this because prioritizing the sharing of information between team members and the customer have always netted greater output than maximizing the amount of code written by each individual programmer. What is important to me is minimizing confusion and errors, because it is the most efficient development process."
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
            description = "Once the hard work is over, and the time is appropreate, the product that my team and I have worked on with passion will be launched into live servers! Horray!"
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
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] bg-transparent max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] h-[20rem] rounded-md"
    > 
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-15 backdrop-filter backdrop-blur-lg z-[-1]" />
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
        <h2 className="dark:text-black-100 opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black-100 mt-4 font-bold group-hover/canvas-card:text-black group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
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
    <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#92b2e6_0%,#5d6bfc_50%,#FFFFFF_100%)] rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-semibold hover:bg-transparent">
            {order}
        </div>
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