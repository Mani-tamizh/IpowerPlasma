import React from 'react'
import { Link } from 'react-router-dom';
import '../About/About.css';
import './BlogLanding.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaAngleDoubleRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import { fadeIn } from '../Intro/variants';

const BlogLanding = () => {
  return (
    <div className='bloglanding'>
        <h1>BLOGS</h1>
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
    </div>
  )
}

export default BlogLanding