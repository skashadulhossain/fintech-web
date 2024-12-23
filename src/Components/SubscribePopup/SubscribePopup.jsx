import React from 'react';
import './SubscribePopup.css';
import iconimg from './Image/email.png';
import { IoClose } from 'react-icons/io5';

const SubscribePopup = ({ onClose }) => {
  return (
    <>
      
    <div className="SubscribePopups-popup-modal">
        <div className="SubscribePopups-popup-modal-content">
            <div className="SubscribePopups-popup-container">
                <IoClose className='SubscribePopups-popup-close-btn' onClick={onClose} />
                <div className="SubscribePopups-popup-img-box">
                    <img src={iconimg} alt="" />
                </div>
                <div className="SubscribePopups-popup-title-box">
                    <h2>Subscribe to our newsletter</h2>
                    <p>Receive new articles and resources directly on your inblox.
                      Fill your email below to join our email newsletter today</p>
                </div>
                <div className="SubscribePopups-popup-btn-box">
                    <input type="email" placeholder='Enter your email' required />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default SubscribePopup;