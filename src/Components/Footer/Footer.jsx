import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-copyright">© 2021 All Rights Reserved</p>
        <button className="footer-contact-btn">Contact Us</button>
        <div className="footer-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-telegram"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-behance"></i>
        </div>
        <div className="footer-scroll-top">
          <i className="fas fa-chevron-up"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
