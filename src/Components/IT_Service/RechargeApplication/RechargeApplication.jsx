import React from 'react';
import './RechargeApplication.css';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import { FaCaretRight, FaSkype, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { IoCheckmarkDoneSharp  } from 'react-icons/io5';
import boximg from './Image/undraw_blog_1ca8.png';
import boximg2 from './Image/undraw_design-notes_vwa7.png';

const RechargeApplication = () => {
  return (
    <>
      
    <Header/>
    <section className="RechargeApplication-section">
      <div className="RechargeApplication-container-1">
        <div className="RechargeApplication-title-box">
          <h1>Recharge Application</h1>
          <p>Pn Software Tech Pvt. Ltd providing enterprise software for Recharge-Bill Payment 
            and Fintech Industry gives you freedom to manage unlimited retailers, Distributor</p>
        </div>
        <div className="RechargeApplication-pragraph-box">
          <p>Pn Software Tech Pvt. Ltd providing enterprise software for Recharge-Bill Payment 
            and Fintech Industry gives you freedom to manage unlimited retailers, Distributor. 
            A complete automatic flexi distribution Multi Recharge Software which fulfill all 
            your requirements that includes Bill payment, Recharge, Money Transfer, Aadhaar 
            based Payment, Vehicle Insurance. Business Expertise Delivered in A Small Wonder 
            of Recharge-Fintech software by Pn Software Tech Pvt. Ltd.</p>
          <p>We are an improvement organization having additional imagination to develop sites 
            and applications by remembering necessities of the client. As best energize 
            arrangement supplier we as a whole do the best administration by remembering 
            both customer and client. For that, we likewise create and revive applications for 
            all our potential customers. It is incorporated in the cost of entryway improvement.
            We are leading brand in Mobile Recharge Software</p>
        </div>
        <div className="RechargeApplication-btn-box">
          <button><FaWhatsapp /></button>
          <button><FaTelegram /></button>
          <button><FaSkype /></button>
        </div>
      </div>

      <div className="RechargeApplication-container-2">
        <div className="RechargeApplication-left-content">
          <h3><IoCheckmarkDoneSharp   /> FULLY RESPONSIVE DESIGNS</h3>
          <p>Design rendering and working as per the user’s behavior and environment based on 
            screen size, platform and orientation allows the maximum reach across the devices.</p>
          <h3><IoCheckmarkDoneSharp   />  INTUITIVE WORK FLOWS</h3>
          <p>An intuitive interface has clue that how the process is supposed to flow so that 
            user don’t have to experiment the interactions, based on real-world experiences, 
            no surprises are thrown. It ensures a “no-frustration” user experience.</p>
          <h3><IoCheckmarkDoneSharp   />  EASY MANAGEMENT</h3>
          <p>All of your tracking and analytics will get condensed into a single report, 
            allowing for easier monitoring/analysis and strategy formation for your business 
            to develop and become simpler, and achieve its objectives much faster.</p>
          <h3><IoCheckmarkDoneSharp   />  COST EFFECTIVE SOLUTIONS</h3>
          <p>Fully responsive web applications saves on development and maintenance costs as all the 
            efforts are directed in building a single interface for all the devices. This also leads 
            to positive impact on the sales & conversion rates as user experience remains consistent.</p>
        </div>
        <div className="RechargeApplication-img-box">
          <img src={boximg} alt="" />
        </div>
      </div>

      <div className="RechargeApplication-container-3">
        <div className="RechargeApplication-top-title-box">
          <span>Pn Software Fintech Pvt. Ltd - The leader in Technology!</span>
          <h1>Fastest way to grow Direct Selling Business</h1>
          <p>Our application and revive entryway is absolutely easy to understand which 
            is simple to make with appropriate security.</p>
        </div>
        <div className="RechargeApplication-content-box">
          <div className="RechargeApplication-contemt-img-box">
            <img src={boximg2} alt="" />
          </div>
          <div className="RechargeApplication-list-box">
            <ul>
              <li><FaCaretRight /> Best UI and UX</li>
              <li><FaCaretRight /> Dynamic Recharge API Intigration in Admin Control - No need of Devloper</li>
              <li><FaCaretRight /> Multiple Commission Module to manage Team</li>
              <li><FaCaretRight /> Whitelabel Solution</li>
              <li><FaCaretRight /> Customer Care Panel with Dynamic Access Control By Admin</li>
              <li><FaCaretRight /> Sales Team Managemnt with Real time Reporting</li>
              <li><FaCaretRight /> FOS- for field Collection and Sales</li>
              <li><FaCaretRight /> Realtime Billing Module</li>
              <li><FaCaretRight /> All Requierd Reports for Bussiness Analysis</li>
              <li><FaCaretRight /> Userwise Routing for Recharge</li>
              <li><FaCaretRight /> Circle Wise Recharrge Routing</li>
              <li><FaCaretRight /> Denomination and Range Wise Rounting</li>
              <li><FaCaretRight /> Seprate Backup Api Mechanism for API Partner and Retail</li>
              <li><FaCaretRight /> Cutomise Alerts of All Events</li>
              <li><FaCaretRight /> Email Mesaage and Social Alerts</li>
              <li><FaCaretRight /> APP Notification as per Requierment</li>
              <li><FaCaretRight /> Multiple Payment Gateway Support</li>
              <li><FaCaretRight /> Multiple Money Transfer and AEPS API Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer/>

    </>
  )
}

export default RechargeApplication;