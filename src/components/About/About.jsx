import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaAngleDoubleRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import { fadeIn } from '../Intro/variants';
import { FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  return ( 
    
    <motion.div
        variants={fadeIn('left',0.7)}
        initial="hidden"
        animate="show"
        whileInView={"show"}
        viewport={{once:false, amount:0.8}}
     className="about-parent">

      <motion.div
        variants={fadeIn('left',0.7)}
        initial="hidden"
        animate="show"
        whileInView={"show"}
        viewport={{once:false, amount:0.8}} 
        
        className="about-hero">
          <motion.h1
            variants={fadeIn('left',0.7)}
            initial="hidden"
            animate="show"
            whileInView={"show"}
            viewport={{once:false, amount:0.8}} 
          >About Us</motion.h1>
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
            <Breadcrumb.Item className='breadcrumb'>About us</Breadcrumb.Item>
          </Breadcrumb>
      </motion.div>
      {/* <div className="Mission-parent">
        <div className='mission-img'>
            <img src="https://img.freepik.com/premium-photo/laser-cut-engraving-metallurgy-milling-plasma-cutting-metal-cnc-concept-background-modern-indus_1022426-19009.jpg?w=360" alt="" />
        </div>
        <div className="mission-content">
            <h1><span>//</span> Our Mission <span>//</span></h1>
            <div className="inner-content">
                <h2>I Power Plasma</h2>
                <p>At I Power Plasma , we are committed to delivering precision and
                excellence in every cut. With 10 years of experience in the industry, we
                pride ourselves on offering top-tier plasma cutting services to a wide range
                of industries.</p>
            </div>
        </div>
      </div> */}
       <motion.div 
      className="mission-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Section with Image */}
      <div className="mission-image-section">
        <img src="https://img.freepik.com/premium-photo/laser-cut-engraving-metallurgy-milling-plasma-cutting-metal-cnc-concept-background-modern-indus_1022426-19009.jpg?w=360" alt="Welding" className="mission-image" />
      </div>

      {/* Right Section with Content */}
      <div className="mission-content-section">
        <h2 className="about-label">// Our Mission //</h2>
        <h1 className="mission-title">I Power Plasma</h1>
        <p className="mission-description">
            At I Power Plasma , we are committed to delivering precision and
            excellence in every cut. With 10 years of experience in the industry, we
            pride ourselves on offering top-tier plasma cutting services to a wide range
            of industries.
        </p>
        <button className="learn-more-button">Learn More ➔</button>
      </div>
    </motion.div>
    </motion.div>
  );
};

export default AboutUs;
