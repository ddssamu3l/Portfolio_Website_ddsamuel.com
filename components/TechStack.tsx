import React from 'react'
import { AnimatedTooltip } from './ui/AnimatedTooltip'
import {techStack} from '@/data/index'


const TechStack = () => {
  return (
    <section className="sm:pt-48 pt-24 flex flex-col items-center justify-center">
      <h1 className="tracking-tight font-bold text-5xl sm:text-7xl text-center" style={{ textShadow: '2px 2px 3px rgba(0, 0, 0, 0.2)'}}>
        My <span className="text-yellow-100">Tech Stack</span>
      </h1>

      <div className="pt-24 flex items-center justify-center w-full">
        <div className="ml-4 max-w-[80%]">
          <AnimatedTooltip items={techStack} />
        </div>
      </div>
    </section>
  )
}

export default TechStack