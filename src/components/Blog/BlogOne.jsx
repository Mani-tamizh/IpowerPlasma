import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";


const BlogCard = ({ image, author, date, title, description, link }) => {
  return (
    <div className="blog-">
        <div className="blog-card">
            <div className="image-container">
                <img src={image} alt={title} className="blog-image" />
            </div>
            <div className="content">
                <div className="metadata">
                <span className="author">
                    <i className="fa fa-user"></i> {author}
                </span>
                <span className="date">
                    <i className="fa fa-calendar"></i> {date}
                </span>
                </div>
                <h3 className="blog-title">{title}</h3>
                <p className="description">{description}</p>
                <Link to={`/blog/${link}`} className="read-more">Read More</Link>
            </div>
        </div>
    </div>
  );
};

export default BlogCard;
