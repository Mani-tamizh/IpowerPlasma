import React, { useState } from "react";
import "./Intro.css";
import { motion } from 'framer-motion';

const Intro = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Ipower Plasma Cutting Services for All Your Metal Needs',
      image: 'https://images.pexels.com/photos/27084612/pexels-photo-27084612/free-photo-of-close-up-of-sparks-flying-from-metal-grinding-process.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'speed.'
    },
    {
      title: 'Ipower Plasma Cutting Services for All Your Metal Needs',
      image: 'https://images.pexels.com/photos/4315559/pexels-photo-4315559.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'accuracy.'
    },
    {
      title: 'Ipower Plasma Cutting Services for All Your Metal Needs',
      image: 'https://as2.ftcdn.net/v2/jpg/08/15/41/19/1000_F_815411984_zL5Cg3dHrT1jCgDcbADUZ2Re1D1wnQaU.jpg',
      description: 'cost-efficiency.'
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // Animation variants for h1 and h2 with blur effect
  const h1Variants = {
    hidden: { x: -100, opacity: 0, filter: 'blur(10px)' },
    show: { x: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.6 } },
  };

  const h2Variants = {
    hidden: { x: 100, opacity: 0, filter: 'blur(10px)' },
    show: { x: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.6 } },
  };

  // Animation variants for the button
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="carousel-container" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
      <motion.div
        key={currentSlide}
        className="carousel-content"
      >
        {/* Motion animation for h1 */}
        <motion.h1
          className="carousel-title"
          variants={h1Variants}
          initial="hidden"
          animate="show"
        >
          {slides[currentSlide].title}
        </motion.h1>
        {/* Motion animation for h2 */}
        <motion.h2
          className="carousel-description"
          variants={h2Variants}
          initial="hidden"
          animate="show"
        >
          Offering high-quality custom metal cutting with {slides[currentSlide].description}
        </motion.h2>
        
        {/* Button with animation */}
        <motion.button
          className="Btn-success"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          View Our Success
        </motion.button>
      </motion.div>
      <div className="carousel-navigation">
        <button className="custom-arrow left" onClick={handlePreviousSlide}>
          &lt;
        </button>
        <button className="custom-arrow right" onClick={handleNextSlide}>
          &gt;
        </button>
      </div>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-navigation-button ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Intro;
