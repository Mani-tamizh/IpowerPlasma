import React from "react";
import BlogCard from "./BlogOne";
import './BlogList.css'
const BlogList = () => {
  const blogs = [
    {
      id :'1',
      image: "https://img.freepik.com/premium-photo/cutting-metal-with-plasma-equipment_731790-107939.jpg?size=626&ext=jpg&ga=GA1.1.1058617071.1704534102&semt=ais_hybrid-rr-similar",
      author: "Metaliq",
      date: "July 4, 2024",
      title: "Benefits of Plasma Cutting for Industrial Applications",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      link: "post1"
    },
    {
      id :'2',
      image: "https://img.freepik.com/premium-photo/cutting-metal-with-plasma-equipment_731790-108252.jpg?size=626&ext=jpg&ga=GA1.1.1058617071.1704534102&semt=ais_hybrid-rr-similar",
      author: "Metaliq",
      date: "July 4, 2024",
      title: "How Plasma Cutting Can Reduce Production Costs",
      description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those...",
      link: "post2"
    },
    {
      id :'3',
      image: "https://img.freepik.com/premium-photo/cutting-metal-with-plasma-equipment_731790-106271.jpg?size=626&ext=jpg&ga=GA1.1.1058617071.1704534102&semt=ais_hybrid-rr-similar",
      author: "Metaliq",
      date: "July 4, 2024",
      title: "Innovations in CNC Plasma Technology",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in...",
      link: "/blog/post3"
    },
  ];

  return (
    <div className="blog-list">
        <h1>//More Blogs//</h1>
      <h2 className="section-title">Stay Updated with Our Latest News and Blog</h2>
      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
