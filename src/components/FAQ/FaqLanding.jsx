import React from 'react'
import './FaqLanding.css'
import '../About/About.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaAngleDoubleRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import { fadeIn } from '../Intro/variants';
import { Link } from 'react-router-dom';
const FaqLanding = () => {
  return (
    <div className='Faqlanding'>
        <h1>FAQ</h1>
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
            <Breadcrumb.Item className='breadcrumb'>FAQ</Breadcrumb.Item>
          </Breadcrumb>
    </div>
  )
}

export default FaqLanding