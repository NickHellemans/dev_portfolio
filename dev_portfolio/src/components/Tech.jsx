import { SectionWrapper } from '../hoc';
import { tools, design_tools, databases, languages, frameworks, tracking_tools, ai_tools } from '../constants';
import { styles } from '../style'
import { useState, Suspense} from 'react';
import { Tab } from '@headlessui/react';
import { Reveal } from './Reveal';
import Spinner from './Spinner';
import { ProgressBar } from './ProgressBar';
import { motion } from 'framer-motion'

const InnerTech = () => {
  const [category, setCategory] = useState(languages);
  const [activeSkill, setActiveSkill] = useState(languages[0]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>

      <Reveal width='100%'>
        {/* <motion.div variants={textVariant()}> */}
        <p className={styles.sectionSubText}>Technologies I have worked with</p>
        <div className='flex items-center'>
          <h2 className={styles.sectionHeadText}>Skills<span className='text-highlight'>.</span></h2>
          <div className='w-full h-[1px] flex bg-highlight ml-5 items-center justify-center' />
          {/* <hr className='border-[#915eff]'/> */}
        </div>
      </Reveal>
      <Reveal width='full-width'>
        <Tab.Group>
          <Tab.List className="flex sm:flex-wrap md:flex-nowrap flex-wrap space-x-1 rounded-xl bg-tertiary p-1 mt-12 mb-10 green-pink-gradient">
            <Tab
              onClick={() => {
                setCategory(languages);
                setActiveSkill(languages[0]);
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
              Languages
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
                setCategory(frameworks)
                setActiveSkill(frameworks[0]);
              }}
            >
              Frameworks & libraries
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
                setCategory(ai_tools)
                setActiveSkill(ai_tools[0]);
              }}
            >
              AI & data
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
                setCategory(databases)
                setActiveSkill(databases[0]);
              }}
            >
              Databases
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
                setCategory(tools)
                setActiveSkill(tools[0]);
              }}
            >
              Other tools
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
                setCategory(tracking_tools)
                setActiveSkill(tracking_tools[0]);
              }}
            >
              Tracking tools
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
                setCategory(design_tools)
                setActiveSkill(design_tools[0]);
              }}
            >
              Design tools
            </Tab>
          </Tab.List>
        </Tab.Group>
      </Reveal>
      {/* </motion.div> */}
      <div className='ml-6 flex flex-wrap justify-center w-full gap-1'>
        {category.map((tech, index) => (
          <div key={tech.name} className='w-24 h-24 flex items-center'>
            <Suspense fallback={<Spinner />}>
              <Reveal delay={index * 0.05}>
                <img src={tech.icon} alt='github' className={`${activeSkill.name === tech.name ? 'border border-highlight border-2 rounded-md p-1' : ''} w-1/2 h-1/2 object-contain cursor-pointer`} onClick={() => setActiveSkill(tech)} />
              </Reveal>
            </Suspense>
          </div>
        ))}

      </div>
      <div className='mt-10 flex items-center flex-col'>
        <Reveal>
          <div className='flex items-center flex-col justify-center'>
          <p className='text-secondary'>
            Skill level: 
            </p>
            <motion.h2
              key = {activeSkill.name}
              initial={{ scale: 0 }}
              animate={{  scale: 1 }}
              transition={{
                type: "tween",
                stiffness: 100,
                damping: 20,
              }}
              className='font-bold text-[24px] text-white'>{activeSkill.name}
              </motion.h2>
              </div>
        </Reveal>
        <div className='mt-2 flex w-3/4'>
          <Reveal width='100%'>
            <ProgressBar percent={activeSkill.skill} />
          </Reveal>
        </div>
      </div>

    </>

  )
}

const Tech = SectionWrapper(InnerTech, "skills");
export default Tech