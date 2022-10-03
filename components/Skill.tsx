import React from 'react'
import {motion} from 'framer-motion'
import { Skill } from '../typings'
import { urlFor } from '../sanity'
type Props = {
    directionLeft?: boolean,
    skill: Skill
}

const Skill = ({ directionLeft,skill}: Props) => {
  return (
      <div className='group relative flex cursor-pointer'>
          <motion.img
              initial={{
                  x: directionLeft ? -200 : 200,
                  opacity: 0
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale-0 transition duration-300 ease-in-out"
              src={urlFor(skill.image).url()} />
          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0'>
              <div className='flex h-full items-center justify-center'>
                  <p className='text-3xl font-bold text-black opacity-100'><span>{skill.progress+"%"}</span></p>
              </div>
          </div>
    </div>
  )
}

export default Skill