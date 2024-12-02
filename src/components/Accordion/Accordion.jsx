import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './Accordion.css';

const Service = () => {
  const data = [
    {
      title: "Custom Plasma Cutting",
      content: `From small parts to large sheets, we provide custom cutting solutions to meet your specifications.`
    },
    {
      title: "Industrial Fabrication",
      content: `Specializing in high-volume production runs for industries such as manufacturing, construction, and automotive.`
    },
    {
      title: "Prototype",
      content: `Bringing your designs to life with precision cutting for prototypes and small-batch production.`
    },
    {
      title: "Material Handling",
      content: `We work with a wide range of metals including stainless steel, mild steel, aluminum, and more.`
    }
  ];

  return <AccordionService data={data} />;
};

// Define and export the AccordionService component for reuse in other files
export const AccordionService = ({ data }) => {
  const [accordionItems, setAccordionItems] = useState(
    data.map((item) => ({ ...item, open: false }))
  );

  const handleClick = (index) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        open: i === index ? !item.open : item.open,
      }))
    );
  };

  return (
    <div className='categories'>
      
      <h1>Service Categories</h1>
      <div className="accordion">
        {accordionItems.map((item, index) => (
          <div key={index}>
            <div className="title" onClick={() => handleClick(index)}>
              <div className="arrow-wrapper">
                {item.open ? <FaChevronDown /> : <FaChevronUp />}
              </div>
              <span className="title-text">{item.title}</span>
            </div>
            <div className={item.open ? "content content-open" : "content"}>
              <div className={item.open ? "content-text content-text-open" : "content-text"}>
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

// Export the main component with the desired name
export default Service;
