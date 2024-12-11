import React from 'react';
import './Service1.css';
import cardimg1 from './Image/Card image 1.png';
import cardimg2 from './Image/Card image 2.png';
import cardimg3 from './Image/Card image 3.png';
import cardimg4 from './Image/Card image 4.png';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="service-card">
      <div className="image-wrapper">
        <img src={image} alt={title} className="image-icon" />
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

const Services1 = () => {
  return (
    <div className="services-container">
      <ServiceCard
        image={cardimg1}
        title="Bank APIs"
        description="Integrate banking into your business workflow with APIs for collection, payouts, cards & more"
      />
      <ServiceCard
        image={cardimg2}
        title="IT Consulting"
        description="Enhance performance and reduce costs with our digital IT services and solutions"
      />
      <ServiceCard
        image={cardimg3}
        title="Banking - BC Model"
        description="With the objective of ensuring best Financial Inclusion and increasing outreach of the banking and financial Services in Rural India"
      />
      <ServiceCard
        image={cardimg4}
        title="Custom Software Development"
        description="We assist at every stage of the software development life cycle from conceptualization & consulting to development and support."
      />
    </div>
  );
};

export default Services1;