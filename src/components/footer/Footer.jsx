import React from 'react';
import './footer.css';
import {FaFacebookF,FaLinkedin,FaInstagram,FaTwitter, FaYoutubeSquare} from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';
import {motion} from 'framer-motion';

const Footer = () => {
  return (
    <footer>
      <motion.img 
        initial={{ x: -150 }}
        animate={{ x: 150 }}
        transition={{
            type: "spring",
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 0.1
        }}
        src={Logo} alt="logo" className='footer__img'/>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portofolio">Portofolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/daniel-burlacu-3879a689/"><FaLinkedin size={25}/></a>
        <a href="https://www.facebook.com/dani.83.rsr/"><FaFacebookF size={25}/></a>
        <a href="https://www.instagram.com/dani_83_rsr/"><FaInstagram size={25}/></a>
        <a href="https://twitter.com/dani83_rsr"><FaTwitter size={25}/></a>
        <a href="https://www.youtube.com/channel/UCp2aZG91-vDbcBRbTMCtUMw"><FaYoutubeSquare size={25}/></a>
      </div>
      
    <div className="footer__copyright">
      <small>&copy; 2022 Daniel Portofolio Page. All Rights Reserved.</small>
    </div>
    </footer>

  )
}

export default Footer