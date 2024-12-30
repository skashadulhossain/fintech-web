import React from "react";
import "./DigitalMarketing.css"; // CSS file for styling
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import digitalimg from './Image/Digital img.jpg';

const DigitalMarketing = () => {
  return (
  <>

    <Header/>
    <main className="DigitalMarketing">
      <header>
        <h1>Digital Marketing & SEO Services</h1>
        <p>Digital Marketing is an umbrella term that incorporates phrasings like SEO, SEM, SMO, SMM , Paid Media and Content Marketing to advance item, administrations or brand over the web in most captivating and easy to use way in the interest of customized promoting efforts to enable our customers to prevail on the web.</p>
      </header>
      <div className="DigitalMarketing-flex-box">
        <img src={digitalimg} alt="" />
        <div className="DigitalMarketing-box">
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
           <h2 style={{ color: "#6d72f6" }}>FEATURES</h2>
            <h3>No magic, only dedicated SEO</h3>
            <p>
                Be it promoting or web advertising, the two have similar objectives and
                reason. As an association, we comprehend the significance of being in
                contact with customers continually. We get rehashed customers for being
                tuned in to their prerequisites and in understanding we make
                administrations and items that advantage them. We use a wide range of
                correspondence channels, which will get the job done their objectives.
                Organizations online can participate in fruitful promoting exercises
                for boosting their item advertising. The fundamental point of web
                promoting is to continue existing customers and furthermore find new
                ones for setting items and administrations.
            </p>

             <h3>Our Digital Marketing Services Include:</h3>
            <p>
                With abundant elements in the world, everybody strives to be unique. So
                does your business need to. Marketing your business or brand can give
                you a great turnover. We provide several marketing techniques:
            </p>
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                <li>
                <span style={{ color: "#6d72f6", marginRight: "10px" }}>✔</span>
                Search Engine Optimization (SEO, SMO, SMM, PPC)
                </li>
                <li>
                <span style={{ color: "#6d72f6", marginRight: "10px" }}>✔</span>
                Google Adsense, Adwords
                </li>
            </ul>
            </div>
        </div>
      </div>
    </main>
    <Footer/>

  </>
  );
};

export default DigitalMarketing;