import React from 'react';
import './ContactUs.css';
import Contact from '../../Components/Contact/Contact';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ContactHeader from '../../Components/ContactHeader/ContactHeader';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
<Header/>
<ContactHeader/>
<Footer/>
    </div>
  );
};

export default ContactUs;