import React from "react";
import OtherLayout from "../../Components/Layout/OtherLayout";
import { Check, ChevronRight } from "lucide-react";
import "./FinTech.css";

const situation = [
  {
    title: "IIN (Issuer Identification Number)",
    desc: "This identifies the bank associated with the client.",
  },
  {
    title: "Aadhaar Number",
    desc: "The Unique Identification Number linked to the individual's Aadhaar card.",
  },
  {
    title: "Biometric Verification",
    desc: "The fingerprint captured during the user's Aadhaar registration is used for authentication.",
  },
];

const aepsDetails = [
  {
    title: "Empower Bank Customers",
    desc: "Enable customers to use their Aadhaar as their identity for accessing their respective bank accounts and performing essential banking transactions such as cash deposits, withdrawals, fund transfers (both intra and inter-bank), balance enquiries, and obtaining mini statements through a Business Correspondent.",
  },
  {
    title: "Promote Financial Inclusion",
    desc: "Support the Government of India (GoI) and the Reserve Bank of India (RBI) in advancing financial inclusion across the nation.",
  },
  {
    title: "Electronification of Retail Payments",
    desc: "Contribute to the RBI's goal of promoting digital retail payments for enhanced efficiency and transparency.",
  },
  {
    title: "Aadhaar Initiated Interbank Transactions",
    desc: "Enable banks to route Aadhaar-based interbank transactions through a central switching and clearing agency, ensuring smooth and secure operations.",
  },
  {
    title: "Government Entitlement Disbursements",
    desc: "Facilitate disbursements of government benefits such as NREGA, Social Security pensions, and Old Age Pensions through Aadhaar authentication, as supported by UIDAI.",
  },
  {
    title: "Secure Interoperability",
    desc: "Ensure safe and secure interoperability across various banks, fostering seamless financial services..",
  },
  {
    title: "Foundation for Comprehensive Banking Services",
    desc: "Lay the groundwork for the expansion of a complete range of Aadhaar-enabled banking services, enabling broader financial access.",
  },
];

const whiteLable = [
  {
    title: "Complete Branding",
    desc: "Customize everything with your own logo and brand identity.",
  },
  {
    title: "Merchant Certificate",
    desc: "Provide your retailers with a certificate featuring your logo.",
  },
  {
    title: "Email and Message Customization",
    desc: "Tailor email and message settings to reflect your brand.",
  },
  {
    title: "Full User Management Control",
    desc: "Gain complete control over user management for seamless operation.",
  },
  {
    title: "25+ Services Under One Roof",
    desc: "Access and provide a wide range of services, all within one platform.",
  },
];

const api = [
  "UIDAI Supported",
  "Real-time Onboarding",
  "Best Commission in the Industry",
  "Real-time Bank Settlements",
  "Over 100 Banks Supported",
  "Compatible with All Major Biometric Devices: Mantra, Morfo, Startek, Precision, Tatvik, Secugen, Next Biometrics",
];

const features = [
  {
    title: "Instant Settlements",
    icon: "/images/task-list.png",
    desc: "We ensure real-time settlement across all transaction channels for fast and seamless processing.",
  },
  {
    title: "Proven and Scalable Technology",
    icon: "/images/digital-platform.png",
    desc: "Our platform has been tested and proven to handle millions of transactions, providing efficient and scalable services.",
  },
  {
    title: "Seamless Agent Onboarding",
    icon: "/images/customer-service.png",
    desc: "With real-time agent onboarding and eKYC integration, we enable agents to begin processing transactions immediately.",
  },
  {
    title: "Trusted and Reliable Services",
    icon: "/images/agreement.png",
    desc: "With 10 years of experience, we&apos;ve built a reputation for delivering dependable services to our partners and clients.",
  },
  {
    title: "Secure and Robust Platform",
    icon: "/images/lock.png",
    desc: "Our platform is built with high security and reliability, ensuring smooth and safe financial transactions.",
  },
];

