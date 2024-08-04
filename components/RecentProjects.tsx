import { projects } from '@/data/index'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div id = "projects">
      <div className="sm:pt-32 pt-16 flex justify-center">
        <h1 className = "flex flex-col justify-center items-center text-center heading w-4/5" style={{ textShadow: '2px 2px 3px rgba(0, 0, 0, 0.5)'}}>
          Here are some of my {' '}
          <span className = "text-yellow-100">recent projects </span>
        </h1>
      </div>
      

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 sm:gap-y-8 sm:mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className="sm:h-[35rem] h-[28.5rem] lg:min-h[32.5rem] flex items-center justify-center sm:w-[570px] w-[75vw]">
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[300px] overflow-hidden sm:h-[45vw] h-[40vw] lg:h-[300px] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-grey-dark">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" style={{ width: '80%', height: 'auto' }} />
              </div>
              <h1 className="mb-2 font-bold lg:text-2xl md:text-xl text-base line-clamp-1" style={{ textShadow: '2px 2px 3px rgba(0, 0, 0, 0.5)' }}>
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-xm line-clamp-2" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon) => (
                    <div key={icon}>
                      <img src={icon} alt={icon} className="p-2" style={{ width: '50px', height: '50px' }} />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm font-semibold text-yellow-100">
                    Live Demo
                  </p>
                  <FaLocationArrow className="ms-3" color="FFFFFF" />
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