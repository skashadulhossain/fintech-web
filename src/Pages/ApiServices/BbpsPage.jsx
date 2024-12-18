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
                    <div className="advantage">
                      <span>
                        <span>
                          <Check className="check-icon" />
                        </span>
                        <span style={{ fontWeight: 600 }}>
                          Anytime, Anywhere Bill Payment:
                        </span>
                        Customers can pay bills at any time with ease, even on
                        weekends or holidays.
                      </span>
                      <span>
                        <span>
                          <Check className="check-icon" />
                        </span>
                        <span style={{ fontWeight: 600 }}>
                          One-Stop Solution:
                        </span>
                        Simplifies all recurring bill payments on a single
                        platform.
                      </span>
                      <span>
                        <span>
                          <Check className="check-icon" />
                        </span>
                        <span style={{ fontWeight: 600 }}>
                          Instant Payment Confirmation:
                        </span>
                        Receive real-time payment updates and transaction
                        status.
                      </span>
                      <span>
                        <span>
                          <Check className="check-icon" />
                        </span>
                        <span style={{ fontWeight: 600 }}>
                          Secure and Reliable Transactions:
                        </span>
                        Built with advanced security protocols to ensure safe
                        and error-free payments.
                      </span>
                      <span>
                        <span>
                          <Check className="check-icon" />
                        </span>
                        <span style={{ fontWeight: 600 }}>
                          Customer-Friendly:
                        </span>
                        Convenient and unified system that includes simplified
                        consumer redressal processes.
                      </span>
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
                  <h3>BBPS PARTNERS</h3>
                  <div className="custom-underline"></div>
                  <div style={{ marginTop: "1rem" }}>
                    <h4>Easy for you and your customers!</h4>
                    <p style={{ marginTop: "5px" }}>
                      Once you get listed as an authorized BBPS partner, your
                      customers will enjoy the ease of hassle-free bill
                      payments. Also, it's a great opportunity for you to
                      enhance your customer's trust. BBPS allows you to build
                      healthy customer relationships, and leverages your
                      business network.
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
                    <h4>
                      Bill collection more cost-effective with wider reach!
                    </h4>
                    <p style={{ marginTop: "5px" }}>
                      No more chasing after bills. With BBPS, you can collect
                      your bills fast and keep track of all payments. It offers
                      a wider reach through different channels of payment and
                      helps you earn your customer's trust.
                    </p>
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
                    The Bharat Bill Payment System facilitates the instalment of
                    bills and enhances the security and speed of bill payment.
                    The administration is accessible in different ways: on the
                    web and through a system of specialists. A momentary
                    affirmation is produced for the bill installments. The BBPS
                    will transition the public from cash to an electronic
                    payment framework, making it less reliant on money. You can
                    currently pay utility charges (gas, power, water, and DTH).
                  </p>
                  <p style={{ marginTop: "1rem" }}>
                    It offers unwavering quality and wellbeing for the
                    exchanges. You can pay your bills utilizing BBPS from
                    anywhere, whenever. Additionally, it enables you to pay
                    charges through the systems of operators or on the web. You
                    have several payment options with instant confirmation of
                    the payment. You can pay your bill with BBPS using
                    electronic exchange rather than real money. Subsequently, it
                    is said to be a major advance towards a paperless money
                    society.
                  </p>
                </div>

                <div style={{ width: "100%" }}>
                  <img
                    src="/images/biller-img-1.webp"
                    alt="img"
                    loading="lazy"
                    className=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <div>
                <h2>
                  <span style={{ fontWeight: 600 }}>Bharat BillPay</span> - The
                  One stop destination for all recurring payments:
                </h2>
                <div className="custom-underline"></div>
                <p style={{ marginTop: "1rem" }}>
                  The Bharat Bill Payment System accepts multiple payment
                  methods and provides instant payment confirmation via SMS or
                  receipt with a Be-assured symbol. It offers repetitive
                  payments of all types, like electricity, telecom, DTH, gas,
                  and water bills; insurance premiums; loan repayments; cable;
                  FASTag recharge; education fees; credit card; municipal taxes;
                  mutual subscription fees; housing society dues; etc., through
                  a single window. An effective mechanism for handling consumer
                  complaints has also been put in place to support consumers
                  regarding any bill-related problems in BBPS. Roundpay is the
                  most reliable brand among the BBPS API providers in India.
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
