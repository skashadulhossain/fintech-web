import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import { apiServices } from "../../js/pageOptions";
import PageRoutes from "../../Components/PageRoutes";
import { Check, ChevronRight } from "lucide-react";

const features = [
  "Detects document and information fraud",
  "Instant PAN Card and UTI PAN verification",
  "Ready-to-use UTI PAN Verification API",
];

const howItWorks = [
  "Enter the PAN number or upload the PAN card image.",
  "A real-time check is performed on the database.",
  "Instant verification is completed with an immediate response.",
];

const verifyApi = [
  {
    title: "Simple and Easy to Use",
    desc: "Our PAN Verification API, including UTI PAN verification, is crafted for effortless and seamless operation.",
  },
  {
    title: "Blocks Fraudulent Activities",
    desc: "With exceptional accuracy, our API identifies and blocks attempts by scammers using fake or dummy PAN cards, ensuring your security.",
  },
  {
    title: "Reliable and Accurate Verification",
    desc: "The system cross-checks all details with the PAN database and NSDL, guaranteeing legality and correctness.",
  },
  {
    title: "Real-Time Verification",
    desc: "Data is fetched and validated within seconds, saving you time and effort.",
  },
];

const howToVerify = [
  "Access the inquiry form link and enter the required details.",
  "Integrate the PAN verification API into your system.",
  "Input the PAN number in the designated field.",
  "The API will retrieve and display the PAN card information for your review.",
];

const benefits = [
  {
    title: "Identity Validation",
    desc: "Ensures accurate and reliable identity verification of individuals.",
  },
  {
    title: "KYC Compliance",
    desc: "Simplifies Know Your Customer (KYC) processes with speed and efficiency.",
  },
  {
    title: "Streamlined Consumer Onboarding",
    desc: "Makes onboarding new consumers seamless while verifying authenticity.",
  },
  {
    title: "Effortless Investor Onboarding",
    desc: "Ensures a smooth process for onboarding investors with secure verification.",
  },
];

const PanCardApiPage = () => {
  return (
    <>
      <MainLayout pageTitle="PAN Card Verification API">
        <div className="main-container">
          <div className="api-details">
            <div>
              <div className="pan-header-card-one">
                <h1 style={{ textAlign: "center" }}>
                  PAN Card Verification API
                </h1>
                <div className="custom-underline"></div>
                <p style={{ textAlign: "center" }}>
                  Our API interface enables seamless online verification of PAN
                  cards, providing accurate and reliable responses.
                </p>
              </div>

              {/* ONE */}
              <div className="pan-card-div-one">
                <div className="img-div">
                  <img
                    src="/images/pan-card.jpg"
                    alt=""
                    loading="lazy"
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div className="advantage-container">
                  <div>
                    <div className="pan-card-main-header">
                      <h2>PAN Card Verification API Solution</h2>
                      <p>
                        Our PAN Card Verification API offers a reliable and
                        convenient way to perform PAN Card and UTI PAN
                        verification. It ensures the authenticity of users while
                        preventing fraudulent activities. Even the Income Tax
                        Department recommends using online UTI PAN Verification
                        API systems for organizations to validate customer
                        details. The process requires accurate user credentials
                        for seamless verification.
                      </p>
                    </div>
                    <div className="advantage">
                      <h4>Key Features of PAN Card Verification API:</h4>
                      {features.map((el, id) => (
                        <span key={id}>
                          <span>
                            <Check className="check-icon" />
                          </span>
                          {el}
                        </span>
                      ))}
                    </div>
                    <div className="advantage">
                      <h4>How PAN Card Verification Works:</h4>
                      {howItWorks.map((el, id) => (
                        <span key={id}>
                          <span>
                            <Check className="check-icon" />
                          </span>
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* TWO */}
              <div className="pan-card-div-one-rev">
                <div className="advantage-container">
                  <div>
                    <div className="pan-card-main-header">
                      <h2 style={{ marginBottom: "10px" }}>
                        Incorporate PAN Card Verification API
                      </h2>
                      <div className="custom-underline"></div>
                    </div>
                    <div className="advantage">
                      {verifyApi.map((el, id) => (
                        <span key={id}>
                          <span>
                            <Check className="check-icon" />
                          </span>
                          <span style={{ fontWeight: 600 }}>{el.title}:</span>
                          {el.desc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="img-div">
                  <img
                    src="/images/pan-photo.jpg"
                    alt=""
                    loading="lazy"
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
              {/* THREE */}
              <div className="pan-card-div-one">
                <div className="img-div">
                  <img
                    src="/images/pan-verify.jpg"
                    alt=""
                    loading="lazy"
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div className="advantage-container">
                  <div>
                    <div className="pan-card-main-header">
                      <h2 style={{ marginBottom: "10px" }}>
                        How to Verify a PAN Card:
                      </h2>
                      <div className="custom-underline"></div>
                      <p>
                        Verifying PAN card details is simple and efficient.
                        Follow these steps:
                      </p>
                    </div>
                    <div className="advantage">
                      {howToVerify.map((el, id) => (
                        <span key={id}>
                          <span>
                            <Check className="check-icon" />
                          </span>
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* FOUR */}
              <div className="pan-card-div-one-rev">
                <div className="advantage-container">
                  <div>
                    <div className="pan-card-main-header">
                      <h2 style={{ marginBottom: "10px" }}>
                        Benefits of PAN Card Verification API
                      </h2>
                      <div className="custom-underline"></div>
                    </div>
                    <div className="advantage">
                      {benefits.map((el, id) => (
                        <span key={id}>
                          <span>
                            <Check className="check-icon" />
                          </span>
                          <span style={{ fontWeight: 600 }}>{el.title}:</span>
                          {el.desc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="img-div">
                  <img
                    src="/images/pan-benefit.jpg"
                    alt=""
                    loading="lazy"
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default PanCardApiPage;
