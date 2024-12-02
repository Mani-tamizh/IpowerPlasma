import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

const HomeOne = lazy(() => import('./pages/HomeOne'));
const About = lazy(() => import('./pages/About'));
const ServiceUs = lazy(() => import('./pages/Service'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const FAQMain = lazy(() => import('./pages/FAQ'));
const ContactUs = lazy(() => import('./components/ContactUs/ContactUs'));
const BlogParent = lazy(() => import('./components/Blog/Blog-parent'));
const BlogPageOneMain = lazy(()=>import ('./pages/BlogPageOne'))
const BlogPageTwoMain = lazy(()=>import ('./pages/BlogPageTwo'))
const App = () => {
  return (
  <HashRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomeOne />} />
          <Route path="/home" element={<HomeOne />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServiceUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/faq" element={<FAQMain />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<BlogParent />} />
          <Route path="/blog/:id" element={<BlogPageOneMain />} />
          <Route path="/blog/post2" element={<BlogPageTwoMain />} />
        </Routes>
      </Suspense>
  </HashRouter>
  );
};

export default App;
