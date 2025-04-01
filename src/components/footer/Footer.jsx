import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsEnvelope} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Sadhana Uprety
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#myprojects">My Projects</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/sadhana-uprety">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Sadhana-up">
          <BsGithub />
        </a>
        <a href="mail:contact@sadhanauprety.com.np">
          <BsEnvelope />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sadhana Uprety. All rightts reserved.</small>
      </div>
    </footer>
  );
}

export default Footer