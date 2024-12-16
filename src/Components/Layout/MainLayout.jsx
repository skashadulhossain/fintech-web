import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./layout.css";

const MainLayout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <div className="main-layout-container">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
