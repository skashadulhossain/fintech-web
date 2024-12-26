import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import PageRoutes from "../../Components/PageRoutes";
import { apiServices } from "../../js/pageOptions";
import { Check, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const bbpsServices = [
  { title: "Electricity", link: "#" },
  { title: "Pipe Gas", link: "#" },
  { title: "Water", link: "#" },
  { title: "Telecom", link: "#" },
  { title: "Postpaid", link: "#" },
  { title: "Insurance", link: "#" },
  { title: "Loan Repayments", link: "#" },
  { title: "FASTagRecharge", link: "#" },
  { title: "Cable", link: "#" },
  { title: "Education Fees", link: "#" },
  { title: "Subcription", link: "#" },
  { title: "LPG Cylinder Booking", link: "#" },
];

const benefits = [
  {
    title: "Anytime, Anywhere Bill Payment",
    desc: "Customers can pay bills at any time with ease, even on weekends or holidays.",
  },
  {
    title: "One-Stop Solution",
    desc: "Simplifies all recurring bill payments on a single platform.",
  },
  {
    title: "Instant Payment Confirmation",
    desc: "Receive real-time payment updates and transaction status.",
  },
  {
    title: "Secure and Reliable Transactions",
    desc: "Built with advanced security protocols to ensure safe and error-free payments.",
  },
  {
    title: "Customer-Friendly",
    desc: "Convenient and unified system that includes simplified consumer redressal processes.",
  },
];

const BbpsPage = () => {
  return (
    <>
      <MainLayout pageTitle="BBPS">
        <div className="main-container">
          <div className="api-details">
            <div className="bbps-first-div">
              <div>
                <div>
                  <h2>Bharat Bill Payment System (BBPS) API Services</h2>
                  <div className="custom-underline"></div>
                </div>
                <p style={{ marginTop: "1rem" }}>
                  PN Software Tech Pvt. Ltd., a leading BBPS API provider,
                  offers the Bharat Bill Payment System API with 24/7
                  auto-billing support, ensuring seamless and efficient
                  recurring bill payments for customers.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  BBPS, conceptualized by the Reserve Bank of India (RBI) and
                  managed by the National Payments Corporation of India (NPCI),
                  is a unified and secure bill payment system. It provides
                  interoperable and accessible solutions for recurring payments
                  like electricity, water, gas, DTH, telecom, and more.
                </p>
                <div className="advantage-container">
                  <div style={{ marginTop: "1rem" }}>
                    <h3>Key Benefits of BBPS API</h3>
                    <div className="advantage-two">
                      {benefits.map((ser, id) => (
                        <span key={id}>
                          <span>
                            <Check className="check-icon" />
                          </span>

                          <span className="title-desc-container">
                            <span className="title-text">{ser.title}:</span>
                            {ser.desc}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ width: "100%" }}>
                <img
                  src="/images/BBPS.webp"
                  alt="img"
                  loading="lazy"
                  className=""
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>

            <div className="bbps-two-div">
              <div className="bbps-details">
                <div className="">
                  <h3>Becoming an Authorized BBPS Partner</h3>
                  <div className="custom-underline"></div>
                  <div style={{ marginTop: "1rem" }}>
                    <h4>
                      Simplifying Bill Payments for You and Your Customers
                    </h4>
                    <p style={{ marginTop: "5px" }}>
                      By getting listed as an authorized BBPS partner, you
                      provide your customers with the convenience of hassle-free
                      bill payments. This opportunity not only enhances their
                      trust in your services but also helps you strengthen
                      customer relationships. Moreover, BBPS empowers you to
                      expand your business network and foster long-term growth.
                    </p>
                  </div>
                </div>

                <div style={{ width: "100%" }}>
                  <img
                    src="/images/BBPS_Partners.webp"
                    alt="img"
                    loading="lazy"
                    className=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <div style={{ paddingTop: "4rem" }} className="bbps-details">
                <div style={{ width: "100%" }}>
                  <img
                    src="/images/BBPS_Billers.webp"
                    alt="img"
                    loading="lazy"
                    className=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>

                <div className="">
                  <h3>BILLERS</h3>
                  <div className="custom-underline"></div>
                  <div style={{ marginTop: "1rem" }}>
                    <h4>Streamline Bill Collection with Wider Reach!</h4>
                    <p style={{ marginTop: "5px" }}>
                      Say goodbye to chasing after bills. BBPS makes bill
                      collection faster and more efficient while ensuring you
                      can track all payments seamlessly. With access to a
                      broader audience through multiple payment channels, you
                      can enhance your operations and build trust with your
                      customers.
                    </p>
                  </div>
                  <div className="contact-buttons">
                    <button>Contact Us</button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h3>BBPS</h3>
                <div className="custom-underline"></div>
                <h2 style={{ marginTop: "0.5rem" }}>Billers & Categories</h2>

                <div style={{ margin: "2rem 0 2rem 0" }}>
                  <p>
                    The Bharat Bill Payment System (BBPS) revolutionizes bill
                    payments by providing a secure, fast, and reliable way to
                    settle utility charges. Accessible both online and through a
                    vast network of agents, BBPS ensures seamless transactions
                    with instant payment confirmations.
                  </p>
                  <p style={{ marginTop: "1rem" }}>
                    By enabling electronic payments for services like gas,
                    electricity, water, and DTH, BBPS reduces dependence on cash
                    and promotes a paperless, digital society. It offers the
                    convenience of multiple payment modes, whether online or
                    through agent networks, empowering users to pay bills
                    anytime, anywhere. With BBPS, you experience enhanced safety
                    and reliability for all transactions, marking a significant
                    step toward a cashless future.
                  </p>
                </div>

                <div style={{ width: "100%" }}>
                  <img
                    src="/images/bbps-api.jpg"
                    alt="img"
                    loading="lazy"
                    className=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <div>
                <h2>
                  <span style={{ fontWeight: 600 }}>Bharat BillPay</span> - Your
                  One-Stop Solution for Recurring Payments:
                </h2>
                <div className="custom-underline"></div>
                <p style={{ marginTop: "1rem" }}>
                  Bharat Bill Payment System (BBPS) simplifies recurring
                  payments by accepting multiple payment methods and providing
                  instant payment confirmations via SMS or receipt marked with
                  the Be-Assured symbol. Whether it's electricity, telecom, DTH,
                  gas, water bills, insurance premiums, loan repayments, cable,
                  FASTag recharge, education fees, credit card payments,
                  municipal taxes, mutual subscription fees, or housing society
                  dues, BBPS consolidates them all into a single window for your
                  convenience.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Additionally, BBPS offers an efficient consumer complaint
                  handling system to resolve bill-related issues promptly.
                  Experience seamless bill payment solutions with the trusted
                  reliability of BBPS API services in India.
                </p>
                <div className="bbps-links">
                  {bbpsServices.map((service, id) => (
                    <>
                      <Link to={service.link} key={id}>
                        {service.title}
                      </Link>
                    </>
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

export default BbpsPage;
