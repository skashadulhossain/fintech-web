import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { ChevronRight } from "lucide-react";

const RefundPage = () => {
  return (
    <>
      <Header />
      <section className="padding-layout">
        <div className="policy-container">
          <div className="policy-header">
            <h1>Refund and Cancellation Policy</h1>
            <span>
              PN SOFTWARE TECH PRIVATE LIMITED. ("Company", "we", "our", or
              "us") strives to provide quality products and services to our
              customers. This Refund and Cancellation Policy outlines the terms
              and conditions regarding refunds and cancellations for
              transactions made through our website,{" "}
              <a href="/">www.pnsoftware.org</a>
              ("Website").
            </span>
          </div>

          <div className="policy-content">
            <h2>1. General Policy</h2>
            <p>
              Refunds and cancellations are subject to the terms outlined in
              this Policy. By using our website and purchasing our products or
              services, you agree to these terms.
            </p>
          </div>

          <div className="policy-content">
            <h2>2. Eligibility for Refunds</h2>

            <h3 style={{ display: "flex", alignItems: "center" }}>
              <ChevronRight style={{ color: "#8084FF" }} />
              2.1 Products and Services
            </h3>
            <ul>
              <li>
                <strong>Software Products:</strong> Refunds are only provided
                for technical issues that cannot be resolved by our support
                team. Refund requests must be made within [Insert Timeframe,
                e.g., 7 days] of purchase.
              </li>
              <li>
                <strong>Subscription Services:</strong> Refunds for
                subscriptions are not available after the subscription has been
                activated unless otherwise stated in a specific agreement or
                promotional offer.
              </li>
              <li>
                <strong>Custom Services:</strong> Custom or personalized
                services are non-refundable once work has commenced.
              </li>
            </ul>

            <h3 style={{ display: "flex", alignItems: "center" }}>
              <ChevronRight style={{ color: "#8084FF" }} />
              2.2 Conditions for Refunds
            </h3>
            <p>
              Refunds will only be processed if the following conditions are
              met:
            </p>
            <ul>
              <li>Proof of purchase is provided (e.g., receipt or invoice).</li>
              <li>
                A valid reason for the refund is provided, supported by relevant
                documentation or evidence.
              </li>
              <li>
                The request is submitted within the specified timeframe for
                refunds.
              </li>
            </ul>
          </div>

          <div className="policy-content">
            <h2>3. Non-Refundable Items</h2>
            <ul>
              <li>Downloaded digital products, if delivered successfully.</li>
              <li>Completed or partially completed custom projects.</li>
              <li>Fees for consulting or one-time setup services.</li>
            </ul>
          </div>

          <div className="policy-content">
            <h2>4. Cancellation Policy</h2>

            <h3 style={{ display: "flex", alignItems: "center" }}>
              <ChevronRight style={{ color: "#8084FF" }} />
              4.1 Order Cancellation
            </h3>
            <ul>
              <li>
                Orders for software or services may be cancelled before the
                product has been delivered or the service has been initiated.
              </li>
              <li>
                Cancellation requests must be submitted via email to
                contact@pnsoftware.org with your order details.
              </li>
            </ul>

            <h3 style={{ display: "flex", alignItems: "center" }}>
              <ChevronRight style={{ color: "#8084FF" }} />
              4.2 Subscription Cancellation
            </h3>
            <ul>
              <li>
                Subscription services can be cancelled at any time. Cancellation
                will be effective at the end of the current billing cycle, and
                no refunds will be provided for the unused portion of the
                subscription period.
              </li>
            </ul>
          </div>

          <div className="policy-content">
            <h2>5. How to Request a Refund or Cancellation</h2>
            <p>
              To request a refund or cancellation, please follow these steps:
            </p>
            <ol style={{ marginLeft: "2rem" }}>
              <li>
                Contact our support team at contact@pnsoftware.org or through
                our website contact form.
              </li>
              <li>
                Provide the following information:
                <ul>
                  <li>Full name and contact details.</li>
                  <li>Order ID or invoice number.</li>
                  <li>Reason for the refund or cancellation request.</li>
                </ul>
              </li>
              <li>
                Wait for confirmation from our team. We will review your request
                and respond within 4 to 5 business days.
              </li>
            </ol>
          </div>

          <div className="policy-content">
            <h2>6. Processing Refunds</h2>
            <ul>
              <li>
                Approved refunds will be processed within 10–15 business days
                from the date of approval.
              </li>
              <li>
                Refunds will be credited to the original payment method used for
                the transaction.
              </li>
            </ul>
          </div>

          <div className="policy-content">
            <h2>7. Changes to This Policy</h2>
            <p>
              We reserve the right to modify this Refund and Cancellation Policy
              at any time. Changes will be posted on this page with the "Last
              Updated" date. Your continued use of our Website after any changes
              constitutes your acceptance of the revised Policy.
            </p>
          </div>

          <div className="policy-content">
            <h2>8. Contact Us</h2>
            <p>
              If you have questions or need assistance regarding this Refund and
              Cancellation Policy, please contact us:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@pnsoftware.org">contact@pnsoftware.org</a>
            </p>
            <p>
              <strong>Address:</strong> WEST JAGADANANDAPUR, BETHUADAHARI,
              NAKASHIPARA, NADIA- 741126, WEST BENGAL.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RefundPage;