const AepsPage = () => {
  return (
    <>
      <OtherLayout>
        <div className="main-aeps-container">
          {/* ONE */}
          <section>
            <h2>Aadhaar Enabled Payment System (AEPS)</h2>
            <div className="custom-underline"></div>

            <p style={{ padding: "1rem 0 1rem 0" }}>
              In collaboration with Fingpay and Fino Bank,{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                PN Software Tech Pvt. Ltd.
              </span>{" "}
              offers AEPS solutions to over 300 distributors across the country.
              With seamless integration, distributors can be live and
              operational within 48 hours.
            </p>
            <p style={{ padding: "0 0 1rem 0" }}>
              AEPS is a secure and user-friendly payment system based on the
              Unique Identification Number (Aadhaar). It enables Aadhaar
              cardholders to perform financial transactions effortlessly using
              Aadhaar-based authentication. This system aims to empower all
              sections of society by making banking and financial services
              accessible to everyone through Aadhaar.
            </p>
            <p style={{ padding: "0 0 1rem 0" }}>
              With AEPS, users can handle tasks such as fund transfers,
              payments, cash deposits, withdrawals, and balance inquiries at
              Point of Sale (PoS) or micro ATMs. The platform is simple, secure,
              and designed for ease of use, promoting cashless transactions
              across India.
            </p>
            <p style={{ padding: "0 0 1rem 0" }}>
              By integrating the Aadhaar Enabled Payment System API into your
              portal, you can enable secure and convenient fund transfers using
              Aadhaar details. This initiative supports cashless transactions
              while advancing financial inclusion.
            </p>
            <h4>
              To successfully complete an AEPS transaction, the following key
              details are required:
            </h4>
            <div className="advantage-two">
              {situation.map((ser, id) => (
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
            <div className="contact-buttons" style={{ marginTop: "2rem" }}>
              <button>Contact US</button>
            </div>
          </section>

          {/* TWO */}
          <section className="aeps-div-two">
            <div style={{ width: "100%" }}>
              <h2>Aadhaar Enabled Payment System (AEPS)</h2>
              <div className="custom-underline"></div>
              <div className="advantage-two">
                {aepsDetails.map((ser, id) => (
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
            <div style={{ width: "100%" }}>
              <img
                src="/images/aeps.jpg"
                alt="img"
                loading="lazy"
                className=""
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              />
            </div>
          </section>

          {/* THREE */}
          <section className="aeps-div-three">
            <div style={{ width: "100%" }}>
              <img
                src="/images/aeps.jpg"
                alt="img"
                loading="lazy"
                className=""
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <h2>
                Become a White Label Partner & Offer Services Under Your Brand
              </h2>
              <div className="custom-underline"></div>
              <p style={{ margin: "1rem 0 1rem 0" }}>
                Looking to offer services under your own brand? Partner with us
                and launch a wide range of services under your brand name in
                just a few days. Your retailers will see your company name and
                logo, ensuring full brand visibility.
              </p>
              <h4>Benefits of White Label Partnership:</h4>
              <div className="advantage-two">
                {whiteLable.map((ser, id) => (
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
          </section>

          {/* FOUR */}
          <section className="aeps-div-four">
            <div className="aeps-div-two-title">
              <h1>AEPS API</h1>
              <div className="custom-underline"></div>
            </div>
            <div className="aeps-div-four-sub">
              <div style={{ width: "100%" }}>
                <p>
                  We offer AEPS (Aadhaar Enabled Payment System) API, providing
                  an effective solution for Cash Deposits and Withdrawals,
                  particularly for Rural India.
                </p>
                <p style={{ padding: "1rem 0 0 0" }}>
                  By integrating our simple API, you can easily convert your
                  retail outlet into a Mini ATM. This will allow you to
                  facilitate government disbursements, such as NREGA, Social
                  Security pensions, Handicapped Old Age Pensions, and more,
                  using Aadhaar authentication.
                </p>
                <div className="advantage">
                  {api.map((el, id) => (
                    <span key={id}>
                      <span>
                        <ChevronRight className="check-icon" />
                      </span>
                      {el}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ width: "100%" }}>
                <img
                  src="/images/api.png"
                  alt="img"
                  loading="lazy"
                  className=""
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          </section>

          <section className="aeps-div-five">
            <div className="aeps-div-five-sub">
              <h2 style={{ textAlign: "center" }}>
                Key Features of Our AEPS Services
              </h2>
              <div className="custom-underline"></div>
              <p style={{ textAlign: "center" }}>
                We at{" "}
                <span
                  style={{
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  PN Software Tech Pvt. Ltd.
                </span>{" "}
                provide a top-notch AEPS (Aadhaar Enabled Payment System) API
                and software solution, designed to streamline Cash Deposit and
                Cash Withdrawal services in rural regions.
              </p>
            </div>

            <div className="features-container">
              {features.map((el, id) => (
                <div className="features-card" key={id}>
                  <div style={{ width: "100%", height: "auto" }}>
                    <img
                      src={el.icon}
                      alt="img"
                      loading="lazy"
                      className=""
                      style={{
                        width: "56px",
                        height: "56px",
                      }}
                    />
                  </div>
                  <div>
                    <h4>{el.title}</h4>
                    <p style={{fontSize: "14px", marginTop: "5px"}}>{el.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </OtherLayout>
    </>
  );
};

export default AepsPage;
