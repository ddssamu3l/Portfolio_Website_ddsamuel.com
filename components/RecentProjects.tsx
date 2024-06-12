import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'

const RecentProjects = () => {
  return (
    <div className = "py-20" id = "projects">
      <h1 className = "heading">
        Here's some of my {' '}
        <span className = "text-yellow-100">recent projects</span>
      </h1>

      <div className = "flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({id, title, des, img, iconLists, link}) => (
          <div key = {id} className = "sm:h-[35rem] h-[32rem] lg:min-h[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
            <PinContainer title = {link}  href = {link}>
              <div className = "relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[45vw] h-[20vw] lg:h-[25vh] mb-10">
                <div className = "relative w-full h-full overflow-hidden lg:rounded-3xl bg-grey-dark">
                  <img src = "/bg.png" alt = "bg-img"/>
                </div>
                <img src = {img}  alt = {title} className = "z-10 absolute bottom-0" style={{width:'80%', height:'auto'}}/>
              </div>
              <h1 className = "font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className = "lg:text-xl lg:font-normal font-light text-xm line-clamp-2">
                {des}
              </p>

              <div className = "flex items-center justify-between mt-7 mb-3">
                <div className = "flex items-center">
                  {iconLists.map((icon) =>(
                    <div key = {icon}> 
                      <img src = {icon} alt = {icon} className = "p-2" style={{ width: '50px', height: '50px'}}/>
                    </div>
                  ))}
                </div>

              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects