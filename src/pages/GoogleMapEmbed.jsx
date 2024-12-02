import React from 'react';

const GoogleMapEmbed = () => {
  return (
    <div style={{ width: '100%', height: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'20px', borderRadius:'10px', marginBottom:'20px'}}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4373148.308041156!2d-9.964820633833304!3d57.6429395947504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4861e2c403f2a19f%3A0xe7c1fad809c30714!2sScotland%2C%20UK!5e0!3m2!1sen!2sin!4v1728989883308!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
