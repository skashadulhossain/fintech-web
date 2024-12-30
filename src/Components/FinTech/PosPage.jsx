import React from "react";
import OtherLayout from "../../Components/Layout/OtherLayout";
import { Check } from "lucide-react";

const mpoints = [
  {
    title: "All-in-One Solution",
    desc: "Accept payments via Debit/Credit Cards, UPI/QR codes, Wallets, and even remote payments through SMS Pay.",
  },
  {
    title: "Portable and Convenient",
    desc: "Perfect for professionals needing flexible payment solutions on the go.",
  },
];

const spec = [
  {
    title: "Nationwide Deployment",
    desc: "Deploy POS terminals across the country.",
  },
  {
    title: "Service Support",
    desc: "Perfect for professionals needing flexible payment solutions on the go.",
  },
  {
    title: "Transaction Processing",
    desc: "Seamless POS connectivity and back-office tools for network management.",
  },
];

const contents = [
  {
    title: "Swipe or Insert",
    desc: "Enter the amount and swipe or insert the card.",
  },
  {
    title: "Enter PIN",
    desc: "Customer authenticates the transaction by entering their PIN.",
  },
  {
    title: "Complete Transaction",
    desc: "Transaction is done! Send a digital receipt via SMS or Email.",
  },
];

const PosPage = () => {
  return (
    <>
      <OtherLayout>
        <section>
          <div>
            <h2>Mobile Point of Sale (mPOS)</h2>
            <div className="custom-underline"></div>
            <p style={{ padding: "1rem 0 1rem 0", fontSize: "14px" }}>
              mPOS, or Mobile Point of Sale, transforms smartphones, tablets, or
              mobile devices into cash registers or traditional POS terminals,
              operating wirelessly.
            </p>
            <p style={{ fontSize: "14px" }}>
              Ideal for businesses on the move, mPOS enables merchants such as
              taxi drivers and service providers like lawyers, mechanics, or
              plumbers to accept payments conveniently.
            </p>

            <div className="advantage-two">
              {mpoints.map((ser, id) => (
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
        </section>

        {/* ONE */}
        <section className="pos-div-one">
          <div style={{ width: "100%" }}>
            <img
              src="/images/posss.png"
              alt="img"
              loading="lazy"
              className=""
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <h2>POS Solutions Specifications</h2>
            <div className="custom-underline"></div>
            <p style={{ padding: "1rem 0 1rem 0" }}>
              If you're looking to establish a Merchant Network or provide POS
              Terminals to your vendors, you've come to the right place. We
              offer tailored solutions to help you build a robust card
              acceptance network.
            </p>
            <h4>
              Our services are divided into three primary categories, making us
              your ideal partner:
            </h4>
            <div className="advantage-two">
              {spec.map((ser, id) => (
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
        </section>

        {/* TWO */}
        <section
          style={{
            padding: "2rem 1rem 2rem 1rem",
            backgroundColor: "#F3F7FB",
            borderRadius: "10px",
          }}
        >
          <div className="pos-steps">
            <h2>Processing Made Simple</h2>
            <p>3 Quick Steps in 10 Seconds</p>
            <div className="custom-underline"></div>
          </div>
          <div className="grid-pos-content">
            {contents.map((cont, id) => (
              <div key={id} className="main-pos-content-div">
                <div className="main-pos-img-div">
                  <div className="pos-img-div">
                    <img
                      style={{ width: "85px", heightL: "85px" }}
                      src="/images/pos.png"
                      alt="pos-machine"
                      loading="lazy"
                    />
                  </div>
                  <div className="pos-index">{id + 1}</div>
                </div>
                <div className="pos-content">
                  <h4>{cont.title}</h4>
                  <p style={{ fontSize: "14px", marginTop: "2px" }}>
                    {cont.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: "4rem" }}>
          <h3 style={{ textAlign: "center" }}>Point of Sale (POS)</h3>
          <p style={{ textAlign: "center", marginTop: "0.5rem" }}>
            The Point of Sale (POS) is where a customer completes a transaction.
            It involves calculating the total, presenting payment options, and
            processing payments for goods or services. POS systems often include
            features like inventory management, customer relationship management
            (CRM), and financial tools to streamline operations.
          </p>
        </section>
      </OtherLayout>
    </>
  );
};

export default PosPage;