import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import PageRoutes from "../../Components/PageRoutes";
import { apiServices } from "../../js/pageOptions";

const BbpsPage = () => {
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

export default BbpsPage;
