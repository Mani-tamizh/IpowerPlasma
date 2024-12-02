import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="search-bar">
        <input type="text" placeholder="Type here" className="search-input" />
      </div>
      
      <div className="categories">
        <h3>Categories</h3>
        <ul>
          <li>STEEL WELDING</li>
          <li>METAL WORKS</li>
          <li>PIPE WELDING</li>
          <li>MANUFACTURING</li>
          <li>FABRICATION</li>
          <li>ALUMINUM SYSTEM</li>
        </ul>
      </div>
      
      <div className="recent-posts">
        <h3>Recent Posts</h3>
        <div className="post-item">
          <img src="https://img.freepik.com/premium-photo/welding-steel-structure_731790-108254.jpg" alt="Recent Post 1" />
          <p>Minimalist trending in modern architecture 2023</p>
        </div>
        <div className="post-item">
          <img src="https://img.freepik.com/premium-photo/welding-steel-structure_731790-108254.jpg" alt="Recent Post 1" />
          <p>Minimalist trending in modern architecture 2023</p>
        </div>
        <div className="post-item">
          <img src="https://img.freepik.com/premium-photo/welding-steel-structure_731790-108254.jpg" alt="Recent Post 1" />
          <p>Minimalist trending in modern architecture 2023</p>
        </div>
        <div className="post-item">
          <img src="https://img.freepik.com/premium-photo/welding-steel-structure_731790-108254.jpg" alt="Recent Post 1" />
          <p>Minimalist trending in modern architecture 2023</p>
        </div>
        {/* Add more post items as needed */}
      </div>
    </div>
  );
};

export default Sidebar;
