import React from 'react';
import './Service1.css';



const ServiceCard = ({ icon, image, title, description, buttonText }) => {
  return (
    <div className="service-card">
      <div className="image-wrapper">
        <img src={image} alt={title} className="image-icon" />
      </div>
      <div className="content">
        <div className="icon">{icon}</div>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <button className="btn">{buttonText}</button>
      </div>
    </div>
  );
};

const Services1 = () => {
  return (
    <div className="services-container">
      <ServiceCard
        icon={<i className="fas fa-university"></i>}
        image="/images/bank-apis.jpg"
        title="Bank APIs"
        description="Integrate banking into your business workflow with APIs for collection, payouts, cards & more"
        buttonText="Learn More"
      />
      <ServiceCard
        icon={<i className="fas fa-cog"></i>}
        image="/images/it-consulting.jpg"
        title="IT Consulting"
        description="Enhance performance and reduce costs with our digital IT services and solutions"
        buttonText="Explore"
      />
      <ServiceCard
        icon={<i className="fas fa-money-bill-alt"></i>}
        image="/images/banking-bc-model.jpg"
        title="Banking - BC Model"
        description="With the objective of ensuring best Financial Inclusion and increasing outreach of the banking and financial Services in Rural India"
        buttonText="Get Started"
      />
      <ServiceCard
        icon={<i className="fas fa-code"></i>}
        image="/images/custom-software.jpg"
        title="Custom Software Development"
        description="We assist at every stage of the software development life cycle from conceptualization & consulting to development and support."
        buttonText="Contact Us"
      />
    </div>
  );
};

export default Services1;

