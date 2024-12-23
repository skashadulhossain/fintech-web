import React from 'react';
import './SubscribePopup.css';
import { IoClose } from 'react-icons/io5';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaRegUser} from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';

const SubscribePopup = ({ onClose }) => {
  // Restrict date input to exclude weekends (Saturday and Sunday)
  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const day = selectedDate.getDay();
    if (day === 0 || day === 6) {
      alert("Weekends are not allowed. Please select a weekday.");
      event.target.value = ""; // Clear the invalid input
    }
  };

  // Restrict time input to 9 AM to 6 PM
  const handleTimeChange = (event) => {
    const time = event.target.value;
    const [hours, minutes] = time.split(":").map(Number);
    if (hours < 9 || hours > 18 || (hours === 18 && minutes > 0)) {
      alert("Please select a time between 9 AM and 6 PM.");
      event.target.value = ""; // Clear the invalid input
    }
  };

  return (
    <>
      <div className="SubscribePopups-popup-modal">
        <div className="SubscribePopups-popup-modal-content">
          <div className="SubscribePopups-popup-container">
            <IoClose
              className="SubscribePopups-popup-close-btn"
              onClick={onClose}
            />
            <div className="SubscribePopups-popup-title-box">
              <h2>
                Drop us a line. Our Fintech Expert will get back to you shortly!
              </h2>
            </div>
            <form>
              <div className="SubscribePopups-popup-inp-box">
                <div className="SubscribePopups-popup-icon-box">
                  <input type="text" placeholder="Name" required />
                  <FaRegUser />
                </div>
                <div className="SubscribePopups-popup-icon-box">
                  <input type="email" placeholder="Email" required />
                  <HiOutlineMailOpen />
                </div>
                <div className="SubscribePopups-popup-icon-box">
                  <input type="number" placeholder="Number" required />
                  <LuPhoneCall />
                </div>
                <div className="SubscribePopups-popup-inp-box-2">
                  <div className='SubscribePopups-popup-inp-min-box'>
                    <input
                      type="date"
                      placeholder="Date"
                      required
                      onChange={handleDateChange}
                    />
                    <label htmlFor="">Select a weekdays.</label>
                  </div>
                  <div className='SubscribePopups-popup-inp-min-box'>
                    <input
                      type="time"
                      placeholder="Time"
                      required
                      onChange={handleTimeChange}
                    />
                    <label htmlFor="">Select a time between 9 AM and 6 PM.</label>
                  </div>
                </div>
              </div>
              <div className="SubscribePopups-popup-btn-box">
                <button>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribePopup;