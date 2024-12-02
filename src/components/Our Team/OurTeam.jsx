import React from 'react';
import {motion} from 'framer-motion'
import { fadeIn } from '../Intro/variants';
import './OurTeam.css'; 
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

// Example data (can be imported if stored in a separate JSON file)
const teamData = [
  {
    name: "Vin Diesel",
    position: "Senior Plasma Cutter",
    image: "https://amandagabbardbeauty.com/c/img/team-1.jpg",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  },
  {
    name: "David Corner",
    position: "Junior Plasma Cutter",
    image: "https://amandagabbardbeauty.com/c/img/team-3.jpg",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  },
  {
    name: "Tom Cruise",
    position: "Welder",
    image: "https://amandagabbardbeauty.com/c/img/team-4.jpg",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  },
  {
    name: "Benny",
    position: "Engineer",
    image: "https://metaliq-wordpress.technowebstore.com/wp-content/uploads/2024/07/t1.png",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  }
];

const OurTeam = () => {
  return (
    <motion.div
      variants={fadeIn('left',0.7)}
      initial="hidden"
      animate="show"
      whileInView={"show"}
      viewport={{once:false, amount:0.8}} className="main">
      <h1>Our Team</h1>
      <h2>Experts Team</h2>
      <motion.div
        variants={fadeIn('left',0.7)}
        initial="hidden"
        animate="show"
        whileInView={"show"}
        viewport={{once:false, amount:0.8}}
        className='profile-parent'>
        {teamData.map((member, index) => (
          <motion.div 
            variants={fadeIn('right',0.7)}
            initial="hidden"
            animate="show"
            whileInView={"show"}
            viewport={{once:false, amount:0.8}}
          className="profile-card" key={index}>
            
            <div className="img">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="caption">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <div className="social-links">
                <a href={member.socialLinks.facebook}><FaFacebook /></a>
                <a href={member.socialLinks.instagram}><FaInstagram /></a>
                <a href={member.socialLinks.twitter}><FaTwitter /></a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default OurTeam;
