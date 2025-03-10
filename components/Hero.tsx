import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <div>
          <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'/>
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
          <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"/>
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      </div>
      <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent  bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      </div>
      </div>
    </div>
    <div className='flex justify-center relative my-20 z-10 '>
      <div className='max-w-[89vw]md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center '>
        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 '>
          Dynamic magic with Web Dev
        </h2>

      </div>

    </div>
  </div>
    )
}

export default Hero