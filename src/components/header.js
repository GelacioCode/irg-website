import React, { useState } from "react";
import irgLogoWhite from "../assets/images/irgLogoWhite.jpg";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo Section */}
        <a href="/" className="flex items-center">
          <img src={irgLogoWhite} alt="IRG Logo" className="h-20 w-auto" />
        </a>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a
            href="/"
            className="text-primary font-bold text-xl relative group pb-1"
          >
            Home
            <span className="absolute left-0 bottom-0 translate-y-2 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Buying Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("buying")}
              className="text-primary font-bold text-xl relative group pb-1"
            >
              Buying <span className="ml-1">▼</span>
              <span className="absolute left-0 bottom-0 translate-y-2 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            {openDropdown === "buying" && (
              <div className="absolute left-0 mt-2 bg-white rounded-md w-56">
                <a
                  href="/buying/currentlistings"
                  className="block px-4 py-2 text-sm text-primary font-bold hover:bg-gray-100"
                >
                  Current Listings
                </a>
                <a
                  href="/buying/homesearch"
                  className="block px-4 py-2 text-sm text-primary font-bold hover:bg-gray-100"
                >
                  Home Search
                </a>
                <a
                  href="/buying/lakeinfoguide"
                  className="block px-4 py-2 text-sm text-primary font-bold hover:bg-gray-100"
                >
                  Lake Info Guide
                </a>
              </div>
            )}
          </div>

          {/* Selling Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("selling")}
              className="text-primary font-bold text-xl relative group pb-1"
            >
              Selling <span className="ml-1">▼</span>
              <span className="absolute left-0 bottom-0 translate-y-2 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            {openDropdown === "selling" && (
              <div className="absolute left-0 mt-2 bg-white rounded-md w-56">
                <a
                  href="/selling/recently-sold"
                  className="block px-4 py-2 text-sm text-primary font-bold hover:bg-gray-100"
                >
                  Recently Sold
                </a>
                <a
                  href="/selling/marketing-plan"
                  className="block px-4 py-2 text-sm text-primary font-bold hover:bg-gray-100"
                >
                  Our Marketing Plan
                </a>
                <a
                  href="/selling/home-preparation"
                  className="block px-4 py-2 text-sm text-primary font-bold hover:bg-gray-100"
                >
                  Preparing Your Home for Sale
                </a>
                <a
                  href="/selling/home-valuation"
                  className="block px-4 py-2 text-sm text-primary font-bold hover:bg-gray-100"
                >
                  Home Valuation
                </a>
              </div>
            )}
          </div>

          {/* Other Links */}
          <a
            href="/listings"
            className="text-primary font-bold text-xl relative group pb-1"
          >
            Our Listings
            <span className="absolute left-0 bottom-0 translate-y-2 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/waterfront-homes"
            className="text-primary font-bold text-xl relative group pb-1"
          >
            Waterfront Homes
            <span className="absolute left-0 bottom-0 translate-y-2 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/resources"
            className="text-primary font-bold text-xl relative group pb-1"
          >
            Resource Guide
            <span className="absolute left-0 bottom-0 translate-y-2 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/agents"
            className="text-primary font-bold text-xl relative group pb-1"
          >
            Agents
            <span className="absolute left-0 bottom-0 translate-y-2 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/contact"
            className="text-primary font-bold text-xl relative group pb-1"
          >
            Contact Us
            <span className="absolute left-0 bottom-0 translate-y-2 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
