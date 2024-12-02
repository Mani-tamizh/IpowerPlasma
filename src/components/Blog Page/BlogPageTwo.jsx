import React from 'react';
import { CgProfile } from "react-icons/cg";
import { FaCalendarAlt } from "react-icons/fa";
import Sidebar from '../../components/Blog Page/Sidebar';
import './BlogPageOne.css';
import blogData from '../../data/BlogPageTwodata.json'; 

const BlogPageTwo = () => {
  const blog = blogData[0]; 

  // Check if blog post was found
  if (!blog) {
    return <div>Blog post not found</div>;
  }

  // Destructure properties safely
  const { title, author, date, image, content } = blog;

  return (
    <div className='blogone-parent'>
      <div className="blogone-content">
        <div className="blog-head">
          <h1>{title}</h1>
          <h2><CgProfile /> {author} <FaCalendarAlt className='calen' /> {date}</h2>
        </div>
        <div className="blogone">
          <img src={image.src} alt={image.alt} />
        </div>
        {content.map((section, index) => (
          <div className="b-content-1" key={index}>
            <h1>{section.heading}</h1>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
      <Sidebar />
    </div>
  );
};

export default BlogPageTwo;
