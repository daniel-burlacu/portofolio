import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BiShapePolygon} from 'react-icons/bi'
import './header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/daniel-burlacu-3879a689/" target="_blank" rel="noreferrer"><BsLinkedin className="color__icon" size='25'/></a>
        <a href="https://github.com/daniel-burlacu" target="_blank" rel="noreferrer"><FaGithub className="color__icon" size='25'/></a>
        <a href="https://polygonscan.com/address/0x3050CC85864165AACeCE3791532fA1A07670425A" target="_blank" rel="noreferrer"><BiShapePolygon className="color__icon" size='25'/></a>
    </div>
  )
}

export default HeaderSocials