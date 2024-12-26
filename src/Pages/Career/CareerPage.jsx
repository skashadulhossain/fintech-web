import React, { useState } from "react";
import "./Career.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import JobDetails from "../../Components/CareerCompoents/JobDetails";
import JobCard from "../../Components/CareerCompoents/JobCard";
import { careerArr } from "../../js/pageOptions";

const CareerPage = () => {
  const [selectCard, setSelectCard] = useState(careerArr[0]);
  return (
    <>
      <Header />
      <section className="main-career-section padding-layout">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ color: "#8084FF" }}>Career Choice</h2>
          <p>
            Choosing a career is one of the most significant decisions you'll
            make in your life.
          </p>
        </div>
        <div className="career-div-container">
          <div className={`career-select-btn-container`}>
            {careerArr.map((career, id) => (
              <div
                key={id}
                onClick={() => setSelectCard(career)}
                className={` ${
                  selectCard.id === career.id
                    ? "career-select-btn-selected"
                    : "career-select-btn"
                }`}
              >
                <JobCard career={career} />
              </div>
            ))}
          </div>
          <div className="career-details-container">
            <JobDetails selectCard={selectCard} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CareerPage;
