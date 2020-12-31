import React from 'react'
import "./About.css"

function About() {
    return (
      <div className="about" id="about">
        <h1 className="about__header">About Me </h1>
        <p className="about__content">
          Hello. My name is Kevin Pulley and I am a Full Stack Developer.{" "}
          <br></br>I am currently looking for a junior developer role in a
          company to sharpen<br></br>
          my skills and get some experience in the real world applications of
          <br></br>
          web design. I graduated from Vanderbilt Bootcamp in January of 2021
          <br></br>
          and I am excited to begin my new career. Thanks for visiting!<br></br>
        </p>
        <h2 className="about__h2">My Skills</h2>
        <ul className="list">
          <li className="footer__icons">
            <i class="fab fa-react fa-4x"></i>
          </li>
          <li className="footer__icons">
            <i class="fab fa-js-square fa-4x"></i>
          </li>
          <li className="footer__icons">
            <i class="fab fa-node fa-4x"></i>
          </li>
          <li className="footer__icons">
            <i class="fab fa-html5 fa-4x"></i>
          </li>
          <li className="footer__icons">
            <i class="fab fa-css3 fa-4x"></i>
          </li>
          <li className="footer__icons">
            <i class="fas fa-database fa-4x"></i>
          </li>
        </ul>
      </div>
    );
}

export default About
