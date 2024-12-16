import React from 'react';
import './Featuers.css';

const Featuers = () => {
  const features = [
    {
      title: "Transparency",
      description: "We prioritize openness and honesty, ensuring clear communication and accountability in all our services and interactions."
    },
    {
      title: "Innovation",
      description: "Dedicated to pioneering the latest VR technologies, continuously pushing boundaries to deliver immersive experiences."
    },
    {
      title: "Excellence",
      description: "VR FZ is committed to delivering the highest quality VR experiences, maintaining rigorous standards of performance creativity."
    },
    {
      title: "Team Work",
      description: "We believe in the power of collaboration, with our dedicated team working together to  exceptional and innovative VR solutions."
    },
    {
      title: "Communication",
      description: "Effective and transparent communication is at the heart of VR FZ, ensuring we understand and meet our clients' needs efficiently."
    },
    {
      title: "Growth",
      description: "We are committed to fostering continuous growth and innovation, driving progress in the VR industry."
    },
  ];

  return (
    <section className="Featuers-section">
      <div className="Featuers-main-container">
        <div className="Featuers-title-box">
          <h1>Perfect for Productivity Gains in All Industries</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus excepturi 
          vitae labore veniam perferendis ea neque voluptatum deleniti?</p>
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
