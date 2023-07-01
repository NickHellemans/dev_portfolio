import { styles } from '../style';
import { experiences } from '../constants';
import { SectionWrapper } from "../hoc";
import { Reveal } from "./Reveal";

const ExperienceCard = ({ experience }) => (
    <>
        <div className="flex flex-wrap justify-between">
            <div className="mt-10">
                <h3 className="text-highlight text-[24px] font-bold">{experience.title}</h3>
                <p className="text-white text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
            </div>
            <div className="flex items-end">
                <p className="text-secondary text-[16px] italic">
                    {experience.date}
                </p>
            </div>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
                <li key={`experience-point-${index}`} className="text-secondary text-[16px] pl-1">
                    {point}
                </li>
            ))}
        </ul>

    </>
)

const InnerExperience = () => {
    return (
        <>
            {/* <motion.div variants={textVariant()}> */}
            <Reveal width="100%" delay={0}>
                <p className={styles.sectionSubText}>What I have done so far</p>
                <div className='flex items-center'>
                    <h2 className={styles.sectionHeadText}>Experience<span className='text-highlight'>.</span></h2>
                    <div className='w-full h-[1px] flex bg-[#915eff] ml-5 items-center justify-center' />
                    {/* <hr className='border-[#915eff]'/> */}
                </div>
            </Reveal>
            {/* </motion.div> */}
            <div className="mt-1 flex flex-col">
                {experiences.map((experience, index) => (
                    <Reveal key={index} width="100%" delay={0}>
                        <div key={index}>

                            {index ? <ExperienceCard key={index} experience={experience} /> : <>
                                <ExperienceCard key={index + 1} experience={experience} />
                                <hr key={index} className="mt-5 border-highlight" />
                            </>
                            }
                        </div>
                    </Reveal>
                ))}

            </div>
        </>
    )
}
const ExperienceV2 = SectionWrapper(InnerExperience, "")
export default ExperienceV2