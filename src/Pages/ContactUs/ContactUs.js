import React from 'react';
import './ContactUs.css';
import Contact from '../../Components/Contact/Contact';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ContactHeader from '../../Components/ContactHeader/ContactHeader';
import ContactOffice from '../../Components/ContactOffice/ContactOffice';
import ContactForm from '../../Components/ContactForm/ContactForm';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <Header/>
      <ContactHeader/>
      <ContactOffice/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default ContactUs;