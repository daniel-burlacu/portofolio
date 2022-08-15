import React from 'react';
import './about.css';
import ME from '../../assets/images/aboutMe.png';
import {FaFacebookMessenger,FaJava,FaCameraRetro,FaInstagram,FaFacebookSquare,FaYoutubeSquare} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiReact,SiOracle} from 'react-icons/si';
import {GiFullMotorcycleHelmet,GiSailboat,GiPirateFlag} from 'react-icons/gi';
import {TbDrone} from 'react-icons/tb';
import {MdDeveloperMode} from 'react-icons/md';
import {motion} from 'framer-motion';
import { RO, ES, SE, US} from 'country-flag-icons/react/3x2'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className='about__me'>
          <motion.div 
           whileHover={{ rotate: 60 }}
           transition={{
            duration: 0.5}}
          className='about__me-image'>
            <img src={ME} alt="About Image"/>
          </motion.div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <motion.article 
              initial={{x:-500 ,opacity:0, scale:0.5}}
              animate={{x:0, opacity:1, rotate: 360, scale: 1 }}
              transition={{ ease: "anticipate", duration: 2, delay: 0.6 }}
              className='about__card'>
              <FaFacebookMessenger className='about__icon' color="orange" size={25}/>
              <h5>Polyglot</h5>
              <small>4+ Languages</small>
              <ul>
                  <RO style={{width:30, height:30 ,margin:2}}/>
                  <US style={{width:30, height:30 ,margin:2}}/>
                  <ES style={{width:30, height:30 ,margin:2}}/>
                  <SE style={{width:30, height:30 ,margin:2}}/>
              </ul>
            </motion.article>
            <motion.article 
              initial={{x:-500,opacity:0, scale:0.5}}
              animate={{x:0, opacity:1, rotate: 360, scale: 1 }}
              transition={{ ease: "anticipate", duration: 2, delay: 0.9 }}
              className='about__card'>
              <FaCameraRetro className='about__icon' color="orange" size={25}/>
              <h5>Content Creator</h5>
              <small>Available ON</small>
              <ul>
                <FaYoutubeSquare style={{margin:2}} size={25}/>
                <FaInstagram style={{margin:2}} size={25}/>
                <FaFacebookSquare style={{margin:2}} size={25}/>
              </ul>
            </motion.article>
            <motion.article 
              initial={{x:-500,opacity:0, scale:0.5}}
              animate={{x:0, opacity:1, rotate: 360, scale: 1 }}
              transition={{ ease: "anticipate", duration: 2, delay: 1.2 }}
              className='about__card'>
              <MdDeveloperMode className='about__icon' color="orange" size={25}/>
              <h5>Developer</h5>
              <small>12+ Years Working</small>
              <ul>
                <FaJava style={{margin:2}} size={25}/>
                <IoLogoJavascript style={{margin:2}} size={25}/>
                <SiOracle style={{margin:2}} size={25}/>
                <SiReact style={{margin:2}} size={25}/>
              </ul>
            </motion.article>
            <motion.article 
               initial={{x:500,opacity:0, scale:0.5}}
               animate={{x:0, opacity:1, scale: 1 }}
               transition={{ ease: "anticipate", duration: 2, delay: 0.6 }}
              className='about__card'>
              <GiFullMotorcycleHelmet className='about__icon' color="orange" size={25}/>
              <h5>Motorsports Fan</h5>
              <ul>
                <small>5+ Years </small>
                <small>Motorcycle Professional Training</small>
              </ul>
              
            </motion.article>
            <motion.article
                initial={{x:500,opacity:0, scale:0.5}}
                animate={{x:0, opacity:1, scale: 1 }}
                transition={{ ease: "anticipate", duration: 2, delay: 0.9 }} 
              className='about__card'>
              <GiSailboat className='about__icon' color="orange" size={25}/>
              <h5>Skipper</h5>
              <small><GiPirateFlag size={20}/> Captain to become</small>
            </motion.article>
            <motion.article
              initial={{x:500,opacity:0, scale:0.5}}
              animate={{x:0, opacity:1, scale: 1 }}
              transition={{ ease: "anticipate", duration: 2, delay: 1.2 }}  
              className='about__card'>
              <TbDrone className='about__icon' color="orange" size={25}/>
              <h5>Drone pilot</h5>
              <small>2+ Years Experience</small>
            </motion.article>
          </div>
          <a href='#contact' className='btn btn-about'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About