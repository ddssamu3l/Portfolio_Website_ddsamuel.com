import React from 'react'
import { AnimatedTooltip } from './ui/AnimatedTooltip'
import {techStack} from '@/data/index'


const TechStack = () => {
  return (
    <section className = "py-16">
        <h1 className = "heading py-20">
            My <span className = "text-yellow-100">Tech Stack</span>
        </h1>

        <div className="flex flex-row flex-wrap items-center justify-center mb-10">
            <AnimatedTooltip items={techStack} />
        </div>
    </section>
  )
}

export default TechStack