import { motion } from 'framer-motion';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { socials, resume } from '../constants';
import { useState, useRef } from 'react';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import AstronautCanvas from './canvas/Earth';
import Socials from './Socials';
import { Reveal } from './Reveal';

const InnerContact = () => {
  return (
    <>
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <Reveal width='full-width'>
          <div className='flex-[0.75] rounded-2xl h-full p-[1px] green-pink-gradient'>
            <div className='bg-tertiary rounded-2xl p-8'>
              <p className={styles.sectionSubText}>My socials & resume</p>
              <h2 className={styles.sectionHeadText}>Contact<span className='text-[#915eff]'>.</span></h2>
              {/* <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'> */}
              <div id="contact_socials" className='mt-8 flex justify-center gap-8'>
                <Socials />
              </div>
              <div className='mt-8 mb-1 flex justify-center items-center'>
                <a href={resume} download='nick-hellemans_dev-resume' target='_blank' rel='noreferrer' className='w-auto flex justify-center items-center'>
                  <button className="bg-secondary hover:bg-highlight text-gray-700 font-bold hover:text-white py-2 px-4 rounded inline-flex justify-center items-center">
                    <svg id="download_resume" className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                    <span>Resume</span>
                  </button>
                </a>
              </div>
              {/* </motion.div> */}
            </div>
          </div>
        </Reveal>
    
          {/* <motion.div variants={slideIn("right", "tween", 0.2, 7)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[400px]'> */}
          <div className='xl:flex-1 xl:h-auto md:h-[550px] h-[400px]'>

            <AstronautCanvas />
            {/* </motion.div> */}
          </div>
        
      </div>
    </>
  )
}

const Contact = SectionWrapper(InnerContact, "contact");
export default Contact