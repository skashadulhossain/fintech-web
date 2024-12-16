import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import PageRoutes from "../../Components/PageRoutes";
import { apiServices } from "../../js/pageOptions";

const RechargeApiPage = () => {
  return (
    <>
      <MainLayout>
        <div>
          <PageRoutes title="API Services" options={apiServices} />
          <div className="">
            <p>
              PN Software Tech Pvt. Ltd is one of India's leading multi-recharge
              service providers. We offer secure, reliable, and fast-growing
              Mobile Recharge API solutions. An API, or "Application Programming
              Interface," acts as a bridge, allowing different software
              applications to seamlessly communicate and exchange data with each
              other.
            </p>
            <p>
              PN Software Tech Pvt. Ltd offers one of the most advanced and
              dependable Multi Recharge API solutions in the market today. As a
              trusted name among Recharge API providers in India, we focus on
              delivering cost-effective and highly efficient solutions. Our
              commitment to adopting the latest technologies ensures that our
              API services remain innovative, seamless, and ahead of industry
              standards, providing maximum value to our clients.
            </p>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default RechargeApiPage;
