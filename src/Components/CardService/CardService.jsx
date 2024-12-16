import React from 'react';
import './CardService.css';
import cardimg1 from './Image/icon 1.png';
import cardimg2 from './Image/icon 2.png';
import cardimg3 from './Image/icon 3.png';
import cardimg4 from './Image/icon 4.png';
import cardimg5 from './Image/icon 5.png';


const CardService = () => {
  return (
    <>
      
    <section className="CardService-section">
        <div className="CardService-main-container">
            <div className="CardService-title-container">
              <h1>We Provide Digital Services</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eligendi 
                soluta vitae ut velit officia odio nemo quaerat tempora aut.</p>
              <button>Explore All Service</button>
            </div>
            <div className="CardService-card-container">
              <div className="CardService-container-item-1">
                <div className="CardService-container">
                  <div className="CardService-img-box">
                    <img src={cardimg1} alt="" />
                  </div>
                  <div className="CardService-title-box">
                    <h2>Travel Services</h2>
                    <p>"Travel is the only thing you purchase that shapes you wealthy". We 
                      thoroughly vow by this and contemplate in satisfying travel dreams 
                      that shape you unfailingly wealthy by degrees. PN SOFTWARE TECH PVT. LTD  is selling stupendous episodes over years</p>
                  </div>
                </div>
              </div>
              <div className="CardService-container-item-2">
                <div className="CardService-container">
                  <div className="CardService-img-box">
                    <img src={cardimg2} alt="" />
                  </div>
                  <div className="CardService-title-box">
                    <h2>IT Services</h2>
                    <p>Substantially, the prosperity of organizations in the sector hangs on their 
                      capability to establish their services and develop their technical competence. 
                      We provide the preeminent IT service to make you grow digitally.</p>
                  </div>
                </div>
                <div className="CardService-container">
                  <div className="CardService-img-box">
                    <img src={cardimg3} alt="" />
                  </div>
                  <div className="CardService-title-box">
                    <h2>VAS Services</h2>
                    <p>VAS is a prevalent telecommunications sector term for non-core services, 
                      or, in essence, all services afar standard voice calls and fax 
                      transmissions. Here, at PN SOFTWARE TECH PVT. LTD we offer 
                      world-class customer support to answer all your queries</p>
                  </div>
                </div>
              </div>
              <div className="CardService-container-item-3">
                <div className="CardService-container">
                  <div className="CardService-img-box">
                    <img src={cardimg4} alt="" />
                  </div>
                  <div className="CardService-title-box">
                    <h2>FinTech</h2>
                    <p>Fintech is a budgetary transformation that illustrates a growing folding 
                      of money superintendence area. PN SOFTWARE TECH PVT. LTD specializes 
                      in technology development to aid the banking and financial industries.</p>
                  </div>
                </div>
                <div className="CardService-container">
                  <div className="CardService-img-box">
                    <img src={cardimg5} alt="" />
                  </div>
                  <div className="CardService-title-box">
                    <h2>BBPS Bill Payment</h2>
                    <p>VAS is a prevalent telecommunications sector term for non-core services, 
                      or, in essence, all services afar standard voice calls and fax 
                      transmissions. Here, at PN SOFTWARE TECH PVT. LTDwe offer 
                      world-class customer support to answer all your queries</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default CardService;