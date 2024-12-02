import React from 'react'
import './Portfoliolanding.css'
import '../About/About.css';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaAngleDoubleRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import { fadeIn } from '../Intro/variants';
import { FaCheckCircle } from "react-icons/fa";
const Portfoliolanding = () => {
  return (
    <div className='portfolio'>
        <h1>Portfolio</h1>
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
            <Breadcrumb.Item className='breadcrumb'>Portfolio</Breadcrumb.Item>
          </Breadcrumb>
    </div>
  )
}

export default Portfoliolanding;