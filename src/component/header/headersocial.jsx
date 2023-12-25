import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Headersocial = () => {
  return (
    <div className='header__social'>
      <a href="http://linkedin.com"><FaLinkedin /></a>
      <a href="http://facebook.com"><FaFacebookSquare /></a>
      <a href="http://github.com"><FaGithubSquare /></a>
    </div>
  )
}

export default Headersocial
