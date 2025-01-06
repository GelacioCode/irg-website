import React from "react";

function Listing() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* First Section - Our Commitment */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto mb-12">
        <h1 className="text-4xl font-bold text-primary mb-6">Our Commitment to You</h1>
        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
          Independent Realty Group will help you evaluate specific properties, keeping you up-to-date with new listings on the market. Once you have found a home, we will provide you with all the information needed to help make an educated decision.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our agents at Independent Realty Group will help you determine the fair market value and assist you in determining the most favorable price and terms to offer. We will work with you to develop the best negotiating strategies specific to the property and seller.
        </p>
      </div>

      {/* Second Section - Current Listings */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-6">Current Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample Property Cards */}
          {[...Array(6)].map((_, index) => (
            <div key={index} className="border rounded-lg shadow-sm p-4">
              <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800">Property Title {index + 1}</h3>
              <p className="text-gray-500 text-sm">Location: Sample Location</p>
              <p className="text-gray-500 text-sm">Price: $XXX,XXX</p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-teal-700 transition">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Listing;
