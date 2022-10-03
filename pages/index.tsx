import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import styles from '../styles/Home.module.css'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'
type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  socials: Social[];
};
const Home = ({pageInfo, skills, experiences, projects, socials}:Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#FCAB0A]/80'>
      <Head>
        <title>Mani's Portfolio</title>
      </Head>
        <Header socials ={socials } />
      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero pageInfo={ pageInfo} />
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>
      {/* Experiences */}
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={ experiences} />
      </section>
      {/* Skills */}
      <section id='skills' className='snap-center'>
        <Skills skills={ skills} />
      </section>
      {/* Projects */}
      <section id='projects' className='snap-center'>
        <Projects projects={ projects} />
      </section>
      {/* Contact Me */}
      <section id='contact' className='snap-center'>
        <ContactMe/>
      </section>
    </div>
  )
}

export default Home;
export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  console.log(pageInfo)
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    }
  };
};