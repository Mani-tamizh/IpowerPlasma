import React from 'react'
import Header from '../header/header'
import Footer from '../components/Footer/Footer'
import BlogLanding from '../components/Blog/BlogLanding'
import BlogPageOne from '../components/Blog Page/BlogPageOne'
import { useEffect } from 'react'
const BlogPageOneMain = () => {
  useEffect(() => {
    document.title = 'Blogs';
  }, []);
  return (
    <div>
        <Header/>
        <BlogLanding/>
        <BlogPageOne/>
        <Footer/>
    </div>
  )
}

export default BlogPageOneMain