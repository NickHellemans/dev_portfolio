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

  // const downloadResume = () => {
  //   // using Java Script method to get PDF file
  //   fetch(resume).then(response => {
  //     response.blob().then(blob => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       let alink = document.createElement('a');
  //       alink.href = fileURL;
  //       alink.download = "nick_hellemans_resume.pdf";
  //       alink.click();
  //     })
  //   })
  // }
  return (
    <>
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <div className='flex-[0.75] p-8 bg-black-100 rounded-2xl h-full'>
          <p className={styles.sectionSubText}>My socials & resume</p>
          <h2 className={styles.sectionHeadText}>Contact<span className='text-[#915eff]'>.</span></h2>
          {/* <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'> */}
          <div className='mt-8 flex justify-center gap-8'>
            {socials.map((social, index) => (
              // <motion.div key={social.name} variants={fadeIn("", "spring", index * 0.5, 0.75)} className='w-20 h-20'>
              <div key={social.name} className='w-20 h-20'>

                <a href={social.name === "Email" ? `mailto: ${social.url}` : social.url} target='_blank' rel='noreferrer'>
                  <img src={social.image} className='object-contain p-1 m-2 hover:scale-150 cursor-pointer' />

                </a>
                {/* </motion.div> */}
              </div>
            ))}
          </div>
          <div className='mt-8 mb-1 flex justify-center items-center'>
            <a href={resume} download='nick-hellemans_dev-resume' target='_blank' rel='noreferrer' className='w-auto flex justify-center items-center'>
              <button className="bg-gray-300 hover:bg-[#915eff] text-gray-700 font-bold hover:text-white py-2 px-4 rounded inline-flex justify-center items-center">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <span>Resume</span>
              </button>
            </a>
          </div>
          {/* </motion.div> */}
        </div>
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