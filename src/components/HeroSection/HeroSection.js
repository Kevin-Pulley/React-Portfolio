import React from 'react'

import "./HeroSection.css"
import "../../App.css"

function HeroSection() {
    return (
      <div className="hero-container" id="home">
        {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
        <h2>
          Hello, I'm <span className="span">Kevin Pulley.</span> <br></br>
          I'm a full-stack web developer.
        </h2>
        
      </div>
    );
}

export default HeroSection
