import React, { useState } from 'react';
import '../Blog/Blog.css';
import Blog1img from './Image/Blog1 img.png';
import Blog2img from './Image/Blog2 img.png';
import Blog3img from './Image/Blog3 img.png';

// Blog1 Component
const Blog1 = () => {
  return (
    <div className="Blog1-content">
      <img src={Blog1img} alt="Blog 1 Illustration" />
    </div>
  );
};

// Blog2 Component
const Blog2 = () => {
  return (
    <div className="Blog2-content">
      <img src={Blog2img} alt="Blog 2 Illustration" />
    </div>
  );
};

// Blog3 Component
const Blog3 = () => {
  return (
    <div className="Blog3-content">
      <img src={Blog3img} alt="Blog 3 Illustration" />
    </div>
  );
};

const Blog = () => {
  const [activeTab, setActiveTab] = useState('Blog1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderActiveComponent = () => {
    switch(activeTab) {
      case 'Blog1':
        return <Blog1 />;
      case 'Blog2':
        return <Blog2 />;
      case 'Blog3':
        return <Blog3 />;
      default:
        return <Blog1 />;
    }
  };

  return (
    <div className='Blog'>
      <div className="Blog-box">
        <div className="Blog-left">
          <div className="Blog-left-round">
            {renderActiveComponent()}
          </div>
        </div>
        <div className="Blog-right">
          <div className="Blog-right-main">
            <button 
              className={`Blog-Hidden-box ${activeTab === 'Blog1' ? 'active' : ''}`} 
              onClick={() => handleTabChange('Blog1')}
            >
              1. Create an Account
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quaerat sint, fugiat expedita cumque libero.</p>
            </button>
            <button 
              className={`Blog-Hidden-box ${activeTab === 'Blog2' ? 'active' : ''}`} 
              onClick={() => handleTabChange('Blog2')}
            >
              2. Get Your Card
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quaerat sint, fugiat expedita cumque libero.</p>
            </button>
            <button 
              className={`Blog-Hidden-box ${activeTab === 'Blog3' ? 'active' : ''}`} 
              onClick={() => handleTabChange('Blog3')}
            >
              3. Enjoy
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quaerat sint, fugiat expedita cumque libero.</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;