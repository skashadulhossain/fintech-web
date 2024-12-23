import React from 'react';
import './ContactOffice.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdTime } from 'react-icons/io';
import icon1 from './Image/Browser.png';
import icon2 from './Image/Card.png';
import icon3 from './Image/Preferences.png';

const ContactOffice = () => {
  return (
    <>

    <section className="ContactOffice-section">
        <div className="ContactOffice-containr">
            <div className="ContactOffice-card-box">
                <img src={icon1} alt="" className='ContactOffice-card-icon-box' />
                <h2>Kolkata Office</h2>
                <ul>
                    <li><FaLocationDot /> 701712 kolkata, India</li>
                    <li><FaPhoneAlt /> +91 1234567890</li>
                    <li><IoMdTime /> abc@gmail.com</li>
                </ul>
            </div>
            <div className="ContactOffice-card-box">
                <img src={icon2} alt="" className='ContactOffice-card-icon-box' />
                <h2>UAE Office</h2>
                <ul>
                    <li><FaLocationDot /> 701712 kolkata, India</li>
                    <li><FaPhoneAlt /> +91 1234567890</li>
                    <li><IoMdTime /> abc@gmail.com</li>
                </ul>
            </div>
            <div className="ContactOffice-card-box">
                <img src={icon3} alt="" className='ContactOffice-card-icon-box-1' />
                <h2>Qatar Office</h2>
                <ul>
                    <li><FaLocationDot /> 701712 kolkata, India</li>
                    <li><FaPhoneAlt /> +91 1234567890</li>
                    <li><IoMdTime /> abc@gmail.com</li>
                </ul>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default ContactOffice;