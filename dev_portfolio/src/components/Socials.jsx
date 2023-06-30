import React from 'react'
import {Linkedin, Github, Email} from '../constants'

const Socials = () => {
    return (
        <>

            <a href="https://www.linkedin.com/in/nickhell/" target='_blank' rel='noreferrer'>
                <Linkedin  />
            </a>

            <a href="https://github.com/NickHellemans" target='_blank' rel='noreferrer'>
                <Github />
            </a>
            
            <a href="mailto:nick-hellemans@hotmail.com" target='_blank' rel='noreferrer'>
                <Email />
            </a>
        </>
    )
}

export default Socials;

// {socials.map((social, index) => (
//     // <motion.div key={social.name} variants={fadeIn("", "spring", index * 0.5, 0.75)} className='w-20 h-20'>
//     <div key={social.name}>

//       <a href={social.name === "Email" ? `mailto: ${social.url}` : social.url} target='_blank' rel='noreferrer'>
//         {/* <img src={social.image} className='object-contain hover:scale-150 cursor-pointer' /> */}
//         {social.img}
//       </a>
//       {/* </motion.div> */}
//     </div>
//   ))}