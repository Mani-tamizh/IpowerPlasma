import React from 'react'
import Header from '../header/header'
import Intro from '../components/Intro/Intro'
import Keyservice from '../components/Intro/Key-Service/keyservice'
import Wcu from '../components/wcu/Wcu'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react'
const HomeOne = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <div>
      <Header/>
        <Intro/>
        <Keyservice/>
        <Wcu/>
        <Footer/>
    </div>
  )
}

export default HomeOne