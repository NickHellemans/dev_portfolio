import { SectionWrapper } from '../hoc';
import { tools, design_tools, databases, languages, frameworks } from '../constants';
import { styles } from '../style'
import { useState, Suspense } from 'react';
import { Tab } from '@headlessui/react';
import { Reveal } from './Reveal';
import Spinner from './Spinner';

const InnerTech = () => {
  const [category, setCategory] = useState(languages);
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
              onClick={() => setCategory(languages)}
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
              onClick={() => setCategory(frameworks)}
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
              onClick={() => setCategory(databases)}
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
              onClick={() => setCategory(tools)}
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
              onClick={() => setCategory(design_tools)}
            >
              Design tools
            </Tab>
          </Tab.List>
        </Tab.Group>
      </Reveal>
      {/* </motion.div> */}
      <div className='flex flex-row flex-wrap justify-center gap-1'>
        {category.map((tech, index) => (
          <div key={tech.name} className='w-24 h-24 flex justify-center items-center'>
            <Suspense fallback={<Spinner />}>
              <Reveal delay={index * 0.05}>
                <img src={tech.icon} alt='github' className='w-1/2 h-1/2 hover:w-full hover:h-full object-contain' />
              </Reveal>
            </Suspense>
          </div>
        ))}

      </div>


    </>

  )
}

const Tech = SectionWrapper(InnerTech, "skills");
export default Tech