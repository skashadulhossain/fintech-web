import React from 'react'
import './solutions.css'
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { FaSkype, FaTelegram, FaWhatsapp } from 'react-icons/fa';



function Solutions() {
  return (
    <>

        <Header />
          <div className="long-container">
            <h1>Long / Short Code</h1>
            <hr />
            <p>
                A long code number is a standard telephone number used to send and get voice calls and SMS messages. Telephone numbers are normally called
                "long codes" (10-digit numbers in numerous nations) when contrasting them and SMS short codes (5-6 digit numbers).
            </p>
            <p>
                Long Code SMS Services also, called a devoted telephone number or vast number or virtual versatile number, is the gathering component
                utilized by business to get voice calls and SMS Messages. Ease and International openness make the best answer for Big crusade that are
                gives Long Code SMS in India.
            </p>
            <div className="long-long-container">
                <div className="long-box">
                  <h2>Long SMS Service Vs Short Code SMS Service, Read The Differences:</h2>
                  <ul>
                      <li>There are couple of contrasts between Long code and Short code sms informing service</li>
                      <li>Long codes suppliers are less expensive and quicker to actualize</li>
                      <li>Prominent catchphrases are constantly accessible for long code</li>
                  </ul>
                </div>
                <div className="long-box-img">
                  <img src="https://roundpay.in/website-assets-22/images/our-services/longndshortcode.webp" alt="" />
                </div>
            </div>
            <p>
                Short codes, or short numbers, are short digit groupings, fundamentally shorter than phone numbers, that are utilized to address messages in
                the Multimedia Messaging System (MMS) and short message benefit (SMS) frameworks of portable system administrators. Not with standing
                informing, they might be utilized as a part of truncated dialing.
            </p>
            <p>
                Another preferred standpoint of long code is that it permits 2-way correspondence, enabling gathering of people to answer to the message
                got in way.
            </p>
            <div className="button-long-container">
              <div className="SoftwareDevelopment-left-btn-box">
                <button><FaWhatsapp /></button>
                <button><FaTelegram /></button>
                <button><FaSkype /></button>
              </div>
            </div>

        </div>
        <div className="long-box-blur"></div>
          {/*------------------------- NEXT SEC -------------------- */}

        <div className="long-container">
            <h1>SIM Hosting</h1>
            <hr />
            <p>
                SIM Hosting is a simple method to get SMS messages from your clients/customers to your Server or Database, through an association with our
                SMS passage. You can have your own SIM card or a common one facilitated to one of our GSM Server, in order to have the capacity to get SMS.
            </p>
            <div className="long-sim-box">
            <div className="long-sim-img">
                <img src="https://roundpay.in/website-assets-22/images/our-services/simHosting.webp" alt="" />
              </div>
              <div className="content-box">
                  <p>
                      The SIM card's cell phone number will fill in as a committed telephone number of your SMS application. To utilize this administration,
                      you can make Unlimited Keywords and Sub Keywords on this Dedicated Long Code Mobile Number, you Courier your SIM card to us. The SIM card
                      will be put into one of our GSM Server, which is associated with our SMS passage. Our SMS portal will forward every message received to
                      your picked course utilizing a specific convention/interface that suits best to your necessities; for instance HTTP, HTTPS, SMS to email,
                      and so forth.
                  </p>
                  <p>
                      Utilizing a SIM card gave by you (we prescribe an agreement SIM), once got this is safely setup on our SIM facilitating equipment,
                      which has multi-repetition worked in. Instant messages got are naturally and promptly come back to you.
                  </p>
              </div>

            </div>

        </div>
        <Footer/>
    </>
  )
}

export default Solutions;