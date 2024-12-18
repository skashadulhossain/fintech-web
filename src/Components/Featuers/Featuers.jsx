import React from 'react';
import './Featuers.css';

const Featuers = () => {
  const features = [
    {
      title: "Bank APIs",
      description: "Our Bank APIs provide seamless integration for banking services, enabling businesses to offer secure and efficient financial transactions through their platforms."
    },
    {
      title: "Utility APIs",
      description: "We offer Utility APIs that allow businesses to integrate various utility services like electricity, water, and gas bill payments into their applications, enhancing user convenience."
    },
    {
      title: "IT Service and Solution",
      description: "We specialize in providing IT services and solutions, including software development, system integration, and IT consulting, to help businesses optimize their technology infrastructure."
    },
    {
      title: "Banking - BC Model",
      description: "Our Banking BC Model offers a reliable framework for businesses to provide banking services, such as account opening, fund transfers, and loan disbursements, through a business correspondent model."
    },
    {
      title: "Fintech",
      description: "We offer innovative Fintech solutions that combine technology and finance to create more efficient, transparent, and accessible financial services for businesses and consumers."
    },
    {
      title: "Travel Services",
      description: "Our Travel Services APIs enable businesses to integrate booking systems, flight and hotel reservations, and travel packages into their platforms, enhancing the travel experience for customers."
    },
  ];

  return (
    <section className="Featuers-section">
      <div className="Featuers-main-container">
        <div className="Featuers-title-box">
          <h1>Core Services</h1>
          <p>At PN SOFTWARE TECH PVT. LTD., we provide a wide range of innovative services designed to meet the diverse needs of businesses across various industries. Our solutions are built to streamline operations, enhance customer experience, and drive growth. Explore our core services below to learn how we can help your business succeed.</p>
        </div>
        <div className="Featuers-container">
          {features.map((feature, index) => (
            <div className="Featuers-content-box" key={index}>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featuers;
