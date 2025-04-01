import React from 'react'
import './myprojects.css'
import IMG4 from '../../assets/project-1.jpg'

const Myprojects = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>My Portfolio</h3>
          <small className="text-light">ReactJs and Bootstrap - this website</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Sadhana-up"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
       
      </div>
    </section>
  );
}

export default Myprojects