import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import "./api.css";
import { Check } from "lucide-react";

const advantages = [
  {
    title: "Unified Platform",
    desc: "Recharge for all network operators from a single platform.",
  },
  {
    title: "High Commissions",
    desc: "Maximize profits with elevated commission rates.",
  },
  {
    title: "Automated Refunds",
    desc: "Failed recharges are refunded automatically within 24 hours.",
  },
  {
    title: "Secure & Verified APIs",
    desc: "Enjoy highly protected and validated API integrations.",
  },
  {
    title: "Scalable Transactions",
    desc: "Supports high-volume transactions with ease.",
  },
  {
    title: "Instant Transaction ID",
    desc: "Get immediate transaction IDs for seamless operations.",
  },
  {
    title: "Nationwide Reach",
    desc: "Access recharge services for any network across India.",
  },
];

const rechargeSteps = [
  "Provide the required details such as the mobile number, network operator, region, and recharge amount.",
  "Review the payment information and click the 'Continue' button to proceed.",
  "You will receive a confirmation via SMS or email with all the recharge details on the registered mobile number or email ID.",
];

const mobile_recharges = [
  "Effortless mobile recharge services available across India.",
  "Covers all major providers for Mobile, DTH, and Data Card services, including Airtel, Vodafone, Idea, BSNL, Tata Sky, and more.",
  "Reliable infrastructure and exceptional services ensure smooth operations.",
  "Start an online recharge service without the need for upfront capital.",
  "Expansion in the telecom sector results in consistent returns.",
  "Offers mobile recharge for all cellular networks, DTH recharge with operator transaction IDs, postpaid bill payment, and more.",
  "The API can be integrated into existing websites or businesses for enhanced functionality.",
  "No need to maintain separate stock for each mobile operator.",
  "Operate digitally without the hassle of paper-based coupons.",
  "Based on daily transactions with no minimum deposits or balance maintenance requirements.",
];

const RechargeApiPage = () => {
  return (
    <>
      <MainLayout pageTitle="Recharge API">
        <div className="main-container">
          <div className="api-details">
            <h2>Overview</h2>
            <p>
              PN Software Tech Pvt. Ltd is one of India's leading multi-recharge
              service providers. We offer secure, reliable, and fast-growing
              Mobile Recharge API solutions. An API, or "Application Programming
              Interface," acts as a bridge, allowing different software
              applications to seamlessly communicate and exchange data with each
              other.
            </p>
            <p>
              PN Software Tech Pvt. Ltd offers one of the most advanced and
              dependable Multi Recharge API solutions in the market today. As a
              trusted name among Recharge API providers in India, we focus on
              delivering cost-effective and highly efficient solutions. Our
              commitment to adopting the latest technologies ensures that our
              API services remain innovative, seamless, and ahead of industry
              standards, providing maximum value to our clients.
            </p>
            <div className="advantage-container">
              <div>
                <h2>Benefits of Using Our Recharge API</h2>
                <div className="advantage-two">
                  {advantages.map((ser, id) => (
                    <span key={id}>
                      <span>
                        <Check className="check-icon" />
                      </span>
                      {ser.title ? (
                        <span className="title-desc-container">
                          <span className="title-text">{ser.title}:</span>
                          {ser.desc}
                        </span>
                      ) : (
                        ser.desc
                      )}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="/images/api.webp"
                  alt="img"
                  loading="lazy"
                  className=""
                />
              </div>
            </div>

            <div className="launch-desc">
              <h2>Launch Your Own Recharge Business</h2>
              <p>
                PN Software Tech Pvt. Ltd provides a range of recharge packages
                to suit your business needs. As a leading provider of recharge
                solutions, we offer cost-effective and reliable services without
                compromising on performance. Our dedication to integrating the
                latest technological advancements ensures our solutions stand
                out, offering unmatched efficiency and value to our clients.
              </p>
            </div>
            <div className="advantage-container">
              <div>
                <h2>How to Use Our Recharge API?</h2>
                <div className="advantage">
                  {rechargeSteps.map((step, index) => (
                    <span key={index}>
                      <span>
                        <Check className="check-icon" />
                      </span>
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="launch-desc">
              <h2>How Does the API Work?</h2>
              <p>
                With our Mobile Recharge API, recharging becomes as simple as a
                single click. We provide a code snippet that seamlessly
                integrates with your existing website. An interface page allows
                you to place recharge orders for various operators. Once the
                recharge is processed, the amount is deducted from your wallet.
                Additionally, you can track your wallet balance, view
                commissions earned, access recharge history, and check the
                status of each transaction—all from your wallet page.
              </p>
            </div>
            <div className="advantage-container">
              <div>
                <h2>Advantages of Mobile Recharge API</h2>
                <div className="advantage">
                  {mobile_recharges.map((recharge, index) => (
                    <span key={index}>
                      <span>
                        <Check className="check-icon" />
                      </span>
                      {recharge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default RechargeApiPage;
