import { MoveRight } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const PageRoutes = ({ title, options }) => {
  const { pathname } = useLocation();

  return (
    <div className="page-route-main-container">
      <h1 className="">{title}</h1>
      {/* <p>
        Click on a link below to navigate to the respective API service page.
      </p> */}
      <div className="page-route-container">
        {options.map((opt, id) => {
          const isActive = pathname === opt.link;
          return (
            <div key={id} className="route-link-div">
              <Link
                className={` ${isActive ? "route-link-active" : "route-link"}`}
                to={opt.link}
              >
                {opt.name} <MoveRight className="route-icon" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageRoutes;
