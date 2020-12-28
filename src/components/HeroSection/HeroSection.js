import React from 'react'
import { Button } from '../Button/Button'
import "./HeroSection.css"
import "../../App.css"

function HeroSection() {
    return (
      <div className="hero-container" id="home">
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1>KEVIN PULLEY JUNIOR DEVELOPER</h1>
        <div className="hero-btns">
      
         
        </div>
      </div>
    );
}

export default HeroSection
