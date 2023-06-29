import { motion } from 'framer-motion';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { socials, resume } from '../constants';
import { useState, useRef } from 'react';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import AstronautCanvas from './canvas/Earth';

const InnerContact = () => {

  const downloadResume = () => {
    // using Java Script method to get PDF file
    fetch(resume).then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = "nick_hellemans_resume.pdf";
        alink.click();
      })
    })
  }
  return (
    <>
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>My socials & resume</p>
          <h2 className={styles.sectionHeadText}>Contact</h2>
          <div className='mt-12 flex justify-center gap-8'>
            {socials.map((social, index) => (
              <motion.div key={social.name} variants={fadeIn("", "spring", index * 0.5, 0.75)} className='w-20 h-20'>
                  <a href={social.name === "Email" ? `mailto: ${social.url}` : social.url} target='_blank' rel='noreferrer'>
                    <img src={social.image} className='object-contain p-1 m-2 hover:scale-150 cursor-pointer' />
                  </a>
              </motion.div>
            ))}
          </div>
            <div className='mt-12 flex justify-center items-center'>
              <button className="w-1/2 bg-gray-300 hover:bg-[#915eff] text-gray-700 font-bold hover:text-white py-2 px-4 rounded inline-flex justify-center items-center" onClick={downloadResume}>
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <span>Resume</span>
              </button>
            </div>
        </motion.div>
        <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[400px]'>
          <AstronautCanvas />
        </motion.div>
      </div>
    </>
  )
}

const Contact = SectionWrapper(InnerContact, "contact");
export default Contact