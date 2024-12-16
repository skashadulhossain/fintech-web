import React from "react";
import { Link, useLocation } from "react-router-dom";

const PageRoutes = ({ title, options }) => {
  const { pathname } = useLocation();

  return (
    <div className="page-route-main-container">
      <h1 className="">{title}</h1>
      <p>
        Click on a link below to navigate to the respective API service page.
      </p>
      <div className="page-route-container">
        {options.map((opt, id) => {
          const isActive = pathname === opt.link;
          return (
            <div
              key={id}
              className={isActive ? "page-options-active" : "page-options"}
            >
              <Link to={opt.link}>{opt.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageRoutes;
