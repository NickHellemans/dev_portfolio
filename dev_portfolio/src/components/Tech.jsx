import {BallCanvas} from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import {motion} from 'framer-motion';
import {styles} from '../style'
import {fadeIn, textVariant} from '../utils/motion'

const InnerTech = () => {
  return (
    <>   
    <motion.div  variants={textVariant()}>
      <p className={styles.sectionSubText}>What I have to offer</p>
      <h2 className={styles.sectionHeadText}>Skills</h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Below u can find a selection of the skills I have aquired over the the past years & the technologies I have worked with for building solutions.
      I am always eager to learn new things and add weapons to my arsenal if they are the best tool suited for the job!
    </motion.p>
     <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
      {technologies.map((tech) => (
        <div className='w-28 h-28' key={tech.name}>
          <BallCanvas icon={tech.icon}/>
        </div>
      ))}
    </div>
    </>

  )
}

const  Tech = SectionWrapper(InnerTech, "");
export default Tech