import React from 'react';
import './ContactOffice.css';
import { FaGlobeAmericas, FaMapSigns, FaPhoneAlt, FaStreetView } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdTime } from 'react-icons/io';

const ContactOffice = () => {
  return (
    <>

    <section className="ContactOffice-section">
        <div className="ContactOffice-containr">
            <div className="ContactOffice-card-box">
                <FaMapSigns className='ContactOffice-card-icon-box' />
                <h2>Kolkata Office</h2>
                <ul>
                    <li><FaLocationDot /> 701712 kolkata, India</li>
                    <li><FaPhoneAlt /> +91 1234567890</li>
                    <li><IoMdTime /> abc@gmail.com</li>
                </ul>
            </div>
            <div className="ContactOffice-card-box">
                <FaStreetView className='ContactOffice-card-icon-box' />
                <h2>UAE Office</h2>
                <ul>
                    <li><FaLocationDot /> 701712 kolkata, India</li>
                    <li><FaPhoneAlt /> +91 1234567890</li>
                    <li><IoMdTime /> abc@gmail.com</li>
                </ul>
            </div>
            <div className="ContactOffice-card-box">
                <FaGlobeAmericas className='ContactOffice-card-icon-box' />
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