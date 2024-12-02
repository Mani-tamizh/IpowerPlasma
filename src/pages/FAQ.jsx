import React from 'react'
import Header from '../header/header'
import FAQ from '../components/FAQ/Faq'
import FaqLanding from '../components/FAQ/FaqLanding'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react'
const FAQMain = () => {
  useEffect(() => {
    document.title = 'FAQ';
  }, []);
  return (
    <>
        <Header/>
        <FaqLanding/>
        <FAQ/>
        <Footer/>
    </>
  )
}

export default FAQMain