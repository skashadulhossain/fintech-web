import React from "react";
import "./Footer.css"; 
import logoimg from './Image/Logo img.png';
import footerbgimg1 from './Image/Group 3.png';
import footerbgimg2 from './Image/long-haired-girl-watching-through-binoculars (2) 1.png';
import { FaChevronUp, FaFacebookF, FaFigma, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
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
      <div className="footer-scroll-btn" onClick={scrollToTop}>
        <FaChevronUp />
      </div>
      <div className="footer-main-container">
        <div className="footer-top-container">
          <div className="footer-top-left-container">
            <div className="footer-top-left-tiitle-box">
              <h1>Lets Get in <span>Touch!</span></h1>
              <p>Have a question or need assistance? Reach out to us via email, 
                phone, or the contact form beiow. We're eager to assist you.</p>
              <button>Contact Us</button>
            </div>
          </div>
          <div className="footer-top-right-container">
            <div className="footer-top-right-img">
              <img src={footerbgimg1} alt="" />
              <img src={footerbgimg2} alt="" />
            </div>
            <div className="footer-top-right-form-content">
              <h3>Nice hearing from you!</h3>
              <form>
                <label htmlFor="name">Full Name:</label>
                <input type="text" name="name" id="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" required />
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" required ></textarea>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom-container">
          <div className="footer-bottom-content">
            <div className="footer-bottom-left-box">
              <img src={logoimg} alt="" />
              <p>Get comprehensive  software development from a reliable 
                tecnology partner and transform your business today</p>
            </div>
            <div className="footer-bottom-right-box">
              <div className="footer-bottom-right-top-box">
                <a href="#">Privacy</a>
                <a href="#">Terms of Use</a>
                <a href="#">Sales and Refunds</a>
                <a href="#">Legal</a>
                <a href="#">Site Map</a>
              </div>
              <div className="footer-bottom-right-bottom-box">
                <h3>Follow us</h3>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaXTwitter /></a>
                <a href="#"><LuGithub /></a>
                <a href="#"><FaTelegramPlane /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaFigma /></a>
              </div>
            </div>
          </div>
          <div className="footer-pragraph-box">
            <p>&copy; All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;