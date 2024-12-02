import React, { useEffect } from 'react';
import './keyservice.css';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
const Keyservice = () => {
    const services = [
        {
            title: 'Precision Metal Cutting',
            discount: 'Upto 25%',
            buttonText: 'Get Quote',
            image: 'https://amandagabbardbeauty.com/c/img/promo-1.jpg'
        },
        {
            title: 'Custom designs and prototypes',
            discount: 'Upto 25%',
            buttonText: 'Get Quote',
            image: 'https://amandagabbardbeauty.com/c/img/promo-2.jpg'
        },
        {
            title: 'Fast turnaround times',
            discount: 'Upto 25%',
            buttonText: 'Get Quote',
            image: 'https://amandagabbardbeauty.com/c/img/promo-3.jpg'
        },
        {
            title: 'Large-scale production capabilities',
            discount: 'Upto 25%',
            buttonText: 'Get Quote',
            image: 'https://st3.depositphotos.com/1000647/12893/i/450/depositphotos_128939658-stock-photo-cnc-laser-plasma-cutting-of.jpg'
        }
        
        
    ];

    useEffect(() => {
      const handleScroll = () => {
          const parallax = document.querySelector('.service-parent');
          const offset = window.pageYOffset;
          parallax.style.backgroundPositionY = `${offset * 0.01}px`; // Adjust the speed here
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  

    return (
        <div className="service-parent">
            <div className="service-head">
                <h1>Our Plasma Cutting Capabilities</h1>
            </div>
            < motion.div
            variants={fadeIn('left',0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.1}}
             className="service-cards-container">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-card"
                        style={{ backgroundImage: `url(${service.image})` }}
                    >
                        <motion.div
                          variants={fadeIn('left',0.9)}
                          initial="hidden"
                          whileInView={"show"}
                          viewport={{once:false, amount:0.1}}
                          className="service-card-overlay">
                            <div className="service-border">
                                <h3>{service.title}</h3>
                                <p>{service.discount}</p>
                                <button className="quote-button">{service.buttonText}</button>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Keyservice;
