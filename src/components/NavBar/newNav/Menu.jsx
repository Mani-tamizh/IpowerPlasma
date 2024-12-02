import { motion } from "framer-motion";
import './Menu.css';
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
 
const Underline = () => (
  <motion.div
    className="absolute -bottom-1 left-0 right-0 h-1 bg-white"
    layoutId="underline"
    layout
  ></motion.div>
);
 
const NiceMenu = () => {
  const [menuItemsOpen, setMenuItemsOpen] = useState([false, false, false, false]);
 
  // Function to handle mouse enter/leave
  const handleMouseEnter = (index) => {
    setMenuItemsOpen((prevOpen) => prevOpen.map((open, i) => i === index));
  };
 
  const handleMouseLeave = (index) => {
    setMenuItemsOpen((prevOpen) =>
      prevOpen.map((open, i) => (i !== index ? open : false))
    );
  };
 
  // Menu items definition
  const menuItems = [
    {
      text: "Services",
      subItems: [
        {
          head: "Our Services",
          items: [
            { title: "Conversational AI service", text: "ReImagine Machine-to- Human Interactions On The Canvas of AI", img: 'https://www.purpleslate.com/wp-content/uploads/2022/12/Menu-Icn_Menu-icn-001-02.svg', path: '/Convoservice' },
            { title: "Digital Transformation Service", text: "Our Engineering Epicenter Of Indefinite Posibilities ", img: 'https://www.purpleslate.com/wp-content/uploads/2022/12/Menu-Icb-001_Menu-icn-001-02.svg', path: '/DigitalParent' }
          ]
        },
        {
          head: "Featured Read",
          items: [
            {  title: "Enhancing CX with Conversational Commerce", text: "Read more ", img: 'https://www.purpleslate.com/wp-content/uploads/2023/03/img_3.png', path: '/EnhanceParent' },
            { title: "Choosing the Right Digit  al Partner", text: "Read more", img: 'https://www.purpleslate.com/wp-content/uploads/2023/03/img_4.png', path: '/Transformation' }
          ]
        }
      ]
    },
    {
      text: "Company",
      subItemsleft: [
        { title: "About Us", text: "Driven By Passion and Proven By Results",img:"https://www.purpleslate.com/wp-content/uploads/2022/12/Ab-icn_About.svg", path: '/about' },
        { title: "Contact Us", text: "Excited to know how our products can help future-proof your business",img:"https://www.purpleslate.com/wp-content/uploads/2022/12/Ab-icn_contact.svg", path: '/contact' },
        { title: "Career", text: "join us on our million to create and build a digital future",img:"https://www.purpleslate.com/wp-content/uploads/2022/12/Ab-icn_career.svg", path: '/careers' },
        { title: "Events", text: "On-demands Webinar on how Conversational AI is changing world forever", img:"https://www.purpleslate.com/wp-content/uploads/2022/12/Ab-icn_events.svg", path: '/events' }
      ],
      subItemsright:[
        {
         img:"https://images.pexels.com/photos/221537/pexels-photo-221537.jpeg?auto=compress&cs=tinysrgb&w=600",
        }
       
      ],
    },
    {
      text: "Resources",
      subItemleftresource:[
        {
         img:"https://www.purpleslate.com/wp-content/uploads/2022/11/Human-Resource-IMG-01-10.jpg",
        }
       
      ],
      subItemsrightresource: [
        {
          title: "Blogs",
          text: "Random Thoughts about Data, AI and mostly Technology",
          img: 'https://www.purpleslate.com/wp-content/uploads/2022/12/Thought-Icn-01.svg',
          path: '/blog'  // Add a link to the item
        },
        {
          title: "Case Studies",
          text: "Gain in-depth information on how we revolutionize data insights, customer experience, and more",
          img: 'https://www.purpleslate.com/wp-content/uploads/2022/12/Perspective-Icn-001.svg',
          path: '/casestudies' // Add a link to the item
        },
        {
          title: "Guides",
          text: "Learn how Conversational AI can make a difference",
          img: 'https://www.purpleslate.com/wp-content/uploads/2022/12/Menu-Icn_Menu-icn-001-02.svg',
          path: '/guide'  // Add a link to the item
        }
      ]
    }
  ];
 
  const ResourceMap = (resource) => {
    switch (resource) {
      case "left":
        return "subItemleftresource";
      case "right":
        return "subItemsrightresource";
      default:
        return "";
    }
  };
 
  // Destructure the first item and the remaining items
  const [firstMenuItem, ...remainingMenuItems] = menuItems;
 
  return (
    <div className="w-fit">
      <motion.div className="d-flex heroo">
        {/* First Menu Item */}
        <MenuItem
          key={0}
          text={firstMenuItem.text}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        >
          {menuItemsOpen[0] && (
            <div
              className="absolute top-full left-0 grill"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              <div className="drill">
                {/* Rendering Our Services separately */}
                <div className="sub-parent">
                  <div className="sub-head">
                    <h5>{firstMenuItem.subItems[0].head}</h5>
                  </div>
                  <div className="sub-content">
                    {firstMenuItem.subItems[0].items.map((item, itemIndex) => (
                      <div key={itemIndex} className="sub-img">
                        <img src={item.img} alt={item.title} className="w-10 h-10 mr-2" />
                        <NavLink to={item.path}>
                          <p className="font-bold text-gray-800 text-md">
                            <span id="title-color">{item.title}</span> <br/> <span id="title-subtext">{item.text}</span>
                          </p>
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
 
                {/* Separating Featured Read section */}
                <div className="sub-parent" id="rightcontent">
                  <div className="sub-head">
                    <h5>{firstMenuItem.subItems[1].head}</h5>
                  </div>
                  <div className="sub-content">
                    {firstMenuItem.subItems[1].items.map((item, itemIndex) => (
                      <div key={itemIndex} className="sub-img">
                        <img src={item.img} alt={item.title} className="w-20 h-5 mr-2" id="imgsize"/>
                        <NavLink to={item.path}>
                          <p className="font-bold text-gray-800  text-md">
                            <span id="title-color">{item.title}</span>  <br/><span id="title-subtext">{item.text}&#x2192;</span>
                          </p>
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </MenuItem>
 
        {/* Company Menu Item */}
        <MenuItem
          key={1}
          text={menuItems[1].text}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          {menuItemsOpen[1] && (
            <div
              className="absolute top-full left-0 grill-comp"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              <div className="drill">
                {/* Rendering Company subItemsleft */}
                <div className="sub-parent">
                 
                  <div className="sub-content company-content ">
                    {menuItems[1].subItemsleft.map((item, itemIndex) => (
                      <div key={itemIndex} className="company">
                         <img src={item.img} alt={item.title} className="" id="imgscompany-data"/>
                        <NavLink to={item.path}>
                          <p className="font-bold text-gray-800  text-md">
                            <span id="title-color">{item.title}</span> <br/><span id="title-subtext">{item.text}</span>
                          </p>
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
 
                {/* Rendering Company subItemsright */}
                <div className="sub-parent" id="rightcontent">
                 
                  <div className="sub-content">
                    {menuItems[1].subItemsright.map((item, itemIndex) => (
 <div key={itemIndex}>
                         <img src={item.img} alt={item.title} className="w-20 h -5 mr-2"  id="off-img"/>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </MenuItem>
 
        {/* Resources Menu Item */}
        <MenuItem
          key={2}
          text={menuItems[2].text}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          {menuItemsOpen[2] && (
            <div
              className="absolute top-full left-0 grill"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              <div className="drill">
                {/* Rendering Resources subItemleftresource */}
                <div className="sub-parent">
                  <div className="sub-content">
                    {menuItems[2][ResourceMap("left")].map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <img src={item.img} alt={item.title} className="w-30 h-5 mr-2" id="off-img"/>
                      </div>
                    ))}
                  </div>
                </div>
 
                {/* Rendering Resources subItemsrightresource */}
                <div className="sub-parent" id="rightcontent">
                  <div className="sub-content">
                    {menuItems[2][ResourceMap("right")].map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <img src={item.img} alt={item.title}  id="imgscompany-data"/>
                        <NavLink to={item.path}>
                          <p className="font-bold text-gray-800  text-md">
                            <span id="title-color">{item.title}</span> <br/><span id="title-subtext">{item.text}</span>
                          </p>
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </MenuItem>
       
      </motion.div>
    </div>
  );
};
 
const MenuItem = ({ text, children, onMouseEnter, onMouseLeave, ...props }) => {
  return (
    <motion.div
      className="px-10 relative cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="text-black relative">{text}</span>
      {children}
    </motion.div>
  );
};
 
export default NiceMenu;