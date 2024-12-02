import React, { useState } from 'react';
import './Wcu.css';
import { useEffect } from 'react';
import icon1 from '../../assets/images/1.png';
import icon2 from '../../assets/images/2.png';
import icon3 from '../../assets/images/3.png';
import icon4 from '../../assets/images/4.png';
import icon5 from '../../assets/images/5.png';
import icon6 from '../../assets/images/6.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../Intro/variants';
import bgvideo from '../../assets/images/About.mp4'; // Adjust the path as needed

const Wcu = () => {
  const [focusedCard, setFocusedCard] = useState(null);

  const handleMouseOver = (id) => {
    setFocusedCard(id);
  };

  const handleMouseOut = () => {
    setFocusedCard(null);
  };

  // Define colors for each head
  const colors = [
    '#ffcccc',
    '#ccffcc',
    '#ffcccc',
    '#ffffcc',
    '#ccffff',
    '#ffffcc'
  ];

  // JSON data with icon paths
  const data = [
    {
      id: "card1",
      head: 1,
      title: "State-of-the-art CNC plasma cutting machines",
      icon: icon1
    },
    {
      id: "card2",
      head: 2,
      title: "Expertise in handling various materials",
      icon: icon2
    },
    {
      id: "card3",
      head: 3,
      title: "Competitive pricing",
      icon: icon3
    },
    {
      id: "card4",
      head: 4,
      title: "Skilled technicians with years of experience",
      icon: icon4
    },
    {
      id: "card5",
      head: 5,
      title: "On-time delivery guaranteed",
      icon: icon5
    },
    {
      id: "card6",
      head: 6,
      title: "Excellent customer service and support",
      icon: icon6
    }
  ];

  return (
    <div className="why-choose-us">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <h1>Why Work with Us</h1>
      {/* First group of three cards */}
      <motion.div
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="cards-container1"
      >
        {data.slice(0, 3).map((item) => (
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            key={item.id}
            className={`card ${focusedCard === item.id ? 'focused' : ''}`}
            onMouseOver={() => handleMouseOver(item.id)}
            onMouseOut={handleMouseOut}
          >
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }} className="cards1-head"
            >
              <div className="head-img" style={{ backgroundColor: colors[item.head - 1] }}>
                <img src={item.icon} alt={item.title} className="card-icon" />
              </div>
            </motion.div>
            <h2>{item.title}</h2>
          </motion.div>
        ))}
      </motion.div>
      {/* Second group of three cards */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="cards-container2"
      >
        {data.slice(3, 6).map((item) => (
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            key={item.id}
            className={`card ${focusedCard === item.id ? 'focused' : ''}`}
            onMouseOver={() => handleMouseOver(item.id)}
            onMouseOut={handleMouseOut}
          >
            <motion.div
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }} className="cards1-head"
            >
              <div className="head-img" style={{ backgroundColor: colors[item.head - 1] }}>
                <img src={item.icon} alt={item.title} className="card-icon" />
              </div>
            </motion.div>
            <h2>{item.title}</h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Wcu;
