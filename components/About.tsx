import React from 'react'
import {motion} from 'framer-motion'
import { PageInfo } from '../typings'
type Props = {
    pageInfo: PageInfo
}

const About = ({ pageInfo}: Props) => {
  return (
      <div className='flex flex-col relative h-screen text-center items-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto'>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
              About
          </h3>
          <motion.img
              initial={{
                  x: -200,
                  opacity: 0
              }}
              transition={{
                  duration:1.2
              }}
              whileInView={{
                  opacity: 1,
                  x: 0
              }}
              viewport={{
                  once: true
              }}
              src='./profile_photo.jpg'
              className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg my-2 mx-5
              md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]
          "/>
          <div className='space-y-10 px-0 md:px-0'>
              <h4 className='text-4xl px-2 font-semibold'>
                  Here is a {" "}
                  <span className='underline decoration-[#F7AB0A]/50'>little</span>
                  { " "}background
              </h4>
              <p className='text-sm'>
                  { pageInfo?.backgroundInformation}
              </p>
              
          </div>
          
      </div>
  )
}

export default About