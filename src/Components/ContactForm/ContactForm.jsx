import React from 'react';
import './ContactForm.css';
import { FaGlobeAmericas, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import icon1 from './Image/phone icon.png';
import icon2 from './Image/message icon.png';
import icon3 from './Image/location icon.png';
import icon4 from './Image/Clock icon.png';

const ContactForm = () => {
  return (
    <>
      
    <section className="ContactForm-section">
        <div className="ContactForm-container">
            <div className="ContactForm-form-box">
              <form>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" required />
                <label htmlFor="number">Number:</label>
                <input type="number" name="number" id="number" required />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" required />
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" required></textarea>
                <button>Submit</button>
              </form>
            </div>
            <div className="ContactForm-content-container">
              <div className="ContactForm-content-box">
                <div className="ContactForm-icon-box">
                <img src={icon1} alt=""  className="ContactForm-icon-img" />
                </div>
                <div className="ContactForm-title-box">
                  <h3>Call Us</h3>
                  <p>+91 1234567890, +91 1234567890</p>
                  <p>+91 1234567890, +91 1234567890</p>
                  <p>+91 1234567890</p>
                </div>
              </div>
              <div className="ContactForm-content-box">
                <div className="ContactForm-icon-box">
                  <img src={icon2} alt=""  className="ContactForm-icon-img" />
                </div>
                <div className="ContactForm-title-box">
                  <h3>Message</h3>
                  <p>abc@gmail.com</p>
                  <p>abcd@gmail.com</p>
                </div>
              </div>
              <div className="ContactForm-content-box">
                <div className="ContactForm-icon-box">
                  <img src={icon3} alt=""  className="ContactForm-icon-img" />
                </div>
                <div className="ContactForm-title-box">
                  <h3>Our Location</h3>
                  <p>Kolkata, India</p>
                </div>
              </div>
              <div className="ContactForm-content-box">
                <div className="ContactForm-icon-box">
                <img src={icon4} alt=""  className="ContactForm-icon-img" />
                </div>
                <div className="ContactForm-title-box">
                  <h3>Working Hours</h3>
                  <p>Mon-Sat 10:00 AM - 07:00 PM</p>
                  <p>Sun 12:00 PM - 07:00 PM</p>
                </div>
              </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default ContactForm;