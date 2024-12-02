import React from 'react'
import Header from '../header/header'
import Service from '../components/Service/Service'
import AccordionService from '../components/Accordion/Accordion'
import WeServe from '../components/WeServe/WeServe'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react'
const ServiceUs = () => {
  useEffect(() => {
    document.title = 'Service';
  }, []);
  return (
    <>
        <Header/>
        <Service/>
        <AccordionService/>
        <WeServe/>
        <Footer/>
    </>
  )
}

export default ServiceUs