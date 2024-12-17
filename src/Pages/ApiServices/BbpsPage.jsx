import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import PageRoutes from "../../Components/PageRoutes";
import { apiServices } from "../../js/pageOptions";
import { ChevronRight } from "lucide-react";

const BbpsPage = () => {
  return (
    <>
      <MainLayout>
        <div className="header-div">
          <div className="header">
            {/* <h1>keyword research</h1> */}
            <div className="header-nav">
              API Services{" "}
              <ChevronRight style={{ width: "18px", height: "18px" }} /> BBPS
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

export default BbpsPage;
