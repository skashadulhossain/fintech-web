import React from "react";
import "./api.css";
import MainLayout from "../../Components/Layout/MainLayout";
import { Check } from "lucide-react";

const dmtServices = [
  {
    title: "Simple Onboarding",
    desc: "Easy registration process for distributors and retailers.",
  },
  {
    title: "High Commission",
    desc: "Lucrative commission structure for both distributors and retailers.",
  },
  {
    title: "Cash Deposit Facility",
    desc: "Available through AXIS CDM for hassle-free transactions.",
  },
  {
    title: "24/7 Auto Billing",
    desc: "Instant and automated billing, ensuring round-the-clock service.",
  },
  {
    title: "Extensive Bank Network",
    desc: "Supports IMPS and NEFT transactions with over 400 banks.",
  },
  {
    title: "Auto Refunds",
    desc: "No OTP required for refunds, simplifying the process further.",
  },
  {
    title: "Account Flexibility",
    desc: "Services can be used even without a bank account.",
  },
  {
    title: "Extended Accessibility",
    desc: "Available beyond banking hours, including Sundays and public holidays.",
  },
];

const DmtPage = () => {
  return (
    <>
      <MainLayout pageTitle="Domestic Money Transfer">
        <div className="main-container">
          <div className="api-details">
            <div>
              <h2>Domestic Money Transfer</h2>
              <p style={{ marginTop: "0.5rem" }}>
                We provide Domestic Money Transfer (DMT) services, offering a
                quick, secure, and reliable way to transfer funds to over 400
                banks across India. Backed by more than five years of continuous
                development, our robust and efficient framework ensures seamless
                transactions through NEFT and IMPS. With a strong presence
                across multiple cities, our services are easily accessible,
                allowing customers to send money conveniently from our
                widespread outlets. Whether for urgent transfers or regular
                transactions, our DMT service is designed to deliver speed,
                security, and reliability every time.
              </p>
              <div className="advantage-container-two">
                <div>
                  <h2>DMT Distributor Services</h2>
                  <div className="advantage-two">
                    {dmtServices.map((ser, id) => (
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
                    src="/images/dmt.webp"
                    alt="img"
                    loading="lazy"
                    className=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <p>
                The most remarkable aspect of Domestic Money Remittance (DMT) is
                its accessibility to unbanked individuals. Even without a bank
                account, they can send money instantly to their family members,
                ensuring that everyone has the ability to make secure and fast
                transfers. This service bridges the gap for those without
                traditional banking access, providing a reliable solution for
                instant money transfers.
              </p>
            </div>

            <div className="dmt-container">
              <div>
                <img
                  src="/images/trx.png"
                  alt=""
                  loading="lazy"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div>
                <h2 style={{ margin: "1.5rem 0 1.5rem 0" }}>
                  Money Transfer Features
                </h2>
                <div className="dmt-card">
                  <div>
                    <img src="/images/data.png" alt="" className="logo" />
                    <h4 style={{ padding: "8px 0px 8px 0px" }}>
                      Easy Cash Transfer
                    </h4>
                    <p style={{ fontSize: "14px" }}>
                      Allow your retailers to enable customers to transfer funds
                      to any bank account by paying in cash through this
                      feature.
                    </p>
                  </div>
                  <div>
                    <img src="/images/task-list.png" alt="" className="logo" />
                    <h4 style={{ padding: "8px 0px 8px 0px" }}>
                      Transaction Receipt
                    </h4>
                    <p style={{ fontSize: "14px" }}>
                      Retailers can generate a transaction receipt with the Bank
                      UTR for customers, ensuring a sense of security for the
                      transaction.
                    </p>
                  </div>
                  <div>
                    <img src="/images/graph.png" alt="" className="logo" />
                    <h4 style={{ padding: "8px 0px 8px 0px" }}>
                      Highest Success Rate
                    </h4>
                    <p style={{ fontSize: "14px" }}>
                      Transaction failures are rare with our services. We
                      guarantee the highest success rate for each transaction,
                      providing reliability comparable to that of banks.
                    </p>
                  </div>
                  <div>
                    <img
                      src="/images/integration.png"
                      alt=""
                      className="logo"
                    />
                    <h4 style={{ padding: "8px 0px 8px 0px" }}>
                      Seamless Integration
                    </h4>
                    <p style={{ fontSize: "14px" }}>
                      Our Money Transfer API, based on JSON, is easy to
                      integrate for developers. Its well-documented and easy to
                      use, with 24/7 support for integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default DmtPage;
