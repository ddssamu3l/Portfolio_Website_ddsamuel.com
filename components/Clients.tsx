import React from 'react'
import { InfiniteMovingCards } from './ui/Infinite-Moving-Cards'
import {companies, testimonials} from "@/data"

const Clients = () => {
  return (
    <div className = "sm:pt-48 pt-24" id = "testimonials" style={{ textShadow: '2px 2px 3px rgba(0, 0, 0, 0.2)'}}>
        <h1 className = "heading">
            Reviews from  {' '}
            <span className = "text-yellow-100">past collaborators</span>
        </h1>

        <div className = "sm:pt-24 pt-12 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards 
                items = {testimonials}
                direction = "right"
                speed = "slow"
                pauseOnHover = {false}
            />
        </div>
    </div>
  )
}

export default Clients