import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./layout.css";
import { apiServices } from "../../js/pageOptions";
import PageRoutes from "../PageRoutes";
import { ChevronRight } from "lucide-react";

const MainLayout = ({ pageTitle = "", children }) => {
  return (
    <>
      <Header />
      <div className="header-div">
        <div className="header">
          {/* <h1>keyword research</h1> */}
          <div className="header-nav">
            API Services{" "}
            <ChevronRight style={{ width: "18px", height: "18px" }} />{" "}
            {pageTitle}
          </div>
        </div>
      </div>
      <div className="main-layout-container">
        <div className="page-routes-nav-container">
          <PageRoutes title="API Services" options={apiServices} />
        </div>
        <div className="children-container">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
