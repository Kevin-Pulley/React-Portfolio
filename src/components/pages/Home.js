import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Cards from '../Cards/Cards'
import About from '../About/About'
import Footer from "../Footer/Footer"

function Home() {
    return (
        <>
          <HeroSection/>  
          <Cards/>
          <About/>
          <Footer/>
        </>
    )
}

export default Home
