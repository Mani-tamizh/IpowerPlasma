import React from 'react'
import Header from '../header/header';
import AboutUs from '../components/About/About';
import OurStory from '../components/Our Story/OurStory'
import OurTeam from '../components/Our Team/OurTeam';
import OurEquip from '../components/OurEquip/OurEquip';
import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';
const About = () => {
  
  useEffect(() => {
    document.title = 'About Us';
  }, []);
  return (
    <>
        <Header />
        <AboutUs />
        <OurStory/>
        <OurTeam/>
        <OurEquip/>
        <Footer/>
    </>
  )
}

export default About