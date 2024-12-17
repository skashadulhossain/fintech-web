import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import { apiServices } from "../../js/pageOptions";
import PageRoutes from "../../Components/PageRoutes";

const PayoutApiPage = () => {
  return (
    <>
      <MainLayout>
      <div className="main-container">
          <div className="page-routes-nav-container">
            <PageRoutes title="API Services" options={apiServices} />
          </div>
          <div className="api-details"></div>
        </div>
      </MainLayout>
    </>
  );
};

export default PayoutApiPage;
