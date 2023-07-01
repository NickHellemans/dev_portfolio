import { styles } from '../style';
import { degrees } from '../constants';
import { SectionWrapper } from "../hoc";
import { Reveal } from './Reveal';

const DegreesCard = ({ degree }) => (
    <>
        <div className="flex flex-wrap justify-between mt-5">
            <div className="justify-center">
                <h3 className="text-white text-[22px] font-bold">{degree.name}</h3>
                <p className="text-highlight text-[16px] font-semibold" style={{ margin: 0 }}>{degree.school}</p>
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
            <Reveal width='100%' delay={0}>
                <div className='flex justify-end'>
                    <p className={styles.sectionSubText}>What I have studied so far</p>
                </div>
                <div className='flex items-center'>
                    <div className='w-full h-[1px] flex bg-[#915eff] mr-5 items-center justify-center' />
                    <h2 className={styles.sectionHeadText}>Education<span className='text-highlight'>.</span></h2>
                    {/* <hr className='border-[#915eff]'/> */}
                </div>
            </Reveal>
            {/* </motion.div> */}
            <div className="mt-1 flex flex-col">
                {degrees.map((degree, index) => (
                    <Reveal key={index} width='100%' delay={0}>
                        <div>
                            {index ?
                                <>
                                    <hr key={degree.name} className="mt-5 border-highlight" />
                                    <DegreesCard key={index + 1} degree={degree} />
                                </>
                                :
                                <DegreesCard key={index} degree={degree} />
                            }
                        </div>
                    </Reveal>
                ))}

            </div>
        </>
    )
}
const Education = SectionWrapper(InnerEducation, "")
export default Education