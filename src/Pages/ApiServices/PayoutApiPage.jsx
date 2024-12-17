import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import { apiServices } from "../../js/pageOptions";
import PageRoutes from "../../Components/PageRoutes";
import { ChevronRight } from "lucide-react";

const PayoutApiPage = () => {
  return (
    <>
      <MainLayout>
        <div className="header-div">
          <div className="header">
            {/* <h1>keyword research</h1> */}
            <div className="header-nav">
              API Services{" "}
              <ChevronRight style={{ width: "18px", height: "18px" }} /> Payout
              API
            </div>
          </div>
        </div>
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
