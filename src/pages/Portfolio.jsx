import React from 'react'
import Header from '../header/header'
import Portfoliolanding from '../components/Portfolio/Portfolio-landing'
import Portfoliopage from '../components/Portfolio/Portfoliopage'
import TestimonialSlider from '../components/Portfolio/Testimonial'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react'
const Portfolio = () => {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);
  return (
    <>
        <Header/>
        <Portfoliolanding/>
        <Portfoliopage/>
        <TestimonialSlider/>
        <Footer/>
    </>
  )
}

export default Portfolio