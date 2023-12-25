import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../asests/me.png'
import HeaderSocial from './headersocial'
import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Priyajeet Majhi</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />

        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down <IoIosArrowRoundForward className='icon__arrow' /> </a>
      </div>
    </header>
  )
}
export default Header
