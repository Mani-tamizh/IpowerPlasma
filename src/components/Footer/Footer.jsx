import React, { useEffect, useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import footerData from '../../data/footerdata.json';  // Adjust the path if necessary

const Footer = () => {
  const [moreLinks, setMoreLinks] = useState([]);
  const [popularStores, setPopularStores] = useState([]);
  const [subscriptionText, setSubscriptionText] = useState({});
  const [footerBottom, setFooterBottom] = useState('');

  useEffect(() => {
    // Load data from JSON
    setMoreLinks(footerData.moreLinks);
    setPopularStores(footerData.popularStores);
    setSubscriptionText(footerData.subscriptionText);
    setFooterBottom(footerData.footerBottom);
  }, []);

  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="fotr_container">
              <hr />
              <div className="nav_links">
                <div className="logo">
                  <img src="https://metaliq-wordpress.technowebstore.com/wp-content/uploads/2023/12/f-logo-2.png" alt="" />
                  <p>From the moment our company was founded, we have helped our clients find exceptional solutions for their businesses.</p>
                </div>
                <div className="ftr-contact">
                  <h1>Contact Me</h1>
                  <p>33 Road Ritchy Street, New York USA</p>
                  <p>ipowerplasma@company.com</p>
                  <p>+1 444 676 88</p>
                </div>
                {/* More Links Section */}
                <div className="ftr_links">
                  <h2 className="ftr_heading">Quick Links</h2>
                  <ul className="ftr_links_wrpr">
                    {moreLinks.map((link, index) => (
                      <li key={index}>
                        <Link to={link.path}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="9 6 15 12 9 18" />
                          </svg>
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular Stores Section */}
                <div className="ftr_links">
                  <h2 className="ftr_heading">More Links</h2>
                  <ul className="ftr_links_wrpr">
                    {popularStores.map((store, index) => (
                      <li key={index}>
                        <Link to={store.path}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="9 6 15 12 9 18" />
                          </svg>
                          {store.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <hr />
              <div className="ftr_bottom">
                <p>{footerBottom}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
