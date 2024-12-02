import React from 'react'
import ContactForm from './ContactForm'
import ContactLanding from './ContactLanding'
import Header from '../../header/header';
import  GoogleMapEmbed from '../../pages/GoogleMapEmbed'
import Footer from '../Footer/Footer'
import { useEffect } from 'react'
const ContactUs = () => {
  useEffect(() => {
    document.title = 'Contact Us';
  }, []);
  return (
    <>
        <Header/>
        <ContactLanding/>
        <ContactForm/>
        <GoogleMapEmbed/>
        <Footer/>
    </>
  )
}

export default ContactUs