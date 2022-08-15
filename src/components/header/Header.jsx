import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/images/meCroped.png';
import HeaderSocials from './HeaderSocials';
import {motion} from 'framer-motion';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <motion.h5 className="h5__color"initial={{opacity:0}} animate={{opacity:1}} transition={{ delay: 0.6, duration: 0.6, type: "tween" }}>Hello I'm</motion.h5>
        <motion.h1 initial={{x:-300, opacity:0}} animate={{x:0, opacity:1}} transition={{ delay: 1, duration: 0.20, type: "tween" }}>Daniel Burlacu</motion.h1>
        <motion.h5 className="text-title" initial={{x:300, opacity:0}} animate={{x:0, opacity:1}} transition={{ delay: 1.5, duration: 0.25, type: "tween" }}>{"Fullstack & BlockChain Developer"}</motion.h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <motion.img 
          style={{
            y:10
          }}
           animate={{y:-140}}
           transition={{
             delay: 1,
             duration: 2,
             ease: [0.075, 0.82, 0.165, 1],
             repeat: Infinity,
             repeatType: "reverse"
       }}
          src={ME} alt="me"/>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header