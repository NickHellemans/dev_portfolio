import {BallCanvas} from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import {motion} from 'framer-motion';
import {styles} from '../style'
import {fadeIn, textVariant} from '../utils/motion'

const InnerTech = () => {
  return (
    <>   

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