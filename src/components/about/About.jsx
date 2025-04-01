import React from 'react'
import './about.css'
import myImage from '../../assets/profile-3.png'
import {GiGraduateCap} from 'react-icons/gi'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>High School</h5>
              <small>
                Deerwalk Sifal School <br />
                +2 Science
              </small>
            </article>
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Current Studies</h5>
              <small>
                Kathmandu University <br />
                Data Science, Bachelor
              </small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>Web Development</li>
                  <li>Machine Learning</li>
                  <li>Artificial Intelligence</li>
                  <li>SEO</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            I am a <b>Data Science Undergraduate</b> at Kathmandu
            University with a passion for <b>Data Science</b>. I have a strong
            foundation in <b>Web Development</b>, <b>Machine Learning</b>, and
            <b>Artificial Intelligence</b>. I enjoy creating innovative solutions
            and exploring emerging technologies. Additionally, I am skilled in
            <b>SEO</b>, enabling me to optimize web applications for better
            visibility. I am a dedicated learner, always excited to embrace new
            challenges and contribute to meaningful projects with creativity and
            determination.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About