import React from "react";
import OtherLayout from "../../Components/Layout/OtherLayout";

const IndoNepalPage = () => {
  return (
    <>
      <OtherLayout>
        <section>
          <div className="in-content">
            <h2>Indo-Nepal Remittance Service</h2>
            <div className="custom-underline"></div>
            <p>Easily Transfer Funds to Nepal with Just a Click</p>
            <p>
              The Indo-Nepal Remittance Service is a cross-border payment
              solution that allows secure and affordable fund transfers from
              India to Nepal, facilitated under the NEFT Scheme. This service
              was launched to offer a safe and cost-effective method for migrant
              Nepalese workers in India to send money back to their families in
              Nepal. A remitter can transfer up to INR 50,000 (the maximum
              permissible limit) from any NEFT-enabled bank branch in India. The
              recipient will receive funds in Nepalese Rupees.
            </p>
            <div className="contact-buttons">
              <button>Contact Us</button>
            </div>
          </div>
        </section>

        <section>
          <div className="new-innp-section">
            <h4>Indo-Nepal Remittance Service</h4>
            <div className="custom-underline"></div>
            <h2>Send Money to Your Loved Ones with Ease</h2>
            <p style={{ textAlign: "center" }}>
              Our Indo-Nepal Money Transfer service offers a simple and highly
              secure way for your customers to transfer money directly to Nepal.
              No Indian bank account is required, and there's no need to visit
              banks, making the process quick and convenient for everyone. Let
              me know if you'd like any more tweaks!
            </p>
          </div>
        </section>

        <section className="aeps-div-two">
          <div style={{ width: "100%" }}>
            <h2>Easy Cash Transfer</h2>
            <div className="custom-underline"></div>
            <p style={{ marginTop: "1rem" }}>
              Allow customers to send money to any bank account in Nepal by
              simply paying in cash.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              This service offers a hassle-free, secure method for customers to
              transfer funds quickly, without the need for a bank account. Let
              me know if you'd like further changes!
            </p>
          </div>
          <div style={{ width: "100%" }}>
            <img
              src="/images/Easy CashTransfer.png"
              alt="img"
              loading="lazy"
              className=""
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </section>

        <section className="aeps-div-three">
          <div style={{ width: "100%" }}>
            <img
              src="/images/Transaction Receipt.png"
              alt="img"
              loading="lazy"
              className=""
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <h2>Transaction Receipt</h2>
            <div className="custom-underline"></div>
            <p style={{ marginTop: "1rem" }}>
            Provide printed transaction receipts to your customers, ensuring they feel secure and confident in their money transfer.
            </p>
          </div>
        </section>
      </OtherLayout>
    </>
  );
};

export default IndoNepalPage;
