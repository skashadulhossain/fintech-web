import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { ChevronRight } from "lucide-react";

const DataPolicyPage = () => {
  return (
    <>
      <Header />
      <section className="padding-layout">
        <div className="policy-container">
          <div className="policy-header">
            <h1>Legal</h1>
            <span>
              PN SOFTWARE TECH PRIVATE LIMITED. ("Company", "we", "our", or
              "us") values your privacy and is committed to responsibly using
              the data we collect through our website,{" "}
              <a href="/">www.pnsoftware.org</a> ("Website"). This Data Use
              Policy explains how we collect, use, and protect your data. By
              using our website, you consent to the practices outlined in this
              Policy.
            </span>
          </div>
          <div className="policy-content">
            <div className="policy-section">
              <h2>1. Data Collection</h2>
              <div>
                <h3 style={{ display: "flex", alignItems: "center" }}>
                  <ChevronRight style={{ color: "#8084FF" }} />
                  1.1 Personal Data
                </h3>
                <p>Data you provide directly to us, including:</p>
                <ul>
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Physical address</li>
                  <li>
                    Any other data you provide when filling out forms,
                    subscribing to services, or communicating with us.
                  </li>
                </ul>
              </div>
              <div>
                <h3 style={{ display: "flex", alignItems: "center" }}>
                  <ChevronRight style={{ color: "#8084FF" }} />
                  1.2 Non-Personal Data
                </h3>
                <p>Automatically collected data, including:</p>
                <ul>
                  <li>IP addresses</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Device type and identifiers</li>
                  <li>Referring and exit URLs</li>
                  <li>Time spent on pages and navigation paths</li>
                </ul>
              </div>
              <div>
                <h3 style={{ display: "flex", alignItems: "center" }}>
                  <ChevronRight style={{ color: "#8084FF" }} />
                  1.3 Cookies and Similar Technologies
                </h3>
                <p>We use cookies, web beacons, and similar technologies to:</p>
                <ul>
                  <li>Understand user behaviour and preferences</li>
                  <li>Improve user experience</li>
                  <li>Analyse website performance</li>
                </ul>
                <p>
                  You can manage cookie preferences through your browser
                  settings.
                </p>
              </div>
            </div>

            <div className="policy-section">
              <h2>2. Purpose of Data Use</h2>
              <div>
                <h3 style={{ display: "flex", alignItems: "center" }}>
                  <ChevronRight style={{ color: "#8084FF" }} />
                  2.1 Providing Services
                </h3>
                <ul>
                  <li>To deliver the services and information you request</li>
                  <li>To facilitate communication regarding our services</li>
                </ul>
              </div>
              <div>
                <h3 style={{ display: "flex", alignItems: "center" }}>
                  <ChevronRight style={{ color: "#8084FF" }} />
                  2.2 Website Functionality
                </h3>
                <ul>
                  <li>To personalize your experience on our website</li>
                  <li>
                    To analyze website performance and optimize user experience
                  </li>
                </ul>
              </div>
              <div>
                <h3 style={{ display: "flex", alignItems: "center" }}>
                  <ChevronRight style={{ color: "#8084FF" }} />
                  2.3 Marketing and Communication
                </h3>
                <ul>
                  <li>
                    To send updates, promotional content, and newsletters (only
                    with your explicit consent)
                  </li>
                  <li>To inform you about changes to our policies or terms</li>
                </ul>
              </div>
              <div>
                <h3 style={{ display: "flex", alignItems: "center" }}>
                  <ChevronRight style={{ color: "#8084FF" }} />
                  2.4 Compliance and Legal Obligations
                </h3>
                <ul>
                  <li>To comply with applicable laws and regulations</li>
                  <li>
                    To detect, prevent, and address security incidents or
                    illegal activities
                  </li>
                </ul>
              </div>
            </div>

            <div className="policy-section">
              <h2>3. Sharing Data</h2>
              <div>
                <h3 style={{ display: "flex", alignItems: "center" }}>
                  <ChevronRight style={{ color: "#8084FF" }} />
                  3.1 Service Providers
                </h3>
                <p>
                  We share data with third-party service providers that assist
                  us in operating our website or providing our services (e.g.,
                  hosting providers, analytics services).
                </p>
              </div>
              <div>
                <h3 style={{ display: "flex", alignItems: "center" }}>
                  <ChevronRight style={{ color: "#8084FF" }} />
                  3.2 Legal Requirements
                </h3>
                <p>
                  We may disclose data if required to comply with legal
                  obligations or to protect our rights, property, or safety.
                </p>
              </div>
              <div>
                <h3 style={{ display: "flex", alignItems: "center" }}>
                  <ChevronRight style={{ color: "#8084FF" }} />
                  3.3 Business Transfers
                </h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, user
                  data may be transferred as part of the transaction.
                </p>
              </div>
            </div>

            <div className="policy-section">
              <h2>4. Data Retention</h2>
              <p>
                We retain your data only as long as necessary for the purposes
                outlined in this Policy, unless a longer retention period is
                required or permitted by law.
              </p>
            </div>

            <div className="policy-section">
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your data from unauthorized access, alteration,
                disclosure, or destruction. However, no system is completely
                secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="policy-section">
              <h2>6. User Rights</h2>
              <p>
                You may have the following rights regarding your data, depending
                on your location:
              </p>
              <ul>
                <li>Access and review your data</li>
                <li>Correct inaccuracies in your data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of receiving marketing communications</li>
                <li>
                  Restrict or object to certain data processing activities
                </li>
              </ul>
              <p>
                To exercise your rights, please contact us at{" "}
                <a href="mailto:contact@pnsoftware.org">
                  contact@pnsoftware.org
                </a>
                .
              </p>
            </div>

            <div className="policy-section">
              <h2>7. Children's Data</h2>
              <p>
                Our website is not intended for children under the age of 18,
                and we do not knowingly collect data from minors. If we learn
                that we have collected data from a child, we will take
                appropriate steps to delete it.
              </p>
            </div>

            <div className="policy-section">
              <h2>8. Changes to This Data Use Policy</h2>
              <p>
                We may update this Policy from time to time. Updates will be
                posted on this page with the "Last Updated" date. Your continued
                use of the Website signifies your acceptance of the updated
                Policy.
              </p>
            </div>

            <div className="policy-section">
              <h2>9. Contact Us</h2>
              <p>
                For questions or concerns about this Data Use Policy, please
                contact us:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:contact@pnsoftware.org">
                  contact@pnsoftware.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DataPolicyPage;