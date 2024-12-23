import React from "react";
import OtherLayout from "../../Components/Layout/OtherLayout";
import { Check, ChevronRight } from "lucide-react";

const miniandmicro = [
  {
    title: "Realtime Settlement",
    desc: "Instant and hassle-free transaction settlements.",
  },
  {
    title: "Best MDR",
    desc: "Enjoy market-leading Merchant Discount Rates.",
  },
  {
    title: "Attractive Revenue Sharing",
    desc: "Maximize earnings with our competitive revenue-sharing model for Cash@POS and mATM.",
  },
  {
    title: "Flexible Budget Options",
    desc: "Accessible solutions for all budget points.",
  },
  {
    title: "Brand Growth",
    desc: "Expand your presence in the acquiring space effortlessly.",
  },
  {
    title: "Quick Customer Acquisition",
    desc: "Accelerate customer onboarding and revenue generation.",
  },
  {
    title: "Low-Maintenance Solution",
    desc: "Minimal upkeep with maximum efficiency.",
  },
  {
    title: "Multiple Digital Payment Modes",
    desc: "Support for various digital payment methods for customer convenience.",
  },
  {
    title: "Experienced Team",
    desc: "Backed by a skilled and reliable team for seamless operations.",
  },
  {
    title: "Market Share Expansion",
    desc: "Boost your overall business market share.",
  },
  {
    title: "New CASA Acquisition",
    desc: "Gain new Current Account Savings Account (CASA) customers and cross-sell additional products.",
  },
];

const benefits = [
  {
    title: "Financial Inclusion for Rural Areas",
    desc: "Designed to empower rural populations by providing essential banking services.",
  },
  {
    title: "Convert Your Shop Into an ATM",
    desc: "Offer ATM services directly from your shop to enhance customer convenience.",
  },
  {
    title: "Cost-Effective Solution",
    desc: "A low-cost alternative to traditional ATMs, suitable for small businesses.",
  },
  {
    title: "Portable and Easy to Use",
    desc: "Compact and lightweight, allowing setup and use in remote locations.",
  },
  {
    title: "Interoperable Across Banks",
    desc: "Compatible with multiple banks, ensuring seamless transactions.",
  },
  {
    title: "Supports During Cash Crunch",
    desc: "A vital tool during periods of cash scarcity, like demonetization, helping communities manage financial needs effectively.",
  },
];

const MatmPage = () => {
  return (
    <>
      <OtherLayout>
        <section>
          <div className="matm-heading">
            <h2>Mini ATM</h2>
            <div className="custom-underline"></div>
            <p>
              A secure, simple, and affordable payment solution for merchants,
              equipped with advanced features to manage stores, engage
              customers, and offer rewards.
            </p>
          </div>

          <div style={{ padding: "2rem 0 2rem 0", textAlign: "center" }}>
            <h4 style={{ marginTop: "1rem" }}>* Micro Aadhaar ATM *</h4>
            <p style={{ marginTop: "0.5rem" }}>
              Micro Aadhaar ATM enables Business Correspondents (BCs) to deliver
              basic banking services through instant transactions. Acting as
              Aadhaar Micro ATMs, local Kirana shop owners and other BCs can
              provide convenient banking access.
            </p>
            <h4 style={{ marginTop: "1rem" }}>* Join Us as a Partner *</h4>
            <p style={{ marginTop: "0.5rem" }}>
              Partner with us to promote this solution in your region. Earn up
              to ₹1 lakh per month while making a positive impact on thousands
              of merchants' lives.
            </p>
          </div>

          <div className="aeps-div-two">
            <div style={{ width: "100%" }}>
              <h2>Features of Using Micro/Mini ATM</h2>
              <div className="custom-underline"></div>
              <div className="advantage-two">
                {miniandmicro.map((ser, id) => (
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
              <div className="contact-buttons">
                <button>Contact Us</button>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <img
                src="/images/aeps.jpg"
                alt="img"
                loading="lazy"
                className=""
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              />
            </div>
          </div>
        </section>
        <section className="aeps-div-three">
          <div style={{ width: "100%" }}>
            <img
              src="/images/office.jpg"
              alt="img"
              loading="lazy"
              className=""
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <h2>Benefits of Using Micro/Mini ATM Machines</h2>
            <div className="custom-underline"></div>
            <p style={{ marginTop: "0.8rem", color: "#635AD9" }}>
              The Mini ATM Machine is specifically designed to promote financial
              inclusion in rural areas. During times of heavy cash crunch, these
              Micro ATM Machines prove to be a boon, providing easy access to
              essential banking services for everyone.
            </p>
            <div className="advantage-two">
              {benefits.map((ser, id) => (
                <span key={id}>
                  <span>
                    <ChevronRight className="check-icon" />
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
        </section>

        <section>
          <div className="matm-content">
            <h2>Mini ATM Whitelabel Solutions</h2>
            <p>
              <span style={{ fontWeight: 700, fontSize: "14px" }}>
                PN Software Tech Pvt. Ltd.
              </span>{" "}
              empowers your business with innovative transaction processing
              technology through Micro ATM Machines. Our Whitelabel Solutions
              are designed to help you scale and enhance your business
              seamlessly.
            </p>
          </div>
        </section>

        <section style={{marginTop: "4rem"}}>
          <div>
            <h2 style={{marginTop: ""}}>Customizable POS and Mobile-POS Whitelabel Solutions</h2>
            <h4 style={{marginTop: "0.5rem", color: "#635AD9"}}>Your Brand | Your Digital POS | Your App & mPOS Solutions</h4>
            <p style={{marginTop: "1rem"}}>
              PN Software Tech Pvt. Ltd., a leading mATM provider, empowers your
              business with cutting-edge transaction processing technology
              through its innovative Micro ATM Machines. Offering a
              cost-effective NFC Chip + PIN solution, PN Software Tech Pvt. Ltd.
              ensures seamless and hassle-free transactions. Designed for
              merchants, this solution provides a secure, user-friendly, and
              affordable payment system, complete with advanced features to
              manage stores, engage customers, reward loyalty, and track sales.
              Additionally, PN Software Tech Pvt. Ltd.'s mPOS and POS card
              swiping devices support both Chip and Magstripe cards, meeting PCI
              and EMV L1 & L2 certifications to guarantee secure payment
              processing.
            </p>
          </div>
        </section>
      </OtherLayout>
    </>
  );
};

export default MatmPage;