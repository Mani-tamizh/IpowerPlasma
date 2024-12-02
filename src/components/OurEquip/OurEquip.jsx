import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {motion} from 'framer-motion'
import { fadeIn } from '../Intro/variants';
import './OurEquip.css'; // Import custom CSS for styling

const OurEquip = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
    },
      },
    ],
  };

  const services = [
    {
      title: 'Precision CNC Plasma Cutting',
      description: 'Our CNC-enabled plasma cutters ensure accurate and consistent results, perfect...',
      image: 'https://img.freepik.com/premium-photo/cutting-metal-with-plasma-equipment_731790-103719.jpg?size=626&ext=jpg&ga=GA1.1.1058617071.1704534102&semt=ais_hybrid-rr-similar',
    },
    {
      title: 'High-Speed Cutting Solutions',
      description: 'Boost productivity with our high-speed plasma cutting machines. Designed for rapid operation...',
      image: 'https://img.freepik.com/premium-photo/cutting-metal-with-plasma-equipment_731790-106141.jpg?size=626&ext=jpg&ga=GA1.1.1058617071.1704534102&semt=ais_hybrid-rr-similar',
    },
    {
      title: 'Automated Accuracy Control',
      description: 'Our machinery features automated control systems for precise adjustments...',
      image: 'https://img.freepik.com/premium-photo/cutting-metal-with-plasma-equipment_731790-107790.jpg?size=626&ext=jpg&ga=GA1.1.1058617071.1704534102&semt=ais_hybrid-rr-similar',
    },
  ];

  return (
    <motion.section
      variants={fadeIn('left',0.7)}
      initial="hidden"
      animate="show"
      whileInView={"show"}
      viewport={{once:false, amount:0.8}}
     className="service-slider">
        <h1>Our Equipment</h1>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="service-slide">
            <div className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </motion.section>
  );
};

export default OurEquip;