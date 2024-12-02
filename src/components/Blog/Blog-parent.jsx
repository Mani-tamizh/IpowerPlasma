import React from 'react'
import Header from '../../header/header';
import BlogLanding from './BlogLanding';
import BlogList from './BlogList';
import Footer from '../Footer/Footer';
const BlogParent = () => {
  return (
    <div>
        <Header/>
        <BlogLanding/>
        <BlogList/>
        <Footer/>
    </div>
  )
}

export default BlogParent;