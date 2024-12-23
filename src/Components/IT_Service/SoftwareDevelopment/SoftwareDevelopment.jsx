import React from 'react';
import './SoftwareDevelopment.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import iconimg1 from './Image/icon 1.png';
import iconimg2 from './Image/icon 2.png';
import iconimg3 from './Image/icon 3.png';
import boximg from './Image/undraw_design-notes_vwa7.png';
import { FaChartLine, FaCogs, FaHashtag, FaLanguage, FaLaptop, FaMobileAlt, FaNewspaper, FaPaintBrush, FaRegBuilding, FaRegWindowMaximize, FaShoppingCart, FaSkype, FaTabletAlt, FaTelegram, FaWhatsapp, FaWrench } from 'react-icons/fa';
import { IoCodeSlash } from 'react-icons/io5';
import { FaPencil } from 'react-icons/fa6';
import { BsPencilSquare } from 'react-icons/bs';
import { PiNotePencilBold } from 'react-icons/pi';

const cardData = [
  {
    icon: <IoCodeSlash />,
    title: "Website & Portal Development",
    description: "Presence on the internet is necessary in this era of technology for your.",
  },
  {
    icon: <FaPencil />, 
    title: "Website & Portal Redesign Services",
    description: "Websites are a powerful tool for business. Which can help you to promote Read more.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Static Website Designing Services",
    description: "Do you want to start an online business? Is your existing website not getting.",
  },
  {
    icon: <FaLaptop />,
    title: "Website Designing Services",
    description: "The world is transforming digitally and our increased reliance on the Internet.",
  },
  {
    icon: <FaWrench />,
    title: "CMS Website Development",
    description: "Creating and managing a website used to be a herculean task. It needed Read more.",
  },
  {
    icon: <FaCogs />,
    title: "Website Maintenance Services",
    description: "Website maintenance is a service which you need continuously to maintain Read more.",
  },
  {
    icon: <FaLanguage />,
    title: "AngularJS Development",
    description: "With AngularJS development, Dynamic, Interactive, and Extensive.",
  },
  {
    icon: <FaChartLine />,
    title: "Offshore Web Development India",
    description: "Do you want affordable yet efficient services to help you build your first.",
  },
  {
    icon: <FaNewspaper />,
    title: "News Portal Development",
    description: "Rapid Digitalization has completely transformed the ways in which news.",
  },
  {
    icon: <FaRegBuilding />,
    title: "Corporate Website Development",
    description: "This is the era of the Internet and worldwide web where you have engaged to.",
  },
  {
    icon: <FaShoppingCart />,
    title: "eCommerce Website Development",
    description: "It doesn’t matter whether you are in business for long years or just stepped.",
  },
  {
    icon: <FaHashtag />,
    title: ".Net Development Services",
    description: ".NET is an Open Source Platform Introduced by Microsoft for Software.",
  },
  {
    icon: <BsPencilSquare />,
    title: "Custom Web & Portal Design",
    description: "Do you want to build the perfect website that will suit your business objective.",
  },
  {
    icon: <FaTabletAlt />,
    title: "Responsive Web Designing",
    description: "Websites are essential to establish your online footprint. It gives your.",
  },
  {
    icon: <FaRegWindowMaximize />,
    title: "Dynamic Website Designing",
    description: "Do you want a website that can establish better interaction with your clients.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Website Designing Services",
    description: "Are you doing online business? Are your products and services based on.",
  },
  {
    icon: <PiNotePencilBold />,
    title: "UI & UX Designing Services",
    description: "With UI & UX Design Services, Innovative & Interactive Interfaces can be.",
},
];


const SoftwareDevelopment = () => {
  return (
    <>
      
    <Header/>  
    <section className="SoftwareDevelopment-section">
      <div className="SoftwareDevelopment-main-container">
        <div className="SoftwareDevelopment-content-container">
          <div className="SoftwareDevelopment-content-left-box">
            <h1>Web Application Development</h1>
            <div className="SoftwareDevelopment-left-box">
              <div className="SoftwareDevelopment-left-img-box left-icon-1">
                <a href="#"><img src={iconimg1} alt="" /></a>
              </div>
              <div className="SoftwareDevelopment-left-title-box">
                <h2>Intuitive Work Flows</h2>
                <p>An intuitive interface has clue that how the process is supposed to flow so 
                  that user don’t have to experiment the interactions, based on real-world 
                  experiences, no surprises are thrown. It ensures a “no-frustration” user experience</p>
              </div>
            </div>
            <div className="SoftwareDevelopment-left-box left-box-item-2">
              <div className="SoftwareDevelopment-left-img-box left-icon-2">
                <a href="#"><img src={iconimg2} alt="" /></a>
              </div>
              <div className="SoftwareDevelopment-left-title-box">
                <h2>Easy Management</h2>
                <p>AAll of your tracking and analytics will get condensed into a single report, 
                  allowing for easier monitoring/analysis and strategy formation for your 
                  business to develop and become simpler, and achieve its objectives much faster.</p>
              </div>
            </div>
            <div className="SoftwareDevelopment-left-box">
              <div className="SoftwareDevelopment-left-img-box left-icon-3">
                <a href="#"><img src={iconimg3} alt="" /></a>
              </div>
              <div className="SoftwareDevelopment-left-title-box">
                <h2>Cost Effective Solutions</h2>
                <p>Fully responsive web applications saves on development and maintenance 
                   costs as all the efforts are directed in building a single interface for
                   all the devices. This also leads to positive impact on the sales & 
                   conversion rates as user experience remains consistent.</p>
              </div>
            </div>
            <div className="SoftwareDevelopment-left-btn-box">
              <button><FaWhatsapp /> | <span>WhatsApp</span></button>
              <button><FaTelegram /> | <span>Telegram</span></button>
              <button><FaSkype /> | <span>Skype</span></button>
            </div>
          </div>
          <div className="SoftwareDevelopment-right-img-box">
            <img src={boximg} alt="" />
          </div>
        </div>
        <div className="SoftwareDevelopment-card-container">
          {cardData.map((card, index) => (
            <div className="SoftwareDevelopment-card-box" key={index}>
              <div className="SoftwareDevelopment-icon-box">
                {card.icon}
              </div>
              <div className="SoftwareDevelopment-title-box">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>

    </>
  )
}

export default SoftwareDevelopment;