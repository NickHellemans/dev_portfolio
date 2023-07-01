import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn } from '../utils/motion';
import { Reveal } from './Reveal';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {

  return (
    <>

      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <motion.div className='relative w-full h-[230px]' whileHover={{ rotate: 3, scale: 1.1 }}>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <motion.div onClick={() => window.open(source_code_link, "_blank")} className='bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer' whileHover={{ scale: 1.5 }}>
              <img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />
            </motion.div>
          </div>
        </motion.div>

        <div className='mt-12'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <div className='mt-1 flex flex-wrap gap-2'>
            {tags.map((tag, index) => (
              <p key={tag.name} className={`text-[15px] text-[#915eff]`}>
                {index ? '- ' : ''}{tag.name}
              </p>
            ))}
          </div>
          <p className='mt-2 text-secondary text-[14px]'>{description} <a href={source_code_link} target='_blank' rel='noreferrer' className='text-[#915eff] font-bold text-[16px] hover:underline cursor-pointer'>Learn more &gt;</a></p>
        </div>

        </motion.div>
    </>

  )
}
const InnerWorks = () => {
  return (
    <>
      <Reveal width='100%'>

        <p className={styles.sectionSubText}>My work</p>
        <div className='flex items-center'>
          <h2 className={styles.sectionHeadText}>Projects<span className='text-highlight'>.</span></h2>
          <div className='w-full h-[1px] flex bg-highlight ml-5 items-center justify-center' />
        </div>

        <div className='w-full flex'>
          <p className='mt-3 text-secondary text-[17pz] max-w-3xl leading-[30px]'>
            Following selection of projects showcase my skills and experience through real-world examples of my work. Each project is briefly described
            with links to the code repositories if possible.
          </p>
        </div>
      </Reveal>

      {/* <Reveal width='full-width'> */}
        <div className='mt-20 flex flex-wrap justify-center gap-7'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      {/* </Reveal> */}
    </>
  )
}
const Works = SectionWrapper(InnerWorks, "projects");
export default Works;