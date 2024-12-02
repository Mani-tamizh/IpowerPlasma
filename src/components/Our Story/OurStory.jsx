import React from 'react';
import './OurStory.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../Intro/variants';
import aboutVideo from '../../assets/images/about.mp4'; // Adjust path as necessary

const OurStory = () => {
  return (
    <motion.div
      variants={fadeIn('left', 0.7)}
      initial="hidden"
      animate="show"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.8 }}
      className="our-story-container"
    >
      <div className="video-container">
        <div className="video-overlay">
          <span className="play-symbol">&#9658;</span>
        </div>
        <video
          className="our-story-video"
          src={aboutVideo} // Use the correct path here
          muted
          autoPlay
          loop
          playsInline
          onError={(e) => console.error('Error loading video:', e)}
        />
      </div>
      <motion.div
        variants={fadeIn('right', 0.7)}
        initial="hidden"
        animate="show"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
        className="content"
      >
        <h2>// Our Story //</h2>
        <motion.p
          variants={fadeIn('right', 0.7)}
          initial="hidden"
          animate="show"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
        >
          At I Power Plasma, our journey began with a simple yet ambitious goal: to bring precision
          and efficiency to the world of plasma cutting. From the outset, we recognized a need in the
          market for services that could offer top-tier quality without breaking the bank.
        </motion.p>
        <motion.p
          variants={fadeIn('left', 0.7)}
          initial="hidden"
          animate="show"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
        >
          Today, I Power Plasma stands as a symbol of reliability and excellence, offering services that meet
          the diverse needs of our clients. Our mission remains the same: to empower businesses with plasma
          cutting services they can depend on.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default OurStory;
