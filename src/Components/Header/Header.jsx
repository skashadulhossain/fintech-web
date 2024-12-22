import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import logoimg from './Image/Logo img.png';
import './Header.css';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);

  const dropdownContent = {
    about: [
      { title: 'Overview', link: '#' },
      { title: 'Career', link: '#' }
    ],
    apiServices: [
      { title: 'Recharge API', link: '/RechargeApi' },
      { title: 'Travel API', link: '/TravelApi' },
      { title: 'Domestic Money Transfer', link: '/DmtPage' },
      { title: 'BBPS', link: '/BbpsPage' },
      { title: 'Payout API', link: '/PayoutApi' },
      { title: 'Pan Card API', link: '/PanCardApi' }
    ],
    fintech: [
      { title: 'AePS', link: '#' },
      { title: 'POS', link: '#' },
      { title: 'Mini ATM', link: '#' },
      { title: 'Indo Nepal Money Transfer', link: '#' },
      { title: 'Prepaid Card', link: '#' },
      { title: 'Pan Card - UTI', link: '#' }
    ],
    itServices: [
      { title: 'Software Development', link: '/SoftwareDevelopment' },
      { title: 'MLM Software', link: '#' },
      { title: 'Recharge Application', link: '/RechargeApplication' },
      { title: 'Digital Marketing', link: '/DigitalMarketing' },
      { title: 'Blockchain Development', link: '/Blockchain' }
    ],
    vasServices: [
      { title: 'Long/Short Code', link: '/Solutions' },
      { title: 'Bulk SMS', link: '/BulkSMS' },
      { title: 'Sim Hosting', link: '/Solutions' },
      { title: 'HLR Lookup', link: '/OperatorFinder' },
      { title: 'Pincode Finder', link: '/OperatorFinder' },
      { title: 'IFSC Finder', link: '/OperatorFinder' }
    ]
  };

  const handleMouseEnter = (dropdown) => {
    // Only apply hover for desktop
    if (window.innerWidth > 1024) {
      setActiveDropdown(dropdown);
    }
  };

  const handleMouseLeave = () => {
    // Only apply hover for desktop
    if (window.innerWidth > 1024) {
      setActiveDropdown(null);
    }
  };

  const toggleMobileDropdown = (dropdown) => {
    // Only apply for mobile
    if (window.innerWidth <= 1024) {
      setMobileActiveDropdown(mobileActiveDropdown === dropdown ? null : dropdown);
    }
  };

  const renderDropdown = (items) => (
    <div className="dropdown-content">
      {items.map((item, index) => (
        <a key={index} href={item.link} className="dropdown-item">
          {item.title}
        </a>
      ))}
    </div>
  );

  const renderDropdownTrigger = (text, dropdownKey) => (
    <div
      className="dropdown-wrapper"
      onMouseEnter={() => handleMouseEnter(dropdownKey)}
      onMouseLeave={handleMouseLeave}
      onClick={() => toggleMobileDropdown(dropdownKey)}
    >
      <a href="#" className="dropdown-trigger">
        {text}
        <IoIosArrowDown
          size={14}
          className={`dropdown-icon ${
            (activeDropdown === dropdownKey || mobileActiveDropdown === dropdownKey) ? 'rotated' : ''
          }`}
        />
      </a>
      {(activeDropdown === dropdownKey || mobileActiveDropdown === dropdownKey) && 
        renderDropdown(dropdownContent[dropdownKey])}
    </div>
  );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Reset mobile dropdown when closing menu
    if (menuOpen) {
      setMobileActiveDropdown(null);
    }
  };

  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo-box">
          <a href="/"><img src={logoimg} alt="Logo" /></a>
        </div>
        
        {/* Navigation Links */}
        <div className={`header-links-box ${menuOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          {renderDropdownTrigger('About', 'about')}
          {renderDropdownTrigger('API Service', 'apiServices')}
          {renderDropdownTrigger('FinTech', 'fintech')}
          {renderDropdownTrigger('IT Service', 'itServices')}
          {renderDropdownTrigger('Vas Service', 'vasServices')}
          <a href="/Blog">Blog</a>
          <a href="/Contact">Contact</a>
        </div>
        
        {/* Hamburger Menu Icon */}
        <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;