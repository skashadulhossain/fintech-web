import React, { useRef, useEffect, useState } from 'react';
import './Technologies.css';
import reacticon from './Image/react.webp';
import awsicon from './Image/aws.webp';
import pythonicon from './Image/python.webp';
import nodejsicon from './Image/nodeJs.webp';
import webflowicon from './Image/webflow.webp';
import reactnativeicon from './Image/nativeJs.webp';
import javascripticon from './Image/Javascript.webp';
import solidytyicon from './Image/solidity.webp';
import ethereumicon from './Image/ethereum.webp';

const technologies = [
  { id: 1, title: 'React', img: reacticon },
  { id: 2, title: 'AWS', img: awsicon },
  { id: 3, title: 'Python', img: pythonicon },
  { id: 4, title: 'Node.js', img: nodejsicon },
  { id: 5, title: 'WebFlow', img: webflowicon },
  { id: 6, title: 'React Native', img: reactnativeicon },
  { id: 7, title: 'Javascript', img: javascripticon },
  { id: 8, title: 'Solidity', img: solidytyicon },
  { id: 9, title: 'Ethereum', img: ethereumicon },
];

const Technologies = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationIntervalRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    
    // Intersection Observer for component visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (container) {
      observer.observe(container);
    }

    // Automatic scrolling
    const scrollAnimation = () => {
      if (container) {
        // Check if we've reached the end, then reset
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1; // Smooth scroll speed
        }
      }
    };

    // Start the animation interval
    animationIntervalRef.current = setInterval(scrollAnimation, 20);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
    };

    const handleMouseLeave = () => {
      // Restart the animation when mouse leaves
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
      animationIntervalRef.current = setInterval(scrollAnimation, 20);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return (
    <section className={`Technologies-section ${isVisible ? 'is-visible' : ''}`}>
      <div className="Technologies-title-box">
        <h1>Technologies We Use</h1>
      </div>
      <div 
        ref={containerRef} 
        className={`Technologies-container-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="Technologies-container animated-scroll">
          {technologies.map((tech) => (
            <div key={tech.id} className="Technologies-card">
              <div className="Technologies-card-img">
                <img src={tech.img} alt={tech.title} />
              </div>
              <h3 className="Technologies-card-title">{tech.title}</h3>
            </div>
          ))}
          {/* Duplicate cards to create infinite scroll effect */}
          {technologies.map((tech) => (
            <div key={`duplicate-${tech.id}`} className="Technologies-card">
              <div className="Technologies-card-img">
                <img src={tech.img} alt={tech.title} />
              </div>
              <h3 className="Technologies-card-title">{tech.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;