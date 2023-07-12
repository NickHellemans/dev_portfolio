import React, { useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { Reveal } from './Reveal';
import { Dialog, Transition } from '@headlessui/react'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, detailedDescription, thingsLearned, openModal, setOpenProject }) => {
  return (
    <>
      <div className='shadow-card rounded-2xl h-full'>
        <Reveal key={`project-${index}`} width='100%' delay={index * 0.25}>
          <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
            <motion.div onClick={() => {
              setOpenProject({ name, description, tags, image, source_code_link, detailedDescription, thingsLearned });
              openModal();
            }} className='relative w-full h-[230px] cursor-pointer' whileHover={{ rotate: 3, scale: 1.1 }}>
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

            {/* </motion.div> */}
          </div>
        </Reveal>
      </div>

    </>

  )
}
const InnerWorks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openProject, setOpenProject] = useState(projects[0]);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
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

      <div className='mt-20 flex flex-wrap justify-center gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} openModal={openModal} setOpenProject={setOpenProject} />
        ))}
      </div>

      {/* {isOpen && <ProjectModal setIsOpen={setIsOpen}/>} */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center backdrop-blur-sm">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-lg transform overflow-hidden rounded-2xl green-pink-gradient p-[1px] text-left align-middle shadow-xl transition-all">
                  <div className='bg-tertiary rounded-2xl p-4'>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-bold leading-6 text-white"
                    >
                      <div className='flex justify-between items-center'>
                        <div>
                          {openProject.name}

                        </div>
                        <div className='inset-0 card-img_hover green-pink-gradient rounded-full p-[1px]'>
                          <motion.div onClick={() => window.open(openProject.source_code_link, "_blank")} className='bg-tertiary w-8 h-8 rounded-full flex justify-center items-center cursor-pointer' whileHover={{ scale: 2 }}>

                            <img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />
                          </motion.div>
                        </div>
                      </div>
                    </Dialog.Title>
                    <div className='mt-1 flex flex-wrap gap-2'>
                      {openProject.tags.map((tag, index) => (
                        <p key={tag.name} className={`text-[15px] text-[#915eff]`}>
                          {index ? '- ' : ''}{tag.name}
                        </p>
                      ))}
                    </div>
                    <img src={openProject.image} alt={openProject.name} className='mt-5 mb-3 w-full h-full object-cover rounded-2xl' />
                    <p className='mt-3 text-white font-bold text-[16px]'>Description:</p>
                    {openProject.detailedDescription.map((paragraph, index) => (
                      <p key={index} className='mt-1 text-secondary text-[14px]'>{paragraph}</p>
                    ))}
                    <p className='mt-3 text-white font-bold text-[16px]'>Lessons learned:</p>
                    <ul className='ml-4 italic text-secondary text-[14px] list-disc list-inside rocket'>
                      {openProject.thingsLearned.map((lesson, index) => (
                        <li key={index} className='indent-[2px] mt-1'>{lesson}</li>
                      ))}
                    </ul>
                    <p className='mt-2 text-secondary text-[14px]'><a href={openProject.source_code_link} target='_blank' rel='noreferrer' className='text-[#915eff] font-bold text-[16px] hover:underline cursor-pointer'>Learn more &gt;</a></p>
                    <div className="mt-4 flex justify-center">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-secondary px-4 py-2 text-sm font-medium text-white hover:bg-highlight focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
const Works = SectionWrapper(InnerWorks, "projects");
export default Works;