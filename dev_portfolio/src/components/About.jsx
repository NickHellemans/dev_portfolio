import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style'
import { services } from '../constants/index'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';
import { degrees } from '../constants';
import { ExperienceV2, Education } from '../components';

import { Tab } from '@headlessui/react'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className='xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>

      {/* <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'> */}
      <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
      {/* </motion.div> */}
    </div>

  )
}


const InnerAbout = () => {

  const [toggleExperience, setToggleExperience] = useState(true);
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      {/* <motion.div  variants={textVariant()}> */}

      <p className={styles.sectionSubText}>Introduction</p>
      <div className='flex items-center'>
        <h2 className={styles.sectionHeadText}>About<span className='text-[#915eff]'>.</span></h2>
        <div className='w-full h-[1px] flex bg-[#915eff] ml-5 items-center justify-center' />
      </div>
      {/* <hr className='border-[#915eff]'/> */}
      {/* </motion.div> */}
      {/* <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'> */}
      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I&apos;m a skilled software developer with experience in C, C++, ... . Eager to learn. Check out my projects to see what I have worked on!
      </p>
      {/* </motion.p> */}
      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {
        toggleExperience ? <ExperienceV2 /> : <Education />
      }

<div className='flex justify-center'>
        <Tab.Group>
          <Tab.List className="w-3/4 flex space-x-1 rounded-xl bg-tertiary p-1 green-pink-gradient">
            <Tab
              onClick={() => setToggleExperience(true)}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white ',
                  'focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-tertiary shadow'
                    : 'hover:bg-violet-400 hover:text-white'
                )
              }
            >
              Experience
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                  'focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-tertiary shadow'
                    : 'hover:bg-violet-400 hover:text-white'
                )
              }
              onClick={() => setToggleExperience(false)}
            >
              Education
            </Tab>

          </Tab.List>
        </Tab.Group>
      </div>

    </>
  )
}

const About = SectionWrapper(InnerAbout, "about")

export default About