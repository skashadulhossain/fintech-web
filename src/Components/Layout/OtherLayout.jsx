import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const OtherLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="other-layout-container">
        <div className="children-container">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default OtherLayout;

