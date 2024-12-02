import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./header.css";
import Nav from "../data/Nav.json";

const Header = () => {
  const [headerData, setHeaderData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setHeaderData(Nav.header);
  }, []);

  if (!headerData) {
    return <div></div>; // Show loading message while fetching data
  }

  return (
    <header className="header">
      {/* Display the logo */}
      <div className="logo">{headerData.logo}</div>

      {/* Toggle button for mobile menu */}
      <div className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <span>&#x2715;</span> : <span>&#9776;</span>}
      </div>

      <nav>
        <ul className="nav-links">
          {headerData.navigation.map((navItem, index) => (
            <li key={index}>
              <Link to={navItem.path}>{navItem.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        {isOpen ?
          <motion.div
          className="mobile-menu"
          initial={{ x: "100%" }}
          animate={isOpen ? { x: 0 } : { x: "100%" }}
          transition={{ type: "spring", stiffness: 70 }}
        >
          
          <ul>
            {headerData.navigation.map((navItem, index) => (
              <li key={index}>
                <Link to={navItem.path} onClick={() => setIsOpen(false)}>
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>:''
        }
      </nav>

      {/* Quote button */}
      <button className="btn-quote">{headerData.quoteButton}</button>
    </header>
  );
};

export default Header;
