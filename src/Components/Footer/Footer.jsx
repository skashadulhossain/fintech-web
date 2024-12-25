import React from "react";
import "./Footer.css"; 
import logoimg from './Image/Logo img.png';
import { FaChevronUp, FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left-container">
          <a href="/"><img src={logoimg} alt="" /></a>
          <p>The first free end-to-end analytics service for the site, 
            designed to work with enterprises.</p>
          <button>Contact Us</button>
          <div className="footer-left-nav-box">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sales and Refunds</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>
        </div>
        <div className="footer-right-container">
          <div className="footer-right-top-box">
            <div className="footer-right-box">
              <h3>CONTACT</h3>
              <h2>+91 1234567890</h2>
              <h2>abc@gmail.com</h2>
            </div>
            <div className="footer-right-box">
              <h3>FOLLOW US</h3>
              <div className="footer-right-icon-box">
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaWhatsapp /></a>
                <a href="#"><FaTelegramPlane /></a>
                <a href="#"><FaXTwitter /></a>
                <a href="#"><FaFacebookF /></a>
              </div>
            </div>
          </div>
          <div className="footer-right-bottom-box">
            <p>&copy; 2024 All Right Reserved</p>
            <div className="footer-scroll-btn" onClick={scrollToTop}>
              <FaChevronUp />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;