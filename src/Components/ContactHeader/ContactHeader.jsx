import React from "react";
import "./ContactHeader.css";
import backgroundImg from "./img/Group 47.png";

const ContactHeader = () => {
  return (
    <div className="contact-header" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="content">
        <h1>
          <span className="highlight">Get in touch</span> with us.
        </h1>
        <p>We&apos;re here to assist you.</p>
      </div>
      <div className="social-icons">
        <a href="#facebook" className="icon fb"></a>
        <a href="#instagram" className="icon ig"></a>
        <a href="#twitter" className="icon tw"></a>
      </div>
    </div>
  );
};

export default ContactHeader;
