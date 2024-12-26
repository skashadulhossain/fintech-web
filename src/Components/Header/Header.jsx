import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import logoimg from "./Image/logo.png";
import "./Header.css";
import { useLocation, useParams } from "react-router-dom";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);

  const { pathname } = useLocation();

  const dropdownData = [
    {
      key: "about",
      title: "About",
      items: [
        { title: "Overview", link: "/About" },
        { title: "Career", link: "/Career" },
      ],
    },
    {
      key: "apiServices",
      title: "API Service",
      items: [
        { title: "Recharge API", link: "/RechargeApi" },
        { title: "Travel API", link: "/TravelApi" },
        { title: "Domestic Money Transfer", link: "/DmtPage" },
        { title: "BBPS", link: "/BbpsPage" },
        { title: "Payout API", link: "/PayoutApi" },
        { title: "Pan Card API", link: "/PanCardApi" },
      ],
    },
    {
      key: "fintech",
      title: "FinTech",
      items: [
        { title: "AePS", link: "/AepsPage" },
        { title: "POS", link: "/PosPage" },
        { title: "Mini ATM", link: "/MatmPage" },
        { title: "Indo Nepal Money Transfer", link: "/IndoNepal" },
        { title: "Prepaid Card", link: "/PrepaidCard" },
        { title: "Pan Card - UTI", link: "/PanUtiPage" },
      ],
    },
    {
      key: "itServices",
      title: "IT Service",
      items: [
        { title: "Software Development", link: "/SoftwareDevelopment" },
        { title: "MLM Software", link: "/MLMSoftware" },
        { title: "Recharge Application", link: "/RechargeApplication" },
        { title: "Digital Marketing", link: "/DigitalMarketing" },
        { title: "Blockchain Development", link: "/Blockchain" },
      ],
    },
    {
      key: "vasServices",
      title: "Vas Service",
      items: [
        { title: "Long/Short Code", link: "/Solutions" },
        { title: "Bulk SMS", link: "/BulkSMS" },
        { title: "Sim Hosting", link: "/Solutions" },
        { title: "HLR Lookup", link: "/OperatorFinder" },
        { title: "Pincode Finder", link: "/OperatorFinder" },
        { title: "IFSC Finder", link: "/OperatorFinder" },
      ],
    },
  ];

  const handleMouseEnter = (dropdown) => {
    if (window.innerWidth > 1024) {
      setActiveDropdown(dropdown);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setActiveDropdown(null);
    }
  };

  const toggleMobileDropdown = (dropdown) => {
    if (window.innerWidth <= 1024) {
      setMobileActiveDropdown(
        mobileActiveDropdown === dropdown ? null : dropdown
      );
    }
  };

  const renderDropdown = (items) => (
    <div className="dropdown-content">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          style={{ color: pathname === item.link ? "white" : "gray", fontSize: "15px" }}
          className={` ${pathname === item.link ? "active" : "dropdown-item"}`}
        >
          {item.title}
        </a>
      ))}
    </div>
  );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setMobileActiveDropdown(null);
    }
  };

  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo-box">
          <a href="/">
            <img src={logoimg} alt="Logo" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className={`header-links-box ${menuOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          {dropdownData.map(({ key, title, items }) => (
            <div
              key={key}
              className="dropdown-wrapper"
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
              onClick={() => toggleMobileDropdown(key)}
            >
              <a href="#" className="dropdown-trigger">
                {title}
                <IoIosArrowDown
                  size={14}
                  className={`dropdown-icon ${
                    activeDropdown === key || mobileActiveDropdown === key
                      ? "rotated"
                      : ""
                  }`}
                />
              </a>
              {(activeDropdown === key || mobileActiveDropdown === key) &&
                renderDropdown(items)}
            </div>
          ))}
          <a href="/Blog">Blog</a>
          <a href="/Contact">Contact</a>
        </div>

        {/* Hamburger Menu Icon */}
        <div
          className={`hamburger-menu ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
