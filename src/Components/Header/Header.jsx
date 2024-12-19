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
      { title: 'Recharge API', link: '/recharge-api' },
      { title: 'Travel API', link: '/travel-api' },
      { title: 'Domestic Money Transfer', link: '/dmt' },
      { title: 'BBPS', link: '/bbps' },
      { title: 'Payout API', link: '/payout-api' },
      { title: 'Pan Card API', link: '/pancard-api' }
    ],
    fintech: [
      { title: 'AePS', link: '/aeps' },
      { title: 'POS', link: '/pos' },
      { title: 'Mini ATM', link: '/matm' },
      { title: 'Indo Nepal Money Transfer', link: '/indo-nepal' },
      { title: 'Prepaid Card', link: '/prepaid-card' },
      { title: 'Pan Card - UTI', link: '/pan-uti' }
    ],
    itServices: [
      { title: 'Software Development', link: '#' },
      { title: 'MLM Software', link: '#' },
      { title: 'Recharge Application', link: '#' },
      { title: 'Digital Marketing', link: '#' },
      { title: 'Blockchain Development', link: '#' }
    ],
    vasServices: [
      { title: 'Long/Short Code', link: '#' },
      { title: 'Bulk SMS', link: '#' },
      { title: 'Sim Hosting', link: '#' },
      { title: 'HLR Lookup', link: '#' },
      { title: 'Pincode Finder', link: '#' },
      { title: 'IFSC Finder', link: '#' }
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
          <img src={logoimg} alt="Logo" />
        </div>
        
        {/* Navigation Links */}
        <div className={`header-links-box ${menuOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          {renderDropdownTrigger('About', 'about')}
          {renderDropdownTrigger('API Service', 'apiServices')}
          {renderDropdownTrigger('FinTech', 'fintech')}
          {renderDropdownTrigger('IT Service', 'itServices')}
          {renderDropdownTrigger('Vas Service', 'vasServices')}
          <a href="/blog">Blog</a>
          <a href="#">Contact</a>
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