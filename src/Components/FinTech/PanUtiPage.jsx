import React from "react";
import OtherLayout from "../../Components/Layout/OtherLayout";

const routing = [
  {
    title: "Create an Account",
    desc: "Sign up on our platform by providing your name, date of birth, email, and phone number. Verify your details using the OTP sent to you.",
    icon: "/images/user.png",
    color: "#219BE4",
  },
  {
    title: "Submit Documents & Payment",
    desc: "Log in, fill out the PAN card application form, upload the required documents, and make the payment.",
    icon: "/images/mobile-payment.png",
    color: "#635AD9",
  },
  {
    title: "Complete the Form",
    desc: "Ensure all details are accurate and match your documents for a hassle-free process.",
    icon: "/images/cashier.png",
    color: "#BD21FC",
  },
  {
    title: "Track Your Application",
    desc: "Monitor your PAN card application status in real time through your account, with updates at every stage.",
    icon: "/images/delivery.png",
    color: "#077EEC",
  },
];

const apps = [
  {
    title: "Efficiency",
    desc: "Experience a streamlined application process with minimal processing time.",
    icon: "/images/settings.png",
  },
  {
    title: "Convenience",
    desc: "Apply online effortlessly from anywhere—your home or office.",
    icon: "/images/smartphone.png",
  },
  {
    title: "Transparency",
    desc: "Track your application status in real-time for complete clarity.",
    icon: "/images/statistics.png",
  },
  {
    title: "Security",
    desc: "Your personal and financial details remain protected throughout.",
    icon: "/images/vpn.png",
  },
];

const PanUtiPage = () => {
  return (
    <>
      <OtherLayout>
        <section>
          <div>
            <div className="pan-uti-heading">
              <h2>PAN Card Application with UTI</h2>
              <div className="custom-underline"></div>
            </div>

            <div className="aeps-div-three">
              <div style={{ width: "100%" }}>
                <img
                  src="/images/uti.png"
                  alt="img"
                  loading="lazy"
                  className=""
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <h2>Why is a PAN Card Important?</h2>
                <div className="custom-underline"></div>
                <p style={{ margin: "1rem 0 0.8rem 0" }}>
                  A PAN card is a vital 10-digit alphanumeric identifier issued
                  by India's Income Tax Department. It plays a key role in
                  various financial activities, such as filing income tax
                  returns, opening bank accounts, and carrying out high-value
                  transactions. Possessing a PAN card is mandatory for Indian
                  citizens and organizations, including firms and companies, to
                  ensure compliance with tax regulations.
                </p>
                <p>
                  In today's fast-paced digital world, acquiring essential
                  documents like a Permanent Account Number (PAN) card has
                  become more straightforward than ever. Online platforms like
                  PN Software Tech Pvt. Ltd. have simplified the application
                  process, enabling individuals to easily apply for and track
                  their PAN cards. This guide will walk you through the steps of
                  applying for a PAN card via UTI, leveraging PN Software Tech
                  Pvt. Ltd. to ensure a smooth and hassle-free experience.
                </p>
                <div className="contact-buttons">
                  <button>Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="uti-heading">
          <div className="uti-heading-div">
            <h2 style={{ textAlign: "center" }}>
              How to Apply for a PAN Card via UTI: A Step-by-Step Guide
            </h2>
            <div className="custom-underline"></div>
          </div>

          <div className="aeps-div-two">
            <div className="uti-main-details-div">
              {routing.map((step, id) => (
                <div key={id} className="uti-details-card">
                  <div
                    className="uti-details-img-div"
                    style={{ backgroundColor: step.color }}
                  >
                    <div>
                      <img
                        src={step.icon}
                        alt=""
                        loading="lazy"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                  <div>
                    <h3>{step.title}</h3>
                    <p style={{ marginTop: "5px", fontSize: "14px" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ width: "100%" }}>
              <img
                src="/images/hold-pan.png"
                alt="img"
                loading="lazy"
                className=""
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="pan-app-details">
            <h2>
              Why Choose PN Software Tech Pvt. Ltd. for PAN Card Application?
            </h2>
            <div className="custom-underline"></div>
            <p>
              PN Software Tech Pvt. Ltd. provides a seamless, secure, and
              efficient platform for PAN card applications, offering numerous
              benefits tailored to your needs.
            </p>
          </div>

          <div className="pan-app-card-div">
            {apps.map((app, id) => (
              <div key={id} className="pan-app-card">
                <div className="pan-app-img-div">
                  <img
                    src={app.icon}
                    alt="PN Software Pvt. Ltd."
                    loading="lazy"
                  />
                </div>
                <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                  <h3>{app.title}</h3>
                  <p style={{ marginTop: "0.5rem" }}>{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="aeps-div-three">
            <div style={{ width: "100%" }}>
              <img
                src="/images/uti-pan-card.jpg"
                alt="img"
                loading="lazy"
                className=""
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="uti-main-details-div">
              <p>
                Obtaining a PAN card has never been easier. With PN Software
                Tech Pvt. Ltd.'s user-friendly platform, secure payment options,
                and real-time tracking, the process is quick and hassle-free.
                Apply today and enjoy a seamless, efficient experience for
                getting your PAN card promptly.
              </p>
            </div>
          </div>
        </section>
      </OtherLayout>
    </>
  );
};

export default PanUtiPage;