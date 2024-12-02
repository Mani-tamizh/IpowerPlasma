import { motion } from "framer-motion";
import './MobileOne.css';
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileOne = () => {
    const [activeMenuIndex, setActiveMenuIndex] = useState(null); // Track the currently active menu

    // Function to handle menu clicks
    const handleMenuClick = (index) => {
        setActiveMenuIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle submenu
    };

    // Menu items definition
    const menuItems = [
        {
            text: "Services",
            subItems: [
                {
                    head: "Our Services",
                    items: [
                        { title: "Conversational AI service", text: "ReImagine Machine-to-Human Interactions On The Canvas of AI",path: '/Convoservice'},
                        { title: "Digital Transformation Service", text: "Our Engineering Epicenter Of Infinite Possibilities", path: '/DigitalParent' }
                    ]
                },
                {
                    head: "Featured Read",
                    items: [
                        { title: "Enhancing CX with Conversational Commerce", text: "Read more", path: '/resources/enhancing-cx-with-conversational-commerce',path: '/EnhanceParent' },
                        { title: "Choosing the Right Digital Partner", text: "Read more",path: '/Transformation' }
                    ]
                }
            ]
        },
        {
            text: "Company",
            subItemsleft: [
                { title: "About Us", text: "Driven By Passion and Proven By Results", path: '/about' },
                { title: "Contact Us", text: "Excited to know how our products can help future-proof your business", path: '/contact' },
                { title: "Career", text: "Join us on our mission to create and build a digital future", path: '/careers' },
                { title: "Events", text: "On-demand Webinar on how Conversational AI is changing the world forever",path: '/events'}
            ]
        },
        {
            text: "Resources",
            subItemsrightresource: [
                {
                    title: "Blogs",
                    text: "Random Thoughts about Data, AI and mostly Technology",
                    path: '/blog'
                },
                {
                    title: "Case Studies",
                    text: "Gain in-depth information on how we revolutionize data insights, customer experience, and more",
                    path: '/casestudies'
                },
                {
                    title: "Guides",
                    text: "Learn how Conversational AI can make a difference",
                    path: '/guide'
                }
            ]
        }
    ];

    return (
        <div className="menu-container">
            <motion.div className="menu-wrapper">
                {/* Render menu items */}
                {menuItems.map((menuItem, index) => (
                    <div key={index} className="menu-item-container">
                        <MenuItem
                            text={menuItem.text}
                            onClick={() => handleMenuClick(index)} // Handle menu click
                        />
                        {/* Render submenu if the menu item is active */}
                        {activeMenuIndex === index && (
                            <div className="submenu-container">
                                <div className="submenu-wrapper">
                                    {/* Render subItems for Services */}
                                    {menuItem.subItems && (
                                        <>
                                            <div className="sub-parent">
                                                <h5>{menuItem.subItems[0].head}</h5>
                                                <div className="sub-content">
                                                    {menuItem.subItems[0].items.map((item, itemIndex) => (
                                                        <div key={itemIndex} className="hibuddy">
                                                            <NavLink to={item.path}>
                                                                <p className="font-bold text-gray-800 text-md">
                                                                    <span className="title-color">{item.title}</span><br /><span className="title-subtext">{item.text}</span>
                                                                </p>
                                                            </NavLink>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="sub-parent">
                                                <h5>{menuItem.subItems[1].head}</h5>
                                                <div className="sub-content">
                                                    {menuItem.subItems[1].items.map((item, itemIndex) => (
                                                        <div key={itemIndex}>
                                                            <NavLink to={item.path}>
                                                                <p className="font-bold text-gray-800 text-md">
                                                                    <span className="title-color">{item.title}</span> <br /><span className="title-subtext">{item.text}&#x2192;</span>
                                                                </p>
                                                            </NavLink>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {/* Render subItems for Company */}
                                    {menuItem.subItemsleft && (
                                        <div className="sub-parent">
                                            <div className="sub-content">
                                                {menuItem.subItemsleft.map((item, itemIndex) => (
                                                    <div key={itemIndex}>
                                                        <NavLink to={item.path}>
                                                            <p className="font-bold text-gray-800 text-md">
                                                                <span className="title-color">{item.title}</span><br /><span className="title-subtext">{item.text}</span>
                                                            </p>
                                                        </NavLink>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Render subItems for Resources */}
                                    {menuItem.subItemsrightresource && (
                                        <div className="sub-parent">
                                            <div className="sub-content">
                                                {menuItem.subItemsrightresource.map((item, itemIndex) => (
                                                    <div key={itemIndex}>
                                                        <NavLink to={item.path}>
                                                            <p className="font-bold text-gray-800 text-md">
                                                                <span className="title-color">{item.title}</span><br /><span className="title-subtext">{item.text}</span>
                                                            </p>
                                                        </NavLink>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const MenuItem = ({ text, onClick }) => {
    return (
        <motion.div
            className="menu-item"
            onClick={onClick} // Use click instead of hover
        >
            <span className="menu-text">{text}</span>
        </motion.div>
    );
};

export default MobileOne;
