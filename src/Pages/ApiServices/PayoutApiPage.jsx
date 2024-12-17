import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import { apiServices } from "../../js/pageOptions";
import PageRoutes from "../../Components/PageRoutes";
import { Check, ChevronRight, Earth } from "lucide-react";

const way = [
  { logo: "/images/login.png", title: "Login" },
  { logo: "/images/beneficiary.png", title: "Add beneficiary" },
  { logo: "/images/details.png", title: "Enter Details" },
  { logo: "/images/atm.png", title: "Initiate Payout" },
];

const PayoutApiPage = () => {
  return (
    <>
      <MainLayout>
        <div className="header-div">
          <div className="header">
            {/* <h1>keyword research</h1> */}
            <div className="header-nav">
              API Services{" "}
              <ChevronRight style={{ width: "18px", height: "18px" }} /> Payout
              API
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="page-routes-nav-container">
            <PageRoutes title="API Services" options={apiServices} />
          </div>
          <div className="api-details">
            <div className="payout-div-one">
              <div>
                <h5>Payout API</h5>
                <div className="custom-underline"></div>
                <h2 style={{ margin: "1rem 0 1rem 0" }}>
                  Simple, Reliable Payouts that Scale with your Business
                </h2>
                <div>
                  <div className="advantage-two">
                    <span>
                      <span>
                        <Check className="check-icon" />
                      </span>
                      <span style={{ fontWeight: 600 }}>
                        Multi-Account Settlements:
                      </span>
                      With Roundpay Payout API merchants can easily settle
                      payments to multiple bank accounts.
                    </span>
                    <span>
                      <span>
                        <Check className="check-icon" />
                      </span>
                      <span style={{ fontWeight: 600 }}>
                        Real-Time Updates:
                      </span>
                      Merchant gets access to Real-time Transaction reports.
                    </span>
                    <span>
                      <span>
                        <Check className="check-icon" />
                      </span>
                      <span style={{ fontWeight: 600 }}>
                        A Combination Of 3 Robust APIs:
                      </span>
                      Roundpay Payout has 3 Inclusive APIs for Adding
                      Beneficiary, Payout processing and Payout Enquiry.
                    </span>
                    <span>
                      <span>
                        <Check className="check-icon" />
                      </span>
                      <span style={{ fontWeight: 600 }}>
                        Developer-Friendly APIs:
                      </span>
                      Easy API Integration, gives merchants a complete payout
                      solution for vendors, customers, and partners.
                    </span>
                    <span>
                      <span>
                        <Check className="check-icon" />
                      </span>
                      <span style={{ fontWeight: 600 }}>
                        Multichannel Payment Options:
                      </span>
                      Roundpay Payout API has options for Multichannel payment
                      partners.
                    </span>
                    <span>
                      <span>
                        <Check className="check-icon" />
                      </span>
                      <span style={{ fontWeight: 600 }}>
                        Multiple Payment Modes:
                      </span>
                      NEFT , RTGS, IMPS , UPI, PPI Wallet
                    </span>
                  </div>

                  <div className="contact-buttons">
                    <button>Contact US</button>
                  </div>
                </div>
              </div>
              <div>
                <img src="/images/integration.png" alt="" loading="lazy" />
              </div>
            </div>
            <div className="offbit">
              {way.map((el, id) => (
                <div key={id} className="inner-offbit">
                  <div>
                    <img src={el.logo} alt="" loading="lazy" className="" />
                  </div>
                  <p style={{ textAlign: "center" }}>{el.title}</p>
                </div>
              ))}
            </div>

            <section className="service-wrap style3 ptb-100 bg-rock">
              <div className="container">
                <div className="section-title style1">
                  <h2 className="">One API For All Payouts</h2>
                </div>
                <div className="section-title-grid">
                  <div className="serviceBox-payout">
                    <div className="service-icon">
                      <span>
                        <Earth style={{ width: "28px", height: "28px" }} />
                      </span>
                    </div>
                    <h3 className="title">Total Freedom</h3>
                    <p className="description">
                      Pay directly from your Pool/Nodal/Current Account, without
                      blocking funds in your Payment Aggregators account/3rd
                      party wallet.
                    </p>
                  </div>
                  <div className="serviceBox-payout">
                    <div className="service-icon">
                      <span>
                        <Earth style={{ width: "28px", height: "28px" }} />
                      </span>
                    </div>
                    <h3 className="title">Inclusive APIs</h3>
                    <p className="description">
                      3 Inclusive APIs for Adding Beneficiary, Payout
                      processing, and transaction status.
                    </p>
                  </div>
                  <div className="serviceBox-payout">
                    <div className="service-icon">
                      <span>
                        <Earth style={{ width: "28px", height: "28px" }} />
                      </span>
                    </div>
                    <h3 className="title">Easy Payout Scheduling</h3>
                    <p className="description">
                      Easily call the Payout API as and when or to schedule
                      payouts.
                    </p>
                  </div>

                  <div className="serviceBox-payout">
                    <div className="service-icon">
                      <span>
                        <Earth style={{ width: "28px", height: "28px" }} />
                      </span>
                    </div>
                    <h3 className="title">IP Whitelisting</h3>
                    <p className="description">
                      Whitelisted IP for additional security during payouts.
                    </p>
                  </div>

                  <div className="serviceBox-payout">
                    <div className="service-icon">
                      <span>
                        <Earth style={{ width: "28px", height: "28px" }} />
                      </span>
                    </div>
                    <h3 className="title">Secure Authentication</h3>
                    <p className="description">
                      A token-based API access system for enhanced security.
                    </p>
                  </div>

                  <div className="serviceBox-payout">
                    <div className="service-icon">
                      <span>
                        <Earth style={{ width: "28px", height: "28px" }} />
                      </span>
                    </div>
                    <h3 className="title">Real-time Updates</h3>
                    <p className="description">
                      Get real-time updates of all the Transactions.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default PayoutApiPage;
