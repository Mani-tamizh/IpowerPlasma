import React from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import { fadeIn } from '../Intro/variants'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaAngleDoubleRight } from "react-icons/fa";
import './Service.css'
const Service = () => {
  return (
    <div>
        <motion.div
        variants={fadeIn('left',0.7)}
        initial="hidden"
        animate="show"
        whileInView={"show"}
        viewport={{once:false, amount:0.8}} 
        
        className="service-hero">
          <motion.h1
            variants={fadeIn('left',0.7)}
            initial="hidden"
            animate="show"
            whileInView={"show"}
            viewport={{once:false, amount:0.8}} 
          >Our Service</motion.h1>
          <Breadcrumb
            variants={fadeIn('left',0.7)}
            initial="hidden"
            animate="show"
            whileInView={"show"}
            viewport={{once:false, amount:0.8}} 
          >
            <Breadcrumb.Item className='breadcrumb'>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <span className="breadcrumb-separator"><FaAngleDoubleRight className="icon
            "/></span>
            <Breadcrumb.Item className='breadcrumb'>Our Service</Breadcrumb.Item>
          </Breadcrumb>
      </motion.div>
      <div className="overview">
        <div className="left-service">
          
        </div>
        <div className="right-service">
          <h1>Overview of Plasma Cutting Services</h1>
          <p>We provide professional plasma cutting services for custom projects, industrial applications, and more. Our advanced machinery can handle a variety of materials with precision.”</p>
        </div>
      </div>
      
    </div>
  )
}

export default Service