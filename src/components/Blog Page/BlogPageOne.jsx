import React from 'react';
import { useParams } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaCalendarAlt } from "react-icons/fa";
import Sidebar from '../../components/Blog Page/Sidebar';
import './BlogPageOne.css';
import blogData from '../../data/BlogPageOnedata.json'; // Assuming the JSON data is saved in BlogPageOnedata.json

const BlogPageOne = () => {
  const { id } = useParams();
  const blog = blogData.find(post => post.id === id);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className='blogone-parent'>
      <div className="blogone-content">
        <div className="blog-head">
          <h1>{blog.title}</h1>
          <h2><CgProfile /> {blog.author} <FaCalendarAlt className='calen' /> {blog.date}</h2>
        </div>
        <div className="blogone">
          <img src={blog.image.src} alt={blog.image.alt} />
        </div>
        {blog.content.map((section, index) => (
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

export default BlogPageOne;
