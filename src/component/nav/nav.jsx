import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { LuUser2 } from "react-icons/lu";
import { RiBook2Line } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';


const Nav = () => {
  const [activeNav, SetActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=> SetActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> SetActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><LuUser2 /></a>
      <a href="#experiens" onClick={()=> SetActiveNav('#experiens')} className={activeNav === '#experiens' ? 'active': ''}><RiBook2Line /></a>
      <a href="#services" onClick={()=> SetActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><RiServiceLine /></a>
      <a href="#contact" onClick={()=> SetActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
