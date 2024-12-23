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
import RechargeApiPage from "./Pages/ApiServices/RechargeApiPage";
import TravelApiPage from "./Pages/ApiServices/TravelApiPage";
import DmtPage from "./Pages/ApiServices/DmtPage";
import BbpsPage from "./Pages/ApiServices/BbpsPage";
import PayoutApiPage from "./Pages/ApiServices/PayoutApiPage";
import PanCardApiPage from "./Pages/ApiServices/PanCardApiPage";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Blogs from "./Pages/Blog/Blogs";
import BulkSMS from "./Components/VAS_Service/BulkSMS/BulkSMS";
import Solutions from "./Components/VAS_Service/ExtraMiniCard/solutions";
import OperatorFinder from "./Components/VAS_Service/Finder/OperatorFinder";
import Blockchain from "./Components/IT_Service/Blockchain/Blockchain";
import DigitalMarketing from "./Components/IT_Service/DigitalMarketing/DigitalMarketing";
import SoftwareDevelopment from "./Components/IT_Service/SoftwareDevelopment/SoftwareDevelopment";
import RechargeApplication from "./Components/IT_Service/RechargeApplication/RechargeApplication";
import SubscribePopup from "./Components/SubscribePopup/SubscribePopup";
import AepsPage from "./Components/FinTech/AepsPage";
import PosPage from "./Components/FinTech/PosPage";
import MatmPage from "./Components/FinTech/MatmPage";
import IndoNepalPage from "./Components/FinTech/IndoNepalPage";
import PrepaidCardPage from "./Components/FinTech/PrepaidCardPage";
import PanUtiPage from "./Components/FinTech/PanUtiPage";
import MlmPage from "./Pages/MlmPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/RechargeApi" element={<RechargeApiPage />} />
      <Route path="/TravelApi" element={<TravelApiPage />} />
      <Route path="/DmtPage" element={<DmtPage />} />
      <Route path="/BbpsPage" element={<BbpsPage />} />
      <Route path="/PayoutApi" element={<PayoutApiPage />} />
      <Route path="/PanCardApi" element={<PanCardApiPage />} />
      <Route path="/Blog" element={<Blogs />} />
      <Route path="Contact" element={<ContactUs />} />
      <Route path="/BulkSMS" element={<BulkSMS />} />
      <Route path="/Solutions" element={<Solutions />} />
      <Route path="/OperatorFinder" element={<OperatorFinder />} />
      <Route path="/Blockchain" element={<Blockchain />} />
      <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
      <Route path="/SoftwareDevelopment" element={<SoftwareDevelopment />} />
      <Route path="/MLMSoftware" element={<MlmPage />} />
      <Route path="/RechargeApplication" element={<RechargeApplication />} />
      <Route path="/SubscribePopup" element={<SubscribePopup />} />
      <Route path="/AepsPage" element={<AepsPage />} />
      <Route path="/PosPage" element={<PosPage />} />
      <Route path="/MatmPage" element={<MatmPage />} />
      <Route path="/IndoNepal" element={<IndoNepalPage />} />
      <Route path="/PrepaidCard" element={<PrepaidCardPage />} />
      <Route path="/PanUtiPage" element={<PanUtiPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
