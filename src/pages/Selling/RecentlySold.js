import React from "react";

function RecentlySold() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* First Section - Recently Sold Header */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto mb-12">
        <h1 className="text-4xl font-bold text-primary mb-6">Recently Sold Properties</h1>
        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
          Discover the properties we've recently sold. Independent Realty Group takes pride in connecting our clients with the best deals in the market, ensuring satisfaction every step of the way.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Here are some of the properties that have found happy new owners. Let us help you buy or sell your next property with confidence and expertise.
        </p>
      </div>

      {/* Second Section - Sold Property Cards */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-6">Recently Sold</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample Sold Property Cards */}
          {[...Array(6)].map((_, index) => (
            <div key={index} className="border rounded-lg shadow-sm p-4">
              <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800">Sold Property {index + 1}</h3>
              <p className="text-gray-500 text-sm">Location: Sample Location</p>
              <p className="text-gray-500 text-sm">Sold Price: $XXX,XXX</p>
              <p className="text-gray-400 text-xs italic">Date Sold: MM/DD/YYYY</p>
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

export default RecentlySold;
