import React, { useState } from "react";

const whyDo = [
  {
    image: "/images/refund.svg",
    title: "Instant Refunds",
    description:
      "Provide immediate refunds to your eCommerce customers directly into their bank accounts.",
  },
  {
    image: "/images/jackpot.webp",
    title: "Disburse Game Winnings",
    description:
      "Transfer game winnings effortlessly to all your players with a single click.",
  },
  {
    image: "/images/balance.png",
    title: "Employee Salaries",
    description:
      "Save time by opting for Instant Payouts to transfer salaries in bulk.",
  },
  {
    image: "/images/dashboard.webp",
    title: "Vendor Payments",
    description:
      "Simplify timely payments to vendors and business partners using bulk payouts.",
  },
  {
    image: "/images/expenses.webp",
    title: "Expense Reimbursements",
    description:
      "Reimburse employee expenses quickly and efficiently all at once.",
  },
];

const WhyPayoutSelect = () => {
  const [selectedObj, setselectedObj] = useState(whyDo[0]);
  // console.log("selectedObj", selectedObj);

  return (
    <>
      <div className="main-why-div">
        <div className="why-img-div">
          <img src={selectedObj.image} alt="" loading="lazy" style={{}}/>
        </div>
        <div className="why-option-div">
          <div className="why-line"></div>
          <div className="why-btn-div">
            {whyDo.map((why, id) => (
              <button
                onClick={() => setselectedObj(why)}
                key={id}
                style={{ color: selectedObj.title === why.title ? "white" : "black" }}
                className={`${
                  selectedObj.title === why.title
                    ? "why-btn-div-active-button "
                    : "why-btn-div-button"
                }`}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    marginBottom: "5px",
                  }}
                >
                  {why.title}
                </span>
                <span>{why.description}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyPayoutSelect;
