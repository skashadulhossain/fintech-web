import React from "react";
import "./ContactHeader.css";
import backgroundImg from "./img/Background-4.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactHeader = () => {
  return (
    <div className="contact-header">
      <div className="contact-img-box">
        <img src={backgroundImg} alt="" />
      </div>
      <div className="content">
        <h1>
          <span className="highlight">Get in touch</span> with us.
        </h1>
        <p>We&apos;re here to assist you.</p>
      </div>
      <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaXTwitter /></a>
      </div>
    </div>
  );
};

export default ContactHeader;