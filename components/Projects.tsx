import React from 'react'
import {motion} from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'
import Link from 'next/link'
type Props = {
    projects: Project[]
}

const Projects = ({ projects }: Props) => {
    // const projects = [1, 2, 3, 4, 5];
  return (
      <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
          <h3 className='w-full absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl text-center'>
              Projects
          </h3>
          <div className='absolute top-32 mt-12 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FCAB0A]/80'>
              {
                  projects.map((project,i) => {
                      return (
                        <div key={i}  
                        className='absoulte top-40 w-screen flex-shrink-0 snap-center flex flex-col space-y-5  h-screen items-center'>
                              <motion.img
                                //   initial={{
                                //       y: -300,
                                //       opacity:0
                                //   }}
                                //   transition={{ duration: 1.5 }}
                                //   viewport={{ once: true }}
                                //   whileInView={{ opacity: 1, y:100}}
                                  className="w-[400px] h-[200px]"
                                  src={ urlFor(project.image).url()} alt="project" />
                              <div className='space-y-10 px-0 md:px-10 max-w-6xl mx-auto text-left md:text-center'>
                                  <h4 className='underline decoration-[yellow]'>
                                      <span className='underline decoration-[#FCAB0A]/40'>
                                          Case study {i+1} of {projects.length}:
                                      </span>{" "}
                                      {project.title}
                                  </h4>
                                  <div className='flex flex-row items-center justify-center'>
                                      {project?.technologies.map((tech,i) => (
                                          <img key={i} src={urlFor(tech.image).url()}
                                              alt={tech.title} className="h-12 w-12 rounded-full mx-2"/>
                                        ))
                                      }
                                    </div>
                                  <p className='text-lg text-center md:text-left'>{project.summary}</p>
                              </div>
                        </div>
                      )
                  })
              }
          </div>
          <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12'></div>
    </div>
  )
}

export default Projects