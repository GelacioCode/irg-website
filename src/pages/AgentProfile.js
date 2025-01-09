import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const AgentProfile = () => {
  const location = useLocation();
  const { agent } = location.state || {}; // Retrieve agent from state
  const currentWidgetRef = useRef(null);
  const soldWidgetRef = useRef(null);

  const [showCurrentListings, setShowCurrentListings] = useState(true);
  const [showSoldListings, setShowSoldListings] = useState(true);

  useEffect(() => {
    // Inject the current listings widget
    if (currentWidgetRef.current && agent?.currentwidget) {
      currentWidgetRef.current.innerHTML = agent.currentwidget;
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.charset = "UTF-8";
      script.src = currentWidgetRef.current.querySelector("script")?.src;

      script.onload = () => {
        const noResultsMessage = currentWidgetRef.current.querySelector(
          "#IDX-noResultsMessage-62382"
        );
        if (noResultsMessage && noResultsMessage.textContent.includes("No Properties Found")) {
          setShowCurrentListings(false);
        } else {
          setShowCurrentListings(true);
        }
      };

      document.body.appendChild(script);
    } else {
      setShowCurrentListings(false);
    }

    // Inject the sold listings widget
    if (soldWidgetRef.current && agent?.soldwidget) {
      soldWidgetRef.current.innerHTML = agent.soldwidget;
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.charset = "UTF-8";
      script.src = soldWidgetRef.current.querySelector("script")?.src;

      script.onload = () => {
        const noResultsMessage = soldWidgetRef.current.querySelector(
          "#IDX-noResultsMessage-62383"
        );
        if (noResultsMessage && noResultsMessage.textContent.includes("No Properties Found")) {
          setShowSoldListings(false);
        } else {
          setShowSoldListings(true);
        }
      };

      document.body.appendChild(script);
    } else {
      setShowSoldListings(false);
    }
  }, [agent]);

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
      {/* About the Agent Section */}
      <div className="p-8 mb-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-8 items-start">
          {/* Left Column: Image and Contact Buttons */}
          <div className="flex flex-col items-center mt-14">
            {agent.image ? (
              <img
                src={agent.image}
                alt={`${agent.name}'s image`}
                className="rounded-lg shadow-lg max-w-full h-72 w-72 object-cover"
              />
            ) : (
              <div className="w-72 h-72 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">No Image Available</span>
              </div>
            )}
            {/* Contact Buttons */}
            <div className="flex gap-4 mt-4">
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

          {/* Right Column: About Text */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-primary mb-4 text-start">About {agent.name}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {agent.about ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            </p>
          </div>
        </div>
      </div>

      {/* Current Listings Section */}
      {showCurrentListings && (
        <div className="bg-white shadow-md rounded-lg p-8 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">Current Listings</h2>
          <div ref={currentWidgetRef} className="mt-4"></div>
        </div>
      )}

      {/* Sold Listings Section */}
      {showSoldListings && (
        <div className="bg-white shadow-md rounded-lg p-8 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">Sold Listings</h2>
          <div ref={soldWidgetRef} className="mt-4"></div>
        </div>
      )}
    </div>
  );
};

export default AgentProfile;
