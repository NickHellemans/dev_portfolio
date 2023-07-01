import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';
import { socials, resume, services } from '../constants';
import { ExperienceV2, Education } from '../components';

import { Tab } from '@headlessui/react'
import Socials from './Socials';
import { Reveal } from './Reveal';

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
      <Reveal width='full-width'>
        <p className={styles.sectionSubText}>Introduction</p>
        <div className='flex sm:flex-wrap md:flex-nowrap flex-wrap items-center'>
          <h2 className={styles.sectionHeadText}>About<span className='text-[#915eff]'>.</span></h2>
          <div className='w-full h-[0px] sm:h-[0px] md:h-[1px] flex bg-[#915eff] ml-5 items-center justify-center' />
          <div className='ml-2 flex justify-between items-between gap-2'>
            <Socials />
          </div>
        </div>
        {/* <hr className='border-[#915eff]'/> */}
        {/* </motion.div> */}
        {/* <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'> */}
        <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          I&apos;m a skilled software developer with experience in C, C++, ... . Eager to learn. Check out my projects to see what I have worked on!
        </p>
        <div className='mt-8 mb-1 flex justify-center items-center'>
          <a href={resume} download='nick-hellemans_dev-resume' target='_blank' rel='noreferrer' className='w-auto flex justify-center items-center'>
            <button className="bg-gray-300 hover:bg-tertiary text-gray-700 font-bold hover:text-white py-2 px-4 rounded inline-flex justify-center items-center">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
              <span>Resume</span>
            </button>
          </a>
        </div>
      </Reveal>
      <Reveal width='full-width'>
        {/* </motion.p> */}
        <div className='mt-20 flex flex-wrap justify-center gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </Reveal>
      <Reveal width='full-width'>

        {
          toggleExperience ? <ExperienceV2 /> : <Education />
        }

      </Reveal>
      <Reveal width='full-width'>

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
                      : 'hover:bg-pink-300 hover:text-white'
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
                      : 'hover:bg-pink-300 hover:text-white'
                  )
                }
                onClick={() => setToggleExperience(false)}
              >
                Education
              </Tab>

            </Tab.List>
          </Tab.Group>
        </div>
      </Reveal>

    </>
  )
}

const About = SectionWrapper(InnerAbout, "about")

export default About