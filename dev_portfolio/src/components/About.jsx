import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../style'
import {services} from '../constants/index'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';
import { degrees } from '../constants';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div options={{ max: 45, scale: 1, speed: 450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
      </motion.div>
    </Tilt>
  )
}

const DegreeCard = ({index, name, minor, school, grade, date, icon}) => (
  <Tilt>
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className='bg-black-200 p-10 rounded-3xl sm:w-[320px] w-full h-auto'>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{name} <span className='blue-text-gradient'>@</span> {school}</p>
      <p className='text-secondary font-small text-[14px]'>{minor ? `Minor: ${minor}` : ``}</p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[14px] blue-text-gradient italic'>{grade}</p>
          <p className='mt-1 text-secondary text-[12px]'>{date}</p>
        </div>
        <img src={icon} alt={school} className='w-13 h-10 rounded-lg border border-indigo-500/100 object-cover'/>
      </div>
    </div>
  </motion.div>
  </Tilt>
)

const InnerAbout = () => {
  return (
    <>
    <motion.div  variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I&apos;m a skilled software developer with experience in C, C++, ... . Eager to learn. Check out my projects to see what I have worked on!
    </motion.p>
    <div className='mt-20 flex flex-wrap justify-center gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index = {index} {...service}/>
      ))}
    </div>

    <div className='w-full mt-12 bg-black-100 rounded-[20px] green-pink-gradient p-[2px] shadowcard'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[100px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionSubTitleText} text-white -mt-8`}>Education</h2>
        </motion.div>
      </div>

    </div>
    <div className={`w-auto -mt-14 pb-10 flex flex-wrap sm:flex-col md:flex-col lg:flex-row justify-center items-center gap-7`}>
        {degrees.map((degree, index) => (
          <DegreeCard 
          key={degree.name}
          index={index}
          {...degree}
          />
        ))}
      </div>

    </>
  )
}

const About = SectionWrapper(InnerAbout, "about")

export default About