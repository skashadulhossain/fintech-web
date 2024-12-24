import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { ChevronRight, icons } from "lucide-react";
import "./mlm.css";

const mlm = [
  "Advanced scripts",
  "User-friendly interface",
  "Intuitive structure",
];

const services = [
  {
    title: "Multi-Vendor Marketplace",
    desc: "Easily add multiple sellers and unlimited products to create a thriving platform for all your business needs.",
    icon: "/images/grocery.png",
  },
  {
    title: "Custom E-Commerce Integration",
    desc: "Seamlessly integrate a tailored shopping cart solution with your MLM Software for a smooth e-commerce experience.",
    icon: "/images/computer.png",
  },
  {
    title: "Enhanced Security with Two-Factor Authentication",
    desc: "Keep your system secure with our robust two-factor authentication services.",
    icon: "/images/authentication.png",
  },
  {
    title: "Designs That Delight",
    desc: "Deliver an impact with visually stunning designs perfectly aligned with your business objectives.",
    icon: "/images/coworking.png",
  },
  {
    title: "24/7 Support and Quick Resolution",
    desc: "Our dedicated customer support team is available around the clock to assist you with any concerns.",
    icon: "/images/hours.png",
  },
  {
    title: "Mobile-Optimized Back Office",
    desc: "Streamline your back-office operations with our mobilization tools designed for MLM Software.",
    icon: "/images/backoffice.png",
  },
];

const strategies = [
  {
    title: "Matrix Plan",
    desc: "An organized distributor plan designed to encourage the recruitment of additional members down the line.",
    icon: "/images/plans/plan-1.webp",
  },
  {
    title: "Generation Plan",
    desc: "Ideal for companies dealing in consumable goods, offering a robust structure for sustainable growth.",
    icon: "/images/plans/plan-2.webp",
  },
  {
    title: "Binary Plan",
    desc: "A simplified network model where distributors build under two initial members, creating balanced growth.",
    icon: "/images/plans/plan-3.webp",
  },
  {
    title: "Board Plan",
    desc: "A critical compensation plan focusing on business services development and leadership within the network.",
    icon: "/images/plans/plan-4.webp",
  },
  {
    title: "Hybrid Plan",
    desc: "A versatile and successful plan widely adopted for its adaptability and quality response.",
    icon: "/images/plans/plan-5.webp",
  },
  {
    title: "Unilevel Plan",
    desc: "A straightforward plan with unlimited width, perfect for ease of use and scalability.",
    icon: "/images/plans/plan-6.webp",
  },
  {
    title: "Repurchase Plan",
    desc: "Facilitates direct marketing of goods or services, streamlining customer interactions and repeat purchases.",
    icon: "/images/plans/plan-7.webp",
  },
  {
    title: "Stair Step/Orbit Plan",
    desc: "One of the oldest MLM strategies, also known as the Stair Step Breakaway Plan, focusing on incremental growth.",
    icon: "/images/plans/plan-8.webp",
  },
  {
    title: "Investment Plan",
    desc: "A software solution tailored to simplify database management systems for better financial planning.",
    icon: "/images/plans/plan-9.webp",
  },
];

const MlmPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="mlm-main-container padding-layout">
          <div className="mlm-bg-img-div">
            <img src="/images/hero.webp" />
          </div>
          <div style={{ width: "100%" }}>
            <h2>Custom MLM Software Development Company</h2>
            <p style={{ marginTop: "0.5rem" }}>
              With over 10 years of experience and 1,000+ software installations
              worldwide, PN Software Tech Pvt. Ltd. is a trusted name in MLM
              software development. Leading organizations rely on our software
              to enhance their Multi-Level Marketing (MLM) operations,
              streamline efficiency, and accelerate business growth.
            </p>
            <h4 style={{ marginTop: "1rem" }}>
              Our Direct Selling Software addresses all your network marketing
              challenges effortlessly, providing:
            </h4>
            <div className="advantage-two">
              {mlm.map((ser, id) => (
                <span key={id}>
                  <span>
                    <ChevronRight className="check-icon" />
                  </span>
                  {ser}
                </span>
              ))}
            </div>
            <p style={{ marginTop: "1rem" }}>
              These features empower businesses to achieve their sales and
              revenue targets effectively.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              For the past decade, PN Software Tech Pvt. Ltd. has been a trusted
              and reliable MLM software development company based in Lucknow. As
              a top and dependable brand in India, we continue to provide
              cutting-edge solutions for network marketing success.
            </p>
          </div>
          <div style={{ width: "100%" }}>
            <img
              src="/images/work.webp"
              alt="PN Software Pvt Ltd"
              style={{ width: "100%" }}
            />
          </div>
        </section>

        <section className="mlm-main-grid-container padding-layout">
        <div className="mlm-bg-img-div">
            <img src="/images/glow.webp" className="glow-img"/>
          </div>
          <div>
            <div className="mlm-details">
              <h2>MLM Software Solutions</h2>
              <h4 style={{ marginTop: "0.2rem", textAlign: "center" }}>
                Boost Your MLM Business with Our Cutting-Edge Software
              </h4>
              <div
                className="custom-underline"
                style={{ marginTop: "0.8rem" }}
              ></div>
              <p
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                  maxWidth: "55rem",
                }}
              >
                Our Multi-Level Marketing software offers advanced features, an
                intuitive interface, and seamless usability. These tools are
                tailored to help businesses in the network marketing sector
                achieve their targets with ease.
              </p>
              <p
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                  maxWidth: "55rem",
                }}
              >
                As a trusted MLM Software Company located in Kolkata, we are
                dedicated to providing reliable solutions that fuel business
                growth and success.
              </p>
            </div>
            <div className="mlm-grid-container">
              {services.map((ser, id) => (
                <div className="mlm-grid-card" key={id}>
                  <div className="mlm-img-div">
                    <img src={ser.icon} alt="PN Software Tech Pvt. Ltd." />
                  </div>
                  <div className="mlm-content">
                    <h3 className="mlm-title">{ser.title}</h3>
                    <p className="mlm-desc">{ser.desc}</p>
                  </div>
                  <div className="mlm-overlay">
                    <h3 className="mlm-title">{ser.title}</h3>
                    <p className="mlm-desc">{ser.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mlm-startegy-container padding-layout">
          <div className="mlm-startegy-details">
            <h2>MLM Business Strategy</h2>
            <div className="custom-underline"></div>
            <p>
              Empowering your business with the tools and guidance needed for
              online success.
            </p>
          </div>

          <div className="mlm-startegy-card-container">
            {strategies.map((startegy, id) => (
              <div className="mlm-startegy-card" key={id}>
                <div className="mlm-img-div">
                  <img src={startegy.icon} alt="PN Software Tech Pvt. Ltd." />
                </div>
                <div className="mlm-content">
                  <h3 className="mlm-title">{startegy.title}</h3>
                  <p className="mlm-desc">{startegy.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MlmPage;
