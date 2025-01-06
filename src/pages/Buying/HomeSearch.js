import React from "react";

function HomeSearch() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* First Section - Page Description */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto mb-12">
        <h1 className="text-4xl font-bold text-primary mb-6">Home Search</h1>
        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
          Find your dream home with ease. Use our advanced search tools to explore a wide variety of properties tailored to your preferences. From location to price range, bedrooms to property type, we make it simple to discover homes that fit your needs.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Start your search now and take the first step toward owning your perfect home!
        </p>
      </div>

      {/* Second Section - Search Form */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-6">Search Properties</h2>

        {/* Tabs */}
        <div className="flex justify-between mb-6">
          <button className="flex-1 text-center py-3 bg-primary text-white font-semibold rounded-md mx-1 hover:bg-teal-700 transition">
            Advanced Search
          </button>
          <button className="flex-1 text-center py-3 bg-primary text-white font-semibold rounded-md mx-1 hover:bg-teal-700 transition">
            Address
          </button>
          <button className="flex-1 text-center py-3 bg-primary text-white font-semibold rounded-md mx-1 hover:bg-teal-700 transition">
            Map Search
          </button>
          <button className="flex-1 text-center py-3 bg-primary text-white font-semibold rounded-md mx-1 hover:bg-teal-700 transition">
            Waterfront Search
          </button>
        </div>

        {/* Search Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              City, County, Postal Code
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-500"
              placeholder="Select"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Min Price
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-500"
              placeholder="$200,000"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Max Price
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-500"
              placeholder="$8,000,000"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Property Type
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-500">
              <option>Single Family Residential</option>
              <option>Condominium</option>
              <option>Multi-Family Home</option>
              <option>Vacant Land</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Bedrooms
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-500">
              <option>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Bathrooms
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-500">
              <option>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Acres</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-500">
              <option>Any</option>
              <option>0-1</option>
              <option>1-2</option>
              <option>2+</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Status</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-teal-500">
              <option>Select</option>
              <option>Available</option>
              <option>Sold</option>
              <option>Pending</option>
            </select>
          </div>
        </form>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-700 transition"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeSearch;
