import { motion } from 'framer-motion';
import { styles } from '../style';
import { degrees } from '../constants';
import { SectionWrapper } from "../hoc";
import { textVariant } from '../utils/motion';

const DegreesCard = ({ degree }) => (
    <>
        <div className="flex flex-wrap justify-between mt-5">
            <div className="justify-center">
                <h3 className="text-white text-[22px] font-bold">{degree.name}</h3>
                <p className="text-[#915eff] text-[16px] font-semibold" style={{ margin: 0 }}>{degree.school}</p>
                <p className='text-secondary font-small text-[14px]'>{degree.minor ? `Minor: ${degree.minor}` : ``}</p>
            </div>
            <div className="flex flex-col sm:items-start md:items-end justify-end items-start">
                <p className='mt-1 text-secondary text-[14px]'>{degree.date}</p>
                <p className="font-medium text-[16px] blue-text-gradient italic">
                    {degree.grade}
                </p>
            </div>
        </div>
    </>
)

const InnerEducation = () => {
    return (
        <>
            {/* <motion.div variants={textVariant()}> */}
            <div className='flex justify-end'>
                <p className={styles.sectionSubText}>What I have studied so far</p>
            </div>
            <div className='flex items-center'>
                <div className='w-full h-[1px] flex bg-[#915eff] mr-5 items-center justify-center' />
                <h2 className={styles.sectionHeadText}>Education<span className='text-[#915eff]'>.</span></h2>
                {/* <hr className='border-[#915eff]'/> */}
            </div>
            {/* </motion.div> */}
            <div className="mt-1 flex flex-col">
                {degrees.map((degree, index) => (
                    <div key={index}>
                        {index ?
                            <>
                                <hr key={degree.name} className="mt-5 border-[#915eff]" />
                                <DegreesCard key={index + 1} degree={degree} />
                            </>
                            :
                            <DegreesCard key={index} degree={degree} />
                        }
                    </div>
                ))}

            </div>
        </>
    )
}
const Education = SectionWrapper(InnerEducation, "")
export default Education