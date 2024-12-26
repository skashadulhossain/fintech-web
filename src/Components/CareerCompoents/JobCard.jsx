import React from "react";
import "../../Pages/Career/Career.css";

const JobCard = ({ career }) => {
  return (
    <div className="job-card">
      <h4>{career.jobTitle}</h4>
      <p>{career.shortTitle}</p>
      <p>{career.posting}</p>
      {/* <p style={{ marginTop: "1rem" }}>{career.timestamp}</p> */}
    </div>
  );
};

export default JobCard;
