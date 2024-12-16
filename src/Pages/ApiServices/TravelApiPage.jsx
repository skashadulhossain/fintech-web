import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import { apiServices } from "../../js/pageOptions";
import PageRoutes from "../../Components/PageRoutes";

const TravelApiPage = () => {
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

export default TravelApiPage;
