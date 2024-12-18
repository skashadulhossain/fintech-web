import React, { useState } from "react";

const whyDo = [
  {
    image: "/images/multi-emp.webp",
    title: "Send Refunds to Customers",
    description:
      "Provide instant refunds to your ecommerce customers directly into their bank accounts.",
  },
  {
    image: "/images/disburse-game.webp",
    title: "Disburse Game Winnings",
    description:
      "With a single click, transfer game winnings to all your players at the same time.",
  },
  {
    image: "/images/pay-your-emp.webp",
    title: "Pay Your Employees",
    description:
      "Opt for Instant Payouts and free yourself from transferring salaries one by one every month.",
  },
  {
    image: "/images/pay-your-venders.webp",
    title: "Pay Your Vendors",
    description:
      "Simplify the process of paying your vendors and business partners on time, with bulk payouts.",
  },
  {
    image: "/images/reimbursement.webp",
    title: "Reimburse Employee Expenses",
    description: "Reimburse all your employee expenses at the same time.",
  },
];

const WhyPayoutSelect = () => {
  const [selectedObj, setselectedObj] = useState(whyDo[0]);
  // console.log("selectedObj", selectedObj);

  return (
    <>
      <div className="main-why-div">
        <div className="why-img-div">
          <img src={selectedObj.image} alt="" loading="lazy" />
        </div>
        <div className="why-option-div">
          <div className="why-line"></div>
          <div className="why-btn-div">
            {whyDo.map((why, id) => (
              <button
                onClick={() => setselectedObj(why)}
                key={id}
                className={`${selectedObj.title === why.title ? "why-btn-div-active-button " : "why-btn-div-button"}`}
              >
                <span style={{ fontSize: "20px", fontWeight: 700, marginBottom: "5px" }}>
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
