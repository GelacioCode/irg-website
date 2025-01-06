import React from "react";

function HomeValuation() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header Section */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto mb-12">
        <h1 className="text-4xl font-bold text-primary mb-6">Home Valuation</h1>
        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
          Curious about how much your home is worth? Get an accurate and professional home valuation to understand its market value and make informed decisions.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Independent Realty Group uses market insights and property details to provide you with an estimate that reflects the true value of your home.
        </p>
      </div>

      {/* Valuation Process Section */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-6">Our Valuation Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Steps for Valuation */}
          {[
            { title: "Step 1: Property Details", description: "Share key details about your property, including location, size, and condition." },
            { title: "Step 2: Market Analysis", description: "We analyze current market trends, recent sales, and property data." },
            { title: "Step 3: Get Your Valuation", description: "Receive a detailed and accurate valuation report for your home." },
          ].map((step, index) => (
            <div key={index} className="border rounded-lg shadow-sm p-6 bg-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Ready to find out what your home is worth? Let us help you get started today!
          </p>
          <button className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-teal-700 transition">
            Request Your Home Valuation
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeValuation;
