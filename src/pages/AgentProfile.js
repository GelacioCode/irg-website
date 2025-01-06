import React from "react";
import { useLocation } from "react-router-dom";

const AgentProfile = () => {
  const location = useLocation();
  const { agent } = location.state || {}; // Retrieve agent from state
  console.log(agent);

  if (!agent) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold">Agent Not Found</h2>
        <p className="text-gray-500">We couldn't find the agent you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Content */}
      <div className="flex flex-col items-center gap-8 text-center bg-white shadow-lg rounded-lg p-8 mb-8 mt-6">
        {/* Agent Image */}
        <div className="w-80 h-80 overflow-hidden">
          <img
            src={agent.image}
            alt={agent.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Agent Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{agent.name}</h1>
          <p className="text-gray-500 text-lg">{agent.role}</p>
          <div className="mt-4">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum.
            </p>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="flex gap-4">
          <a
            href={`mailto:${agent.contact.email}`}
            className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition-colors"
          >
            Email
          </a>
          <a
            href={`tel:${agent.contact.phone}`}
            className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition-colors"
          >
            Call
          </a>
        </div>
      </div>

      {/* About the Agent Section */}
      <div className="bg-white shadow-md rounded-lg p-8 mb-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About {agent.name}</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          {agent.about || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        </p>
      </div>

      {/* Current Listings Section */}
      <div className="bg-white shadow-md rounded-lg p-8 mb-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Current Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="border rounded-lg shadow-sm p-4">
              <div className="h-40 bg-gray-200 mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800">Listing Title</h3>
              <p className="text-gray-500 text-sm">Location or details here</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sold Listings Section */}
      <div className="bg-white shadow-md rounded-lg p-8 mb-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Sold Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="border rounded-lg shadow-sm p-4">
              <div className="h-40 bg-gray-200 mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800">Sold Property</h3>
              <p className="text-gray-500 text-sm">Location or details here</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
