import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { tools, design_tools, databases, languages, frameworks } from '../constants';
import { motion } from 'framer-motion';
import { styles } from '../style'
import { fadeIn, textVariant } from '../utils/motion'

const InnerTech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I have worked with</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <p>test</p>
      {/* <h3 className={`${styles.sectionSubTitleText} flex justify-center`}>Languages</h3>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10 mb-10'>
        {languages.map((tech) => (
          <div className='w-24 h-24' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>

      <h3 className={`${styles.sectionSubTitleText} flex justify-center`}>Frameworks & Libaries</h3>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10 mb-10'>
        {frameworks.map((tech) => (
          <div className='w-24 h-24' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>

      <h3 className={`${styles.sectionSubTitleText} flex justify-center`}>Databases</h3>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10 mb-10'>
        {databases.map((tech) => (
          <div className='w-24 h-24' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>

      <h3 className={`${styles.sectionSubTitleText} flex justify-center`}>Other tools</h3>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10 mb-10'>
        {tools.map((tech) => (
          <div className='w-24 h-24' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>

      <h3 className={`${styles.sectionSubTitleText} flex justify-center`}>Design tools</h3>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10 mb-10'>
        {design_tools.map((tech) => (
          <div className='w-24 h-24' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div> */}
    </>

  )
}

const Tech = SectionWrapper(InnerTech, "skills");
export default Tech