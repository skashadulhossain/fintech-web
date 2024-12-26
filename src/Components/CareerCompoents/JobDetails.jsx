import React from "react";
import "../../Pages/Career/Career.css";

const JobDetails = ({ selectCard, setShowModal }) => {
  return (
    <div className="job-details">
      <div className="job-details-header">
        <div>
          <h3>{selectCard.shortTitle}</h3>
          <p style={{ fontWeight: 700, color: "#8084FF", marginTop: "1rem" }}>
            PN Software Tech Pvt. Ltd.
          </p>
          <p>Kolkata, West Bengal</p>
        </div>
        <div className="">
          <button onClick={() => setShowModal(true)} className="apply-button">
            Apply
          </button>
        </div>
      </div>
      <div className="job-info">
        <p>
          <strong>Salary:</strong> {selectCard.salary}
        </p>
        <p>
          <strong>Job Type:</strong> {selectCard.jobType}
        </p>
      </div>
      <div className="qualifications">
        <h4 style={{ textDecoration: "underline" }}>Qualifications:</h4>
        <ul style={{ marginLeft: "1.1rem" }}>
          {selectCard.qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
      </div>
      <div className="job-description">
        <h4 style={{ textDecoration: "underline" }}>Job Description:</h4>
        <div className="job-description-flex">
          {selectCard.jobDescription.map((jd) => (
            <div key={jd.id}>
              {/* <h1 className="underline">{jd.descriptionTitle}:</h1> */}
              {Array.isArray(jd.description) ? (
                <ul className="list-disc ml-5">
                  {jd.description.map((desc, index) => (
                    <li
                      style={{ marginLeft: "1.1rem" }}
                      key={index}
                      className="description-text"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="description-text">{jd.description}</p>
              )}
            </div>
          ))}
        </div>
        <h1 className="qualifications-title">Qualifications:</h1>
        <ul className="qualifications-list">
          {selectCard.qualifications.map((qua, id) => (
            <li key={id} className="qualification-text">
              {qua}
            </li>
          ))}
        </ul>
        <p className="gradient font-semibold">
          If you are a talented {selectCard.shortTitle} with a passion for
          creating exceptional mobile applications, and you're ready to make a
          significant impact in the payments industry, we encourage you to
          apply. Join PN Software Tech Pvt. Ltd., and together, we can shape the
          future of mobile payments.
        </p>
        <p className="gradient font-semibold mt-2">
          To apply, please submit your resume, cover letter, and portfolio to
          "hr@pnsoftwaretech.in".
        </p>

        <div className="job-summary">
          <p>Job Type: {selectCard.jobType}</p>
          <p>Salary: {selectCard.salary}</p>
          {/* <p>Job Activity: {timeAgo(selectCard.timestamp)}</p> */}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
