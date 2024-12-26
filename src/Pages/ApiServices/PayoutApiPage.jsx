import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import { Check, Earth } from "lucide-react";
import WhyPayoutSelect from "../../Components/PayoutComponents/WhyPayoutSelect";

const way = [
  { logo: "/images/login.png", title: "Login" },
  { logo: "/images/beneficiary.png", title: "Add beneficiary" },
  { logo: "/images/details.png", title: "Enter Details" },
  { logo: "/images/atm.png", title: "Initiate Payout" },
];

const buisnessArr = [
  {
    title: "Multi-Account Settlements:",
    desc: "Effortlessly settle payments to multiple bank accounts with PN Software Tech Pvt. Ltd.'s Payout API.",
  },
  {
    title: "Real-Time Updates:",
    desc: "Access real-time transaction reports for enhanced transparency and control.",
  },
  {
    title: "A Combination Of 3 Robust APIs:",
    desc: "Includes APIs for Adding Beneficiaries, Payout Processing, and Payout Enquiries, ensuring a seamless experience.",
  },
  {
    title: "Developer-Friendly APIs:",
    desc: "Simplified integration for a comprehensive payout solution tailored to vendors, customers, and partners.",
  },
  {
    title: "Multichannel Payment Options:",
    desc: "Utilize various payment channels supported by PN Software Tech Pvt. Ltd.'s Payout API for greater flexibility.",
  },
  {
    title: "Multiple Payment Modes:",
    desc: "Supports NEFT, RTGS, IMPS, UPI, and PPI Wallet for secure and versatile transactions.",
  },
];

const PayoutApiPage = () => {
  return (
    <>
      <MainLayout pageTitle="Payout API">
        <div className="main-container">
          <div className="api-details">
            <div className="payout-div-one">
              <div>
                <h5>Payout API</h5>
                <div className="custom-underline"></div>
                <h2 style={{ margin: "1rem 0 1rem 0" }}>
                  Simple, Reliable Payouts That Scale with Your Business
                </h2>
                <div>
                  <div className="advantage-two">
                    {buisnessArr.map((ser, id) => (
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
                    <button>Contact US</button>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/images/integration.png"
                  alt=""
                  loading="lazy"
                  style={{ width: "100%", height: "auto" }}
                />
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
                    <h3 className="title">Unrestricted Transactions</h3>
                    <p className="description">
                      Make direct payments from your Pool, Nodal, or Current
                      Account without locking funds in third-party wallets or
                      aggregator accounts.
                    </p>
                  </div>
                  <div className="serviceBox-payout">
                    <div className="service-icon">
                      <span>
                        <Earth style={{ width: "28px", height: "28px" }} />
                      </span>
                    </div>
                    <h3 className="title">Comprehensive API Suite</h3>
                    <p className="description">
                      Utilize 3 powerful APIs for Adding Beneficiaries,
                      Processing Payouts, and Checking Transaction Status.
                    </p>
                  </div>
                  <div className="serviceBox-payout">
                    <div className="service-icon">
                      <span>
                        <Earth style={{ width: "28px", height: "28px" }} />
                      </span>
                    </div>
                    <h3 className="title">Flexible Payout Scheduling</h3>
                    <p className="description">
                      Trigger payouts instantly or schedule them conveniently
                      through the API.
                    </p>
                  </div>

                  <div className="serviceBox-payout">
                    <div className="service-icon">
                      <span>
                        <Earth style={{ width: "28px", height: "28px" }} />
                      </span>
                    </div>
                    <h3 className="title">IP-Based Access Control</h3>
                    <p className="description">
                      Safeguard transactions with IP whitelisting for secure
                      access.
                    </p>
                  </div>

                  <div className="serviceBox-payout">
                    <div className="service-icon">
                      <span>
                        <Earth style={{ width: "28px", height: "28px" }} />
                      </span>
                    </div>
                    <h3 className="title">Advanced Authentication Mechanism</h3>
                    <p className="description">
                      Leverage token-based API access for robust security.
                    </p>
                  </div>

                  <div className="serviceBox-payout">
                    <div className="service-icon">
                      <span>
                        <Earth style={{ width: "28px", height: "28px" }} />
                      </span>
                    </div>
                    <h3 className="title">Instant Transaction Notifications</h3>
                    <p className="description">
                      Receive live updates for all your transactions in real
                      time.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="payout-two-div">
                <div style={{ width: "100%" }}>
                  <img
                    src="/images/build-app.jpg"
                    alt="img"
                    loading="lazy"
                    className=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>

                <div style={{ width: "100%" }}>
                  <h3>Designed for Developers</h3>
                  <div className="custom-underline"></div>
                  <div style={{ marginTop: "1.5rem" }}>
                    <h2>Effortless Integration</h2>
                    <ul style={{ marginLeft: "1rem" }} className="advantage">
                      <li>
                        Seamlessly process payouts in real-time by simply
                        passing a few parameters to the API for payments to
                        specified Bank Accounts or VPAs.
                      </li>
                      <li>
                        Built-in Encryption and Decryption functions in the
                        source code ensure robust security for your platform and
                        transactions.
                      </li>
                      <li>
                        Comprehensive assistance to ensure smooth and
                        hassle-free API integration.
                      </li>
                    </ul>

                    <div className="contact-buttons">
                      <button>Contact US</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <h1 style={{ textAlign: "center" }}>What does Payouts do?</h1>
                <div className="custom-underline"></div>
                <p style={{ marginTop: "1rem" }}>
                  Initiate ecommerce refunds, send vendor payments, distribute
                  game winnings and much more with Payouts
                </p>
              </div>

              <div>
                <WhyPayoutSelect />
              </div>
            </section>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default PayoutApiPage;
