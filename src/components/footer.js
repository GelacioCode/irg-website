import React from "react";
import irgLogo from "../assets/images/irgLogo.png";
import agents from "../resources/agents";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 text-gray-700 text-sm">
      <div className="container mx-auto px-4 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div>
          <p className="font-semibold">
            Phone: <a href="tel:2037755514" className="text-blue-500 hover:underline">203.775.5514</a> 📞
          </p>
          <p>Monday to Friday - 8:00am - 5:00pm</p>
          <p>499 Federal Road, Suite 20A, Brookfield, CT 06804</p>
          <p>11 Saw Mill Road, New Fairfield, CT 06812</p>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <img
            src={irgLogo}
            alt="Independent Realty Group"
            className="mb-4"
          />
          <p>
            Independent Realty Group services the Bethel, Brookfield, Danbury,
            New Fairfield, New Milford, Newtown, Ridgefield, Redding, and
            Sherman, Southbury, and Woodbury areas of Fairfield and Litchfield
            Counties of Connecticut.
          </p>
        </div>

        {/* Agents */}
        <div>
          <p>{agents.join(", ")}</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 text-center border-t border-gray-300 pt-4">
        <p>© {new Date().getFullYear()} Independent Realty Group</p>
        <p>This web site is designed for general information purposes only.</p>
      </div>
    </footer>
  );
};

export default Footer;
