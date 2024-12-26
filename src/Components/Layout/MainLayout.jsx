import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./layout.css";
import { apiServices } from "../../js/pageOptions";
import PageRoutes from "../PageRoutes";
import { ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";

const MainLayout = ({ pageTitle = "", children }) => {
  const { pathname } = useLocation();

  const currentPage = apiServices.find((page) => page.link === pathname);

  return (
    <>
      <div className="header-div-container">
        <Header />
        <div className="header-div">
          <div className="header">
            <div className="header-nav">
              API Services{" "}
              <ChevronRight style={{ width: "18px", height: "18px" }} />{" "}
              {pageTitle}
            </div>
            <div className="image-container">
              <div className="dark-overlay"></div>
              <img src={currentPage.cover} alt="gif" loading="lazy" />
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
      </div>
    </>
  );
};

export default MainLayout;
