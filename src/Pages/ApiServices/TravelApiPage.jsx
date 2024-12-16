import React from "react";
import "./api.css";
import MainLayout from "../../Components/Layout/MainLayout";
import { apiServices } from "../../js/pageOptions";
import PageRoutes from "../../Components/PageRoutes";
import { Check } from "lucide-react";

const TravelApiPage = () => {
  return (
    <>
      <MainLayout>
        <div>
          <PageRoutes title="API Services" options={apiServices} />
          <div className="travel-container">
            <div className="travel-img-container">
              <img src="/images/rail.jpg" alt="rail" loading="lazy" />
            </div>
            <div className="api-details">
              <h2>Simplify Train Ticket Booking with Our IRCTC API</h2>
              <p>
                Indian Railways continues to be a preferred mode of
                transportation due to its affordability and reliable services.
                With the advent of technology, booking train tickets has become
                easier than ever. Gone are the days of long queues at
                reservation counters—now, train tickets can be booked seamlessly
                online using our advanced IRCTC API.
              </p>
              <p></p>
            </div>
            <div className="advantage-container">
              <div>
                <h4>Why Choose Our IRCTC API?</h4>
                <div className="advantage">
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    <span style={{ fontWeight: 600 }}>
                      Easy Ticket Booking:
                    </span>
                    Quickly book train tickets for your customers with minimal
                    effort.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    <span style={{ fontWeight: 600 }}>
                      Comprehensive Features:
                    </span>
                    Access a wide range of services, including train ticket
                    booking, live train tracking, and PNR status checks.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    <span style={{ fontWeight: 600 }}>
                      Secure and Reliable:
                    </span>
                    Equipped with the latest security features to ensure safe
                    and uninterrupted transactions.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    <span style={{ fontWeight: 600 }}>
                      Single Wallet System:
                    </span>
                    Manage all transactions conveniently through a single wallet
                    linked to your account.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    <span style={{ fontWeight: 600 }}>Affordable Pricing:</span>
                    Our budget-friendly API solutions are designed to boost your
                    profitability.
                  </span>
                </div>
              </div>
            </div>
            <div className="advantage-container">
              <div>
                <h4>Benefits for Your Business</h4>
                <div className="advantage">
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Become a ticket booking agent and provide efficient services
                    to your customers at competitive rates.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Leverage a vast database of train and station information to
                    meet diverse customer needs.
                  </span>
                  <span>
                    <span>
                      <Check className="check-icon" />
                    </span>
                    Generate additional revenue by offering reliable train
                    ticket booking services.
                  </span>
                </div>
              </div>
            </div>
            <div className="api-details">
              <h2>Why PN Software Tech Pvt. Ltd?</h2>
              <p>
                As a leading provider of IRCTC API solutions, we deliver
                cutting-edge services backed by a team of highly skilled and
                certified developers. Our Indian Railway API is easy to
                integrate and provides uninterrupted access to essential
                features like ticket booking and PNR status tracking.
              </p>
              <p>
                Start your journey toward success with our IRCTC API solutions.
                Offer seamless and secure train ticket booking services to your
                customers and grow your business effortlessly. Reach out to PN
                Software Tech Pvt. Ltd today to get started!
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default TravelApiPage;
