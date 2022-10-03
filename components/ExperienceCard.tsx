import React from 'react'
import {motion} from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'
type Props = {
    experience: Experience
}

const ExperienceCard = ({experience}: Props) => {
    return (
        <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] lg:w-[900px] snap-center bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity overflow-auto'>
            <motion.img
                initial={{ opacity: 1, y: -100 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 pt-5 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src={urlFor(experience.companyImage).url()} alt={experience.company }>
            </motion.img>
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>{ experience.jobTitle}</h4>
                <p className='font-bold text-2xl mt-1'>{experience.company }</p>
                <div className='flex space-x-2 my-2'>
                    {/* <img className='h-10 w-10 rounded-full' src="./javascript.png" alt="javascript" />
                    <img className='h-10 w-10 rounded-full' src="./javascript.png" alt="javascript" /> */}
                    {
                        experience.technologies.map((tech,i) => (<img key={i} className='h-10 w-10 rounded-full' src={urlFor(tech.image).url()} alt={tech.title} />
                    ))
                    }
                    {/* tech used */}
                    {/* tech used */}
                     {/* tech used */}
                </div>
                <p className='uppercase py-5 text-gray-500'>{new Date(experience.dateStarted).toDateString()} - { experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}</p>
                <ul className='list-disc space-y-4 ml-5 text-lg h-[500px]'>
                    {
                        experience.points.map((point,i) => (<li key={i}>{point }</li>))
                    }
                </ul>
            </div>
        </article>
  )
}

export default ExperienceCard