import React from "react";
import OtherLayout from "../../Components/Layout/OtherLayout";

const dexcs = [
  {
    title: "24/7 Customer Support",
    desc: "Need help? Click here or reach out to us at 0331 - 5484511. Our team is available round the clock to assist you with any queries.",
    icon: "/images/call.png",
  },
  {
    title: "PN Software Tech Pvt. Ltd. Trust",
    desc: "Our brands transparency and dedication are the cornerstones of our approach to building trust with our customers.",
    icon: "/images/security.png",
  },
  {
    title: "Our Commitment",
    desc: "We promise to collaborate closely with each customer, carefully understanding and meeting their unique needs, ensuring that we provide the best solutions tailored to them.",
    icon: "/images/like.png",
  },
];

const PrepaidCardPage = () => {
  return (
    <>
      <OtherLayout>
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
            <h2>Prepaid Card</h2>
            <div className="custom-underline"></div>
            <p style={{textAlign: "center"}}>
              For merchants, it offers a secure, simple, and cost-effective
              payment solution with advanced features to streamline transactions
              and manage payments effortlessly.
            </p>
          </div>
        </section>

        <section className="aeps-div-two">
          <div style={{ width: "100%" }}>
            <h2>Prepaid Card vs. Bank Debit Card</h2>
            <div className="custom-underline"></div>
            <p style={{ marginTop: "1rem" }}>
              A{" "}
              <span style={{ fontWeight: 700, fontSize: "15px" }}>
                prepaid card
              </span>{" "}
              is different from a bank debit card. While a bank debit card is
              linked to your bank account, a prepaid card is not. Instead, you
              load funds onto the prepaid card in advance and spend only what
              has been loaded.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              Unlike a bank debit card, a prepaid card doesn't allow you to
              overspend. If the card is out of funds, the transaction will be
              declined, unlike a bank account card, where overdrafts may be
              allowed if you've opted into your bank's overdraft protection
              program. With a debit card, the bank may charge you an overdraft
              fee and expect you to repay the overdraft amount.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              Additionally, prepaid cards may offer fewer consumer protections
              compared to debit cards, such as in cases where the card is lost,
              stolen, or in the event of unauthorized charges.
            </p>
          </div>
          <div style={{ width: "100%" }}>
            <img
              src="/images/Prepaid Card.png"
              alt="img"
              loading="lazy"
              className=""
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </section>

        <section className="protect-section">
          {dexcs.map((el, id) => (
            <div key={id} className="protect-section-div">
              <div>
                <img
                  src={el.icon}
                  alt=""
                  loading="lazy"
                  style={{
                    width: "56px",
                    height: "56px",
                    filter: "invert(1) brightness(10)",
                  }}
                />
              </div>
              <div>
                <h4>{el.title}</h4>
                <p style={{ marginTop: "0.5rem", fontSize: "14px" }}>
                  {el.desc}
                </p>
              </div>
            </div>
          ))}
        </section>
      </OtherLayout>
    </>
  );
};

export default PrepaidCardPage;