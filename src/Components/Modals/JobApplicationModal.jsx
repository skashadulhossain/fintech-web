import React from "react";
import "./Modal.css";
import { X } from "lucide-react";

const JobApplicationModal = ({ showModal, setShowModal }) => {
  const handleApplyClick = () => {
    setShowModal(true);
  };

  const handleCloseClick = () => {
    setShowModal(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      handleCloseClick();
    }
  };

  return (
    <div>
      {showModal && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseClick}>
              <X />
            </span>
            <h3>Job Application Form</h3>
            <form style={{ marginTop: "1.5rem" }}>
              <div className="form-flex-box">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="First name" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Last name" />
                </div>
              </div>
              <div className="form-flex-box">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="example@example.com" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div className="form-flex-box">
                <div className="form-group">
                  <label>Applied Position</label>
                  <input type="text" value="Android Developer" readOnly />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <select>
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Resume</label>
                <input type="file" />
              </div>
              <div className="form-group">
                <label>Experience (in years)</label>
                <input type="text" placeholder="Experience in years" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <div className="form-sub-group">
                  <input type="text" placeholder="City" />
                  <input type="text" placeholder="State" />
                  <input type="text" placeholder="Pincode" />
                </div>
              </div>
              <div className="submit-button-container">
                <button type="submit" className="submit-button">
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApplicationModal;
