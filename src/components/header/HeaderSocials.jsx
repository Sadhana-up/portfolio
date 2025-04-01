import React from 'react'
import {BsEnvelope, BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sadhana-uprety"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Sadhana-up" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="mail:contact@sadhanauprety.com.np"
        target="_blank"
        rel="noreferrer"
      >
        <BsEnvelope />
      </a>
    </div>
  );
}

export default HeaderSocials