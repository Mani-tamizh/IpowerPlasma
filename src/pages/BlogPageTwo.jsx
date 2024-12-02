import React from 'react'
import Header from '../header/header'
import Footer from '../components/Footer/Footer'
import BlogLanding from '../components/Blog/BlogLanding'
import BlogPageTwo from '../components/Blog Page/BlogPageTwo'
import { useEffect } from 'react'
const BlogPageTwoMain = () => {
  useEffect(() => {
    document.title = 'Blogs';
  }, []);
  return (
    <>
        <Header/>
        <BlogLanding/>
        <BlogPageTwo/>
        <Footer/>
    </>
  )
}

export default BlogPageTwoMain