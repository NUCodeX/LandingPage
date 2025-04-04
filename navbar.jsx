import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Navigationbar = ({ logo }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const closeNavbar = () => {
    setIsExpanded(false);
  };

  const navItems = [
    { name: "Voter's InfoHub", icon: "fa-info-circle" },
    { name: "Candidate Tracker", icon: "fa-user-tie" },
    { name: "Games", icon: "fa-gamepad" },
    { name: "FAQs", icon: "fa-question-circle" },
    { name: "About Us", icon: "fa-users" },
    { name: "Contact Us", icon: "fa-envelope" }
  ];

  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          {/* Desktop Logo (left side) */}
          <div className="d-none d-lg-flex align-items-center">
            {logo && (
              <a className="navbar-brand me-3" href="#">
                <img 
                  src={logo} 
                  alt="PiliPinas Logo" 
                  style={{ height: "40px" }} // Adjust height as needed
                />
              </a>
            )}
          </div>

          {/* Mobile Layout (logo to right of hamburger) */}
          <div className="d-flex d-lg-none w-100 justify-content-between align-items-center">
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="d-flex align-items-center ms-3">
              {logo && (
                <a className="navbar-brand me-2" href="#">
                  <img 
                    src={logo} 
                    alt="PiliPinas Logo" 
                    style={{ height: "30px" }} // Slightly smaller for mobile
                  />
                </a>
              )}
            </div>
          </div>

          {/* Desktop Navigation Items */}
          <div className="d-none d-lg-flex ms-auto">
            <ul className="navbar-nav flex-row">
              {navItems.map((item, index) => (
                <li className="nav-item mx-1" key={index}>
                  <a
                    className={`nav-link text-white nav-item-hover ${
                      index === 0 ? "active" : ""
                    }`}
                    href="#"
                  >
                    <i className={`fas ${item.icon} me-1`}></i>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar d-lg-none ${isExpanded ? "open" : ""}`}>
        <div className="sidebar-header">
          <h5 className="text-white">PiliPinas Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={closeNavbar}
            aria-label="Close"
          ></button>
        </div>
        <div className="sidebar-body">
          <ul className="navbar-nav">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`nav-link text-white sidebar-item-hover ${
                    index === 0 ? "active" : ""
                  }`}
                  href="#"
                  onClick={closeNavbar}
                >
                  <i className={`fas ${item.icon} me-2`}></i>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isExpanded && (
        <div className="sidebar-overlay d-lg-none" onClick={closeNavbar}></div>
      )}
    </>
  );
};

export default Navigationbar;