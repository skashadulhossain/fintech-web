import React from 'react'
import './BulkSMS.css'
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { FaSkype, FaTelegram, FaWhatsapp } from 'react-icons/fa';


const BulkSMS = () => {
    return (

    <>
        <Header/>
        <main className='BulkSMS'>
                            <div className="BulkSMS-container">
            <h1>Bulk SMS</h1>
            <hr />
            <p>
                Bulk Messaging is the spread of huge quantities of SMS messages for conveyance to cell phone terminals. It is utilized by media organizations,
                undertakings, banks (for showcasing and extortion control) and customer brands for an assortment of purposes including excitement, venture and versatile marketing.
            </p>
            <div className="BulkSMS-content-box">
                <p>
                    Today the application-to-individual SMS informing administrations have advanced to incorporate mass SMS informing close by the sending of single messages,
                    (for example, one time passwords and conveyance warnings), intuitive informing, (for example, aggregate informing administrations), and approaching number administrations
                    (for example, portable promoting efforts, voting or data lines).
                </p>
                <p>
                    Before starting with the sending mass SMS messages take note of that you should follow the directions particular to your nation and the nation to which you are sending SMS messages.
                </p>
                <p>
                    The employment of mass SMS informing is constantly developing as new business or open advantage needs are recognized. From substantial scale organizations to little ventures,
                    local gatherings to instructive foundations, mass SMS informing gives a practical answer for overseeing correspondences with little or expansive contact gatherings.
                </p>
                <p>
                    In this world of communication and quick moving business through the web and web it turns out to be extremely important to spare the ideal opportunity for showcasing and advancement
                    of your items and business. So there is a simple answer for every one of the business visionaries to advance their new items over the market with the assistance of Bulk SMS Technology.
                </p>
                <div className="button-group">
                    <div className="SoftwareDevelopment-left-btn-box">
                        <button><FaWhatsapp /></button>
                        <button><FaTelegram /></button>
                        <button><FaSkype /></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="bulk-container">
                <div className="bulk-box">
                  <h2>Long SMS Service Vs Short Code SMS Service, Read The Differences:</h2>
                  <ul>
                      <li>There are couple of contrasts between Long code and Short code sms informing service</li>
                      <li>Long codes suppliers are less expensive and quicker to actualize</li>
                      <li>Prominent catchphrases are constantly accessible for long code</li>
                      <li>There are couple of contrasts between Long code and Short code sms informing service</li>
                      <li>Long codes suppliers are less expensive and quicker to actualize</li>
                      <li>Prominent catchphrases are constantly accessible for long code</li>
                  </ul>
                </div>
                <div className="bulk-box-img">
                  <img src="https://roundpay.in/website-assets-22/images/our-services/longndshortcode.webp" alt="" />
                </div>
            </div>
        </main>
        <Footer />
    </>
    );
};

export default BulkSMS;