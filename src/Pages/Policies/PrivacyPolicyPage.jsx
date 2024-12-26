import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Policy.css";
import { ChevronRight } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Header />
      <section className="padding-layout">
        <div className="policy-container">
          <div className="policy-header">
            <h1>Privacy Policy</h1>
            <p>
              PN SOFTWARE TECH PRIVATE LIMITED. ("Company", "we", "our", or
              "us") is committed to protecting your privacy. This Privacy Policy
              outlines how we collect, use, and safeguard your information when
              you visit our website, <a href="/">www.pnsoftware.org</a> ("Website"). By using
              our website, you agree to the practices described in this Privacy
              Policy. If you do not agree, please do not use the Website.
            </p>
          </div>

          <div className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information from you:</p>

            <div className="policy-subsection">
              <h3>
                <ChevronRight className="chevron-icon" /> 1.1 Personal Information
              </h3>
              <p>Information you provide directly to us, such as:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Address</li>
                <li>Other information provided through forms, registrations, or communication with us</li>
              </ul>
            </div>

            <div className="policy-subsection">
              <h3>
                <ChevronRight className="chevron-icon" /> 1.2 Non-Personal Information
              </h3>
              <p>Automatically collected data when you use our website, including:</p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website URLs</li>
                <li>Pages viewed and the time spent on the Website</li>
              </ul>
            </div>

            <div className="policy-subsection">
              <h3>
                <ChevronRight className="chevron-icon" /> 1.3 Cookies and Tracking Technologies
              </h3>
              <p>
                We use cookies and similar technologies to enhance your
                experience. Cookies are small data files stored on your device to
                help us remember preferences and analyse website traffic. You can
                manage or disable cookies in your browser settings, but some
                features of the Website may not function properly.
              </p>
            </div>
          </div>

          <div className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To provide and improve our services.</li>
              <li>To respond to inquiries and support requests.</li>
              <li>To send promotional and informational communications (only with your consent).</li>
              <li>To analyse website usage and improve user experience.</li>
              <li>To comply with legal obligations and enforce our terms.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. Sharing Your Information</h2>
            <p>
              We do not sell, rent, or trade your personal information. However,
              we may share your information in the following circumstances:
            </p>
            <div className="policy-subsection">
              <h3>
                <ChevronRight className="chevron-icon" /> 3.1 With Service Providers
              </h3>
              <p>
                We may share your information with trusted third-party service
                providers who assist us in operating our website or providing
                services. These parties are bound by confidentiality obligations.
              </p>
            </div>
            <div className="policy-subsection">
              <h3>
                <ChevronRight className="chevron-icon" /> 3.2 Legal Obligations
              </h3>
              <p>
                We may disclose your information if required to do so by law or in
                response to legal processes, such as subpoenas or court orders.
              </p>
            </div>
            <div className="policy-subsection">
              <h3>
                <ChevronRight className="chevron-icon" /> 3.3 Business Transfers
              </h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, your
                information may be transferred as part of the transaction.
              </p>
            </div>
          </div>

          <div className="policy-section">
            <h2>4. Data Security</h2>
            <p>
              We take appropriate measures to protect your information from
              unauthorized access, alteration, disclosure, or destruction. These
              measures include encryption, secure servers, and periodic audits.
              However, no method of data transmission or storage is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="policy-section">
            <h2>5. Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights
              regarding your information:
            </p>
            <ul>
              <li>Access and receive a copy of your personal data.</li>
              <li>Request corrections to inaccurate or incomplete data.</li>
              <li>Request deletion of your data (subject to legal obligations).</li>
              <li>Withdraw consent for marketing communications at any time.</li>
              <li>Opt-out of certain data processing activities.</li>
            </ul>
            <p>
              To exercise these rights, please contact us at
              <a href="mailto:contact@pnsoftware.org">contact@pnsoftware.org</a>.
            </p>
          </div>

          <div className="policy-section">
            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites. We encourage you to read their privacy policies.
            </p>
          </div>

          <div className="policy-section">
            <h2>7. Children's Privacy</h2>
            <p>
              Our website is not intended for individuals under the age of 18.
              We do not knowingly collect personal information from minors. If
              you believe we have collected information from a child, please
              contact us immediately.
            </p>
          </div>

          <div className="policy-section">
            <h2>8. International Users</h2>
            <p>
              If you are accessing our website from outside India, please note
              that your information may be transferred to, stored, and processed
              in India or other countries where we or our service providers
              operate. By using our website, you consent to the transfer of your
              information to these countries.
            </p>
          </div>

          <div className="policy-section">
            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy at any time.
              Changes will be posted on this page with the "Last Updated" date.
              Your continued use of the Website constitutes acceptance of the
              updated policy.
            </p>
          </div>

          <div className="policy-section">
            <h2>10. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests related to this
              Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:contact@pnsoftware.org">contact@pnsoftware.org</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;