import React, { useState } from 'react';
import './ContactUs.css';
import data from '../../data/ContactData.json';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { div } from 'framer-motion/client';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add logic to send form data to a server here.
  };

  return (
    <div className='parent-contact'>
        <div className="contact-info">
            <h2>// Need Any Help //</h2>
            <h3>Get in touch with us</h3>
            <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            
            <div className="info-item">
                <div className="info-icon"><BsFillTelephoneFill className='contact-icons' />
                    </div>
                <div>
                <h4>Have any question?</h4>
                <p>Free +1 3333 *** 444</p>
                </div>
            </div>
            
            <div className="info-item">
                <div className="info-icon"><MdEmail className='contact-icons'/>
                </div>
                <div>
                <h4>Write email</h4>
                <p>hello@company.com</p>
                </div>
            </div>
            
            <div className="info-item">
                <div className="info-icon"><FaLocationDot className='contact-icons'/></div>
                <div>
                <h4>Visit anytime</h4>
                <p>33 Road Brooklyn Street, 600 New York, USA</p>
                </div>
            </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
            <h2>// Send Us Email //</h2>
            <h3>Feel free to write</h3>
            <div>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                
                <input type="date" name="date" placeholder="mm/dd/yyyy" value={formData.date} onChange={handleChange} required />
            </div>
            <div>
                <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="" disabled>Select Service</option>
                    {data.services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                    ))}
                </select>

                <input type="text" name="subject" placeholder="Subjects" value={formData.subject} onChange={handleChange} required />
            </div>
            
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
            
            <button type="submit">Contact Us</button>
        </form>
    </div>
  );
}

export default ContactForm;
