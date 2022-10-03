import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'
type Props = {
    experiences: Experience[]
}

const WorkExperience = ({experiences}: Props) => {
  return (
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{duration:1.2}}
          className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify evenly mx-auto items-center'>
          <h3 className='w-full absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center'>
              Experience
          </h3>
          <div className=' absolute top-28 h-[600px] w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FCAB0A]/80'>
              {/* ExperienceCard */}
              {
                  experiences.map((experience) =><ExperienceCard key={experience._id} experience={ experience} />)
              }
              {/* ExperienceCard */}
              {/* ExperienceCard */}
          </div>
      </motion.div>
  )
}

export default WorkExperience