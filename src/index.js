import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Components/Contact/Contact";
import RechargeApiPage from "./Pages/ApiServices/RechargeApiPage";
import TravelApiPage from "./Pages/ApiServices/TravelApiPage";
import DmtPage from "./Pages/ApiServices/DmtPage";
import BbpsPage from "./Pages/ApiServices/BbpsPage";
import PayoutApiPage from "./Pages/ApiServices/PayoutApiPage";
import PanCardApiPage from "./Pages/ApiServices/PanCardApiPage";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Blogs from "./Pages/Blog/Blogs";
import AepsPage from "./Pages/FinTech/AepsPage";
import PosPage from "./Pages/FinTech/PosPage";
import MatmPage from "./Pages/FinTech/MatmPage";
import IndoNepalPage from "./Pages/FinTech/IndoNepalPage";
import PrepaidCardPage from "./Pages/FinTech/PrepaidCardPage";
import PanUtiPage from "./Pages/FinTech/PanUtiPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/recharge-api" element={<RechargeApiPage />} />
      <Route path="/travel-api" element={<TravelApiPage />} />
      <Route path="/dmt" element={<DmtPage />} />
      <Route path="/bbps" element={<BbpsPage />} />
      <Route path="/payout-api" element={<PayoutApiPage />} />
      <Route path="/pancard-api" element={<PanCardApiPage />} />
      <Route path="/aeps" element={<AepsPage />} />
      <Route path="/pos" element={<PosPage />} />
      <Route path="/matm" element={<MatmPage />} />
      <Route path="/indo-nepal" element={<IndoNepalPage />} />
      <Route path="/prepaid-card" element={<PrepaidCardPage />} />
      <Route path="/pan-uti" element={<PanUtiPage />} />
      <Route path="Blog" element={<Blogs/>} />
      <Route path="Contact" element={<ContactUs/>} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
