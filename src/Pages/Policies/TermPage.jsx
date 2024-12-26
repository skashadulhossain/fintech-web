import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { ChevronRight } from "lucide-react";

const TermPage = () => {
  return (
    <>
      <Header />
      <section className="padding-layout">
        <div className="policy-container">
          <div className="policy-header">
            <h1>Terms of Use</h1>
            <span>
              Welcome to <a href="/">www.pnsoftware.org</a>, the official
              website of PN SOFTWARE TECH PRIVATE LIMITED. ("Company", "we",
              "our", or "us"). By accessing or using this website, you agree to
              be bound by these Terms and Conditions ("Terms"). If you do not
              agree with these Terms, you should not access or use our website.
            </span>
          </div>
          <div className="policy-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By using www.pnsoftware.org, you represent that you are at least
              18 years of age and have the legal capacity to enter into a
              binding agreement. Your continued use of the website constitutes
              your acceptance of these Terms, as well as our Privacy Policy,
              available at{" "}
              <span>
                <a href="/privacy-policy">Privacy Policy</a>
              </span>
              .
            </p>
          </div>
          <div className="policy-section">
            <h2>2. Changes to Terms</h2>
            <p>
              We reserve the right to modify or update these Terms at any time
              without prior notice. The updated Terms will be posted on this
              page with the "Last Updated" date. Your continued use of the
              website following any changes constitutes your acceptance of the
              revised Terms.
            </p>
          </div>
          <div className="policy-section">
            <h2>3. Use of the Website</h2>
            <h3 style={{ display: "flex", alignItems: "center" }}>
              <ChevronRight style={{ color: "#8084FF" }} />
              3.1 Permitted Use
            </h3>
            <ul>
              <li>
                Use the website solely for lawful purposes and in compliance
                with these Terms.
              </li>
              <li>
                You may not use the website in any way that breaches applicable
                laws or regulations.
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the website
                or its related systems.
              </li>
              <li>
                Engage in any conduct that could harm the website&apos;s
                performance or its users.
              </li>
            </ul>
            <h3 style={{ display: "flex", alignItems: "center" }}>
              <ChevronRight style={{ color: "#8084FF" }} />
              3.2 Prohibited Activities
            </h3>
            <ul>
              <li>
                Reverse-engineer, decompile, or otherwise access the source code
                of the website.
              </li>
              <li>Transmit any viruses, malware, or harmful content.</li>
              <li>
                Use automated systems (e.g., bots) to access the website without
                prior written consent.
              </li>
            </ul>
          </div>
          <div className="policy-section">
            <h2>4. Intellectual Property Rights</h2>
            <p>
              All content on the website, including text, graphics, logos,
              icons, images, audio clips, and software, is the exclusive
              property of PN SOFTWARE TECH PRIVATE LIMITED. or its licensors.
              You are granted a limited, non-exclusive, and revocable license to
              access and use the website for personal, non-commercial purposes.
              You may not copy, reproduce, distribute, or modify any part of the
              website without prior written consent from the Company.
            </p>
          </div>
          <div className="policy-section">
            <h2>5. User-Generated Content</h2>
            <p>
              If you submit or upload any content to the website, you grant PN
              SOFTWARE TECH PRIVATE LIMITED. a non-exclusive, royalty-free,
              perpetual, and worldwide license to use, reproduce, distribute,
              and display such content for any purpose. You warrant that your
              content does not infringe upon any third-party rights or violate
              any laws.
            </p>
          </div>
          <div className="policy-section">
            <h2>6. Disclaimer of Warranties</h2>
            <ul>
              <li>
                The website is provided "as is" and "as available" without
                warranties of any kind, either express or implied.
              </li>
              <li>
                We do not guarantee the accuracy, completeness, or reliability
                of the website&apos;s content.
              </li>
              <li>
                That the website will always be available or free of errors or
                interruptions.
              </li>
            </ul>
          </div>
          <div className="policy-section">
            <h2>7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, PN SOFTWARE TECH PRIVATE
              LIMITED. shall not be liable for any damages arising out of or
              related to your use or inability to use the website, including
              direct, indirect, incidental, consequential, or punitive damages.
            </p>
          </div>
          <div className="policy-section">
            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services.
              These links are provided for your convenience only, and we do not
              endorse or assume any responsibility for their content or
              practices.
            </p>
          </div>
          <div className="policy-section">
            <h2>9. Privacy Policy</h2>
            <p>
              Your use of the website is also governed by our Privacy Policy,
              which outlines how we collect, use, and protect your personal
              information. Please review our{" "}
              <span>
                <a href="/privacy-policy">Privacy Policy</a>
              </span>
              .
            </p>
          </div>
          <div className="policy-section">
            <h2>10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the
              website at any time, without notice, for any reason, including but
              not limited to a violation of these Terms.
            </p>
          </div>
          <div className="policy-section">
            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India, and any disputes arising hereunder shall be
              subject to the exclusive jurisdiction of the courts in{" "}
              <a
                href="https://nadia.dcourts.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Krishnagar, India
              </a>
              .
            </p>
          </div>
          <div className="policy-section">
            <h2>12. Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms, please
              contact us at:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@pnsoftware.org">contact@pnsoftware.org</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermPage;
