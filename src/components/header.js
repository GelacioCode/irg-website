import React, { useState } from "react";
import irgLogoWhite from "../assets/images/irgLogoWhite.jpg";


const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the hamburger menu

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white w-full top-0 z-50 shadow-md relative" style={{ height: "80px" }}>
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        {/* Logo Section */}
        <a href="/" className="flex items-center h-full">
          <img src={irgLogoWhite} alt="IRG Logo" className="h-20 w-auto" />
        </a>

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-primary focus:outline-none z-50"
          onClick={toggleMenu}
        >
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // Close icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-6 lg:items-center absolute lg:static top-full right-0 lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-40`}
        >
          <div className="flex flex-col lg:flex-row lg:space-x-6">
            <a
              href="/"
              className="text-primary font-bold text-xl relative group pb-1 px-4 lg:px-0 w-max"
            >
              Home
            </a>

            {/* Buying Dropdown */}
            <div className="relative px-4 lg:px-0 w-max">
              <button
                onClick={() => toggleDropdown("buying")}
                className="text-primary font-bold text-xl relative group pb-1"
              >
                Buying <span className="ml-1">▼</span>
              </button>
              {openDropdown === "buying" && (
                <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg z-50 w-max">
                  <a
                    href="/buying/currentlistings"
                    className="block px-4 py-2 text-sm text-primary font-bold hover:bg-gray-100"
                  >
                    Our Listings
                  </a>
                  <a
                    href="https://candlewoodlakerealestate.idxbroker.com/idx/search/advanced"
                    className="block px-4 py-2 text-sm text-primary font-bold hover:bg-gray-100"
                  >
                    Home Search
                  </a>
                  <a
                    href="/buying/lakeinfoguides"
                    className="block px-4 py-2 text-sm text-primary font-bold hover:bg-gray-100"
                  >
                    Lake Info Guide
                  </a>
                </div>
              )}
            </div>

            {/* Selling Dropdown */}
            <div className="relative px-4 lg:px-0 w-max">
              <button
                onClick={() => toggleDropdown("selling")}
                className="text-primary font-bold text-xl relative group pb-1"
              >
                Selling <span className="ml-1">▼</span>
              </button>
              {openDropdown === "selling" && (
                <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg z-50 w-max">
                  <a
                    href="/selling/recentlysold"
                    className="block px-4 py-2 text-sm text-primary font-bold hover:bg-gray-100"
                  >
                    Recently Sold
                  </a>
                  <a
                    href="/selling/ourmarketingplan"
                    className="block px-4 py-2 text-sm text-primary font-bold hover:bg-gray-100"
                  >
                    Our Marketing Plan
                  </a>
                  {/* <a
                    href="/selling/preparingyourhomeforsale"
                    className="block px-4 py-2 text-sm text-primary font-bold hover:bg-gray-100"
                  >
                    Preparing Your Home
                  </a> */}
                  <a
                    href="https://candlewoodlakerealestate.idxbroker.com/idx/homevaluation"
                    className="block px-4 py-2 text-sm text-primary font-bold hover:bg-gray-100"
                  >
                    Home Valuation
                  </a>

                  <a
                    href="/selling/marketreports"
                    className="block px-4 py-2 text-sm text-primary font-bold hover:bg-gray-100"
                  >
                    Market Reports
                  </a>
                </div>
              )}
            </div>

            {/* Other Links */}
            <a
              href="/waterfronthomes"
              className="text-primary font-bold text-xl relative group pb-1 px-4 lg:px-0 w-max"
            >
              Waterfront Homes
            </a>
            <a
              href="/resourceguide"
              className="text-primary font-bold text-xl relative group pb-1 px-4 lg:px-0 w-max"
            >
              Resource Guide
            </a>
            <a
              href="/agents"
              className="text-primary font-bold text-xl relative group pb-1 px-4 lg:px-0 w-max"
            >
              Agents
            </a>
            <a
              href="/contactus"
              className="text-primary font-bold text-xl relative group pb-1 px-4 lg:px-0 w-max"
            >
              Contact Us
            </a>
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Header;
