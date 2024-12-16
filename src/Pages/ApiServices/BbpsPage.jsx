import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import PageRoutes from "../../Components/PageRoutes";
import { apiServices } from "../../js/pageOptions";

const BbpsPage = () => {
  return (
    <>
      <MainLayout>
        <div>
          <PageRoutes title="API Services" options={apiServices} />
        </div>
      </MainLayout>
    </>
  );
};

export default BbpsPage;
