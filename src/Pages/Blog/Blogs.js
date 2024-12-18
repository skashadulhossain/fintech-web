import React, { useEffect, useState } from 'react';
import Blog2 from '../../Components/Blog2/Blog2';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import BlogHeader from '../../Components/BlogHeader/BlogHeader';

const Blogs = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300); // Simulate load delay
  }, []);

  return (
    <div style={{ transition: 'opacity 1s ease-in-out', opacity: isLoaded ? 1 : 0 }}>
      <Header />
      <BlogHeader />
      <Blog2 />
      <Footer />
    </div>
  );
};

export default Blogs;
