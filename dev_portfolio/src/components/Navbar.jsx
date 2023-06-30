import React, { useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);
  console.log(activeSection)

  const handleScroll = () => {
    const pageYOffset = window.scrollY;

    if(pageYOffset >= 3533){
      setActiveSection("contact")
      return;
    }
    let min = Number.MAX_SAFE_INTEGER

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;

      let diff = pageYOffset - sectionOffsetTop;

      if (section.id != "" && Math.abs(diff) <= min) {
        min = diff
        setActiveSection(section.id);
      }
    });

  };

  useEffect(() => {
    sections.current = document.querySelectorAll('[data-section]');
    window.addEventListener('scroll', handleScroll);
    console.log(sections)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/dev_portfolio/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className='w-12 h-12 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Nick&nbsp;<span className='hidden sm:hidden md:block'>| Hellemans</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row sm:gap-5 lg:gap-10'>
          {navLinks.map((link) => (
            // ${active === link.title ? "text-white" : "text-secondary"}
            <li key={link.id} className={` hover:text-white text-[18px] 
          font-medium cursor-pointer ${activeSection === link.id ? "text-white" : "text-secondary"}`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.id ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer 
                text-[16px]`} onClick={() => {
                  setActive(link.title)
                  setToggle(!toggle)
                }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar