import React from 'react'
import "./About.css"

function About() {
    return (
      <div className="about" id="about">
        <h1 className="header">About Me</h1>
        <p className="about_content">
          Hello. My name is Kevin Pulley and I am a Full Stack Developer.{" "}
          <br></br>I am currently looking for a junior developer role in a
          company to sharpen<br></br>
          my skills and get some experience in the real world applications of
          <br></br>
          web design. I graduated from Vanderbilt Bootcamp in January of 2021
          <br></br>
          and I am excited to begin my new career. Thanks for visiting!<br></br>
        </p>
        <h3>My Skills</h3>
        <ul className="list">
          <li>React</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node</li>
          <li>Express</li>
          <li>SQL</li>
          <li>NO SQL</li>
          <li>Mongo DB</li>
          <li>SQL</li>
        </ul>
      </div>
    );
}

export default About
