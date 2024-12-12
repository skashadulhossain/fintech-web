import React from 'react';
import './Contact.css';
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { FiPhoneCall } from 'react-icons/fi';

const Contact = () => {
  return (
    <>
      
    <section className="Contact-section">
        <div className="Contact-main-container">
            <div className="Contact-top-container">
                <div className="Contact-left-container">
                    <div className="Contact-left-title-box">
                        <h1>Contact Us</h1>
                        <p>Need to get in touch with us? Either fill out the form with your inquiry
                        or find the deparment phone, email you'd like to contact below</p>
                    </div>
                    <div className="Contact-left-img-box">
                        <img src="#" alt="" />
                    </div>
                </div>
                <div className="Contact-right-container">
                    <form>
                        <input type="text" placeholder='Name' required />
                        <input type="email" placeholder='Email' required />
                        <input type="number" placeholder='Phone Number' required />
                        <textarea placeholder='Message'required ></textarea>
                        <button>Contact us now</button>
                    </form>
                </div>
            </div>
            <div className="Contact-bottom-container">
                <div className="Contact-bottom-box">
                    <div className="Contact-bottom-icon-box">
                        <IoLocationOutline />
                    </div>
                    <div className="Contact-bottom-title-box">
                        <h2>Location</h2>
                        <p>Kolkata, India, 701712</p>
                    </div>
                </div>
                <div className="Contact-bottom-box">
                    <div className="Contact-bottom-icon-box">
                        <IoMailOutline />
                    </div>
                    <div className="Contact-bottom-title-box">
                        <h2>Mail</h2>
                        <p>abc@gmail.com</p>
                    </div>
                </div>
                <div className="Contact-bottom-box">
                    <div className="Contact-bottom-icon-box">
                        <FiPhoneCall />
                    </div>
                    <div className="Contact-bottom-title-box">
                        <h2>Number</h2>
                        <p>+91 1234567890</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Contact;