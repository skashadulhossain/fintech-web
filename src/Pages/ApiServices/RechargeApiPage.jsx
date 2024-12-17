import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import PageRoutes from "../../Components/PageRoutes";
import { apiServices } from "../../js/pageOptions";
import "./api.css";
import { Check } from "lucide-react";

const RechargeApiPage = () => {
  return (
    <>
      <MainLayout>
        <div className="main-container">
          <div className="page-routes-nav-container">
            <PageRoutes title="API Services" options={apiServices} />
          </div>
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
                <h2>Advantages of Our Recharge API</h2>
                <div className="advantage">
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    A comprehensive recharge structure enables you to recharge
                    for all network operators from a solitary platform.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Set up your recharge business with elevated commissions.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Returns the amount automatically within 24 hours in the
                    situation of recharge non-success.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>{" "}
                    Extremely shielded and validated APIs.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Gives giant transaction volume progressing platform.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Gives immediate operation transaction ID for all the
                    transactions.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Enables you to approach from anywhere in India the numbers
                    associated to any set.
                  </span>
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
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Provide the required details such as the mobile number,
                    network operator, region, and recharge amount.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Review the payment information and click the "Continue"
                    button to proceed.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    You will receive a confirmation via SMS or email with all
                    the recharge details on the registered mobile number or
                    email ID.
                  </span>
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
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Effortless mobile recharge services available across India.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Covers all major providers for Mobile, DTH, and Data Card
                    services, including Airtel, Vodafone, Idea, BSNL, Tata Sky,
                    and more.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Reliable infrastructure and exceptional services ensure
                    smooth operations.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Start an online recharge service without the need for
                    upfront capital.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Expansion in the telecom sector results in consistent
                    returns.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Offers mobile recharge for all cellular networks, DTH
                    recharge with operator transaction IDs, postpaid bill
                    payment, and more.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    The API can be integrated into existing websites or
                    businesses for enhanced functionality.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    No need to maintain separate stock for each mobile operator.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Operate digitally without the hassle of paper-based coupons.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Based on daily transactions with no minimum deposits or
                    balance maintenance requirements.
                  </span>
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
