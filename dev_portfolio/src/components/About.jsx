import React, { useState, useRef, useEffect } from 'react';
import { styles } from '../style'
import { SectionWrapper } from '../hoc';
import { resume, services, interests } from '../constants';
import { ExperienceV2, Education } from '../components';
import { Tab } from '@headlessui/react'
import Socials from './Socials';
import { Reveal } from './Reveal';

const ServiceCard = ({ index, title, icon }) => {
  return (

    <div className='xs:w-[250px] w-[250px] shadow-card rounded-[20px]'>
      <Reveal width='100%' delay={index * 0.25}>
        <div className='green-pink-gradient p-[1px] rounded-[20px]'>
          <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </div>
      </Reveal>
    </div>

  )
}


const InnerAbout = () => {

  const [toggleExperience, setToggleExperience] = useState(true);

  const scrollToJustAbove = (margin = 20) => {
    let elem = document.getElementById("experience_and_education")
    let dims = elem.getBoundingClientRect();
    window.scrollTo(window.scrollX, dims.top - margin + window.scrollY);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      {/* <motion.div  variants={textVariant()}> */}
      <Reveal width='100%'>
        <p className={styles.sectionSubText}>Introduction</p>
        <div className='flex items-center'>
          <h2 className={styles.sectionHeadText}>About<span className='text-highlight'>.</span></h2>
          <div className='w-full h-[0px] sm:h-[0px] md:h-[1px] flex bg-highlight ml-5 items-center justify-center' />
          <div className='ml-2 flex justify-between items-between gap-2'>
            <Socials />
          </div>
        </div>
      </Reveal>
      <div className='flex flex-wrap lg:flex-row flex-col gap-10'>
        <div className='flex-[0.75]'>
          <Reveal width='100%'>
            {/* <hr className='border-[#915eff]'/> */}
            {/* </motion.div> */}
            {/* <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'> */}
            <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
              <span className='border green-pink-gradient pl-2 pr-2 bg-highlight rounded border-highlight text-white
           text-[18px] font-extrabold'>H</span> ey! I&apos;m Nick, a software & web
              developer based in Belgium. I specialize in the backend, but I don&apos;t mind getting my hands dirty on some
              frontend work too! I recently fell into the rabbit hole of graphics and all the things
              that come with it. So I&apos;m getting my feet wet with that! I&apos;m also educated on the subject of
              machine learning.
            </p>
            <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
              I&apos;ve got an extensive toolkit to tackle any kind of problem which u can check out in the
              <a href='#skills' className='text-highlight hover:underline'> skills</a> section.
              However, I am always eager to add new weapons to my arsenal if they proof to be the best
              tool for the job.
            </p>
            <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
              Recently graduated as a bachelor in applied informatics, I am on the lookout for a new challenge: <span className='text-highlight font-extrabold'>A job! </span>
              While I am actively searching for a job, I still want to expand my knowledge in the field of computer science and
              that&apos;s why I will be starting my master&apos;s degree in applied informatics this fall
              in night school along side the job I will hopefully have by then!
            </p>

            <div className='mt-4 flex flex-wrap items-center'>
              <div className='mt-2 flex flex-wrap gap-3'>
                <p className='text-highlight font-bold'>My links &gt;</p>
                <Socials />
              <a href={resume} download='nick-hellemans_dev-resume' target='_blank' rel='noreferrer' className='w-auto flex justify-center items-center'>
                <button className="bg-gray-300 hover:bg-tertiary text-gray-700 font-bold hover:text-white py-1 px-2 rounded inline-flex justify-center items-center">
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                  <span>CV</span>
                </button>
              </a>
              </div>
            </div>
          </Reveal>
        </div>
        <div className='flex flex-[0.25]'>

          <div className='flex flex-col items-center justify-center'>
            <Reveal width='100%'>
              <p className='text-secondary text-[32px] font-bold'>Interests</p>
            </Reveal>

            <div className='mt-5 flex flex-wrap gap-2 items-center justify-center'>
              {interests.map((interest, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div key={index} className='bg-highlight p-2 rounded-full text-[14px]'>{interest.name}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Reveal width='full-width'> */}
      {/* </motion.p> */}
      <div className='mt-20 items-center flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      {/* </Reveal> */}
      <div id='experience_and_education' />
      <Reveal width='100%'>
        {
          toggleExperience ? <ExperienceV2 /> : <Education />
        }

      </Reveal>
      <Reveal width='100%'>

        <div className='flex justify-center'>
          <Tab.Group>
            <Tab.List className="w-3/4 flex space-x-1 rounded-xl bg-tertiary p-1 green-pink-gradient">
              <Tab
                onClick={() => {
                  setToggleExperience(true);
                  scrollToJustAbove();
                }}
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
                onClick={() => {
                  setToggleExperience(false);
                  scrollToJustAbove();
                }}
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