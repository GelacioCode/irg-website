import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { agents } from "./Agents";

const AgentProfile = () => {
  const location = useLocation();
  const { id } = useParams();
  const [agent, setAgent] = useState(location.state?.agent || null);

  const currentWidgetRef = useRef(null);
  const soldWidgetRef = useRef(null);

  const [showCurrentListings, setShowCurrentListings] = useState(true);
  const [showSoldListings, setShowSoldListings] = useState(true);

  // Fetch agent details if not passed via state
  useEffect(() => {
    if (!agent && id) {
      const fetchedAgent = agents.find((agent) => agent.id === parseInt(id, 10));
      if (fetchedAgent) setAgent(fetchedAgent);
    }
  }, [agent, id]);

  // Function to handle widget injection and observe changes
  const observeWidget = (ref, widgetId, setShowFunction) => {
    if (!ref.current || !widgetId) return;

    // Clear existing content and inject the script
    ref.current.innerHTML = "";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.charset = "UTF-8";
    script.src = `//candlewoodlakerealestate.idxbroker.com/idx/customshowcasejs.php?widgetid=${widgetId}`;

    // Create a MutationObserver to detect changes in the DOM
    const observer = new MutationObserver(() => {
      const noResultsMessage = ref.current.querySelector(
        `#IDX-noResultsMessage-${widgetId}`
      );
      if (noResultsMessage && noResultsMessage.textContent.includes("No Properties Found")) {
        setShowFunction(false); // Hide the widget if no properties are found
        observer.disconnect(); // Stop observing once the message is found
      } else {
        setShowFunction(true); // Show the widget
      }
    });

    // Start observing changes in the widget container
    observer.observe(ref.current, { childList: true, subtree: true });

    // Append the script to the widget container
    ref.current.appendChild(script);

    // Clean up observer when the component unmounts
    return () => observer.disconnect();
  };

  useEffect(() => {
    if (agent) {
      observeWidget(currentWidgetRef, agent.currentwidget, setShowCurrentListings);
      observeWidget(soldWidgetRef, agent.soldwidget, setShowSoldListings);
    }
  }, [agent]);

  // Render Agent Not Found
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
      <div className="p-8 mb-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-8 items-start">
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
            <div className="flex gap-4 mt-6">
              <a
                href={`mailto:${agent.contact.email}`}
                className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 hover:shadow-lg transition-all"
              >
                Email
              </a>
              <a
                href={`tel:${agent.contact.phone}`}
                className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 hover:shadow-lg transition-all"
              >
                Call
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-primary mb-4 text-start">
              About {agent.name}
            </h2>
            <p
              className="text-gray-600 text-lg leading-relaxed"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {agent.about || "No description available for this agent."}
            </p>
        </div>

        </div>
      </div>

      {showCurrentListings && (
        <div className="bg-white shadow-md rounded-lg p-8 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">Current Listings</h2>
          <div ref={currentWidgetRef} className="mt-4"></div>
        </div>
      )}

      {showSoldListings && (
        <div className="bg-white shadow-md rounded-lg p-8 max-w-5xl mx-auto mt-6">
          <h2 className="text-3xl font-bold text-primary mb-4">Sold Listings</h2>
          <div ref={soldWidgetRef} className="mt-4"></div>
        </div>
      )}
    </div>
  );
};

export default AgentProfile;
