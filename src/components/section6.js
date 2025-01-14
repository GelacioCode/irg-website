import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Section6 = ({ agents = [] }) => {
  const location = useLocation(); // Get current route
  const navigate = useNavigate(); // Navigate to a new route

  // Create a local copy of agents
  const localAgents = useMemo(() => [...agents], [agents]);

  return (
    <section className="py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-primary text-lg font-semibold uppercase">
          Our Team
        </h3>
        <h2 className="text-4xl font-bold text-gray-800">Meet Our Agents</h2>
      </div>

      {/* Agents */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {localAgents.map((agent) => (
          <div
            key={agent.id}
            className="bg-white rounded-lg shadow-md text-center p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-full h-64 mb-4 overflow-hidden">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              {agent.name}
            </h4>
            <p className="text-gray-500 text-sm mb-4">{agent.role}</p>
            <div className="flex justify-center space-x-4">
              <a
                href={`mailto:${agent.contact.email}`}
                className="bg-primary text-white px-4 py-2 rounded-md shadow-lg shadow-gray-800/40 hover:shadow-none transition-all"
              >
                Email
              </a>
              <a
                href={`tel:${agent.contact.phone}`}
                className="bg-primary text-white px-4 py-2 rounded-md shadow-lg shadow-gray-800/40 hover:shadow-none transition-all"
              >
                Call
              </a>
              <button
                onClick={() =>
                  navigate(`/agents/${agent.id}`, { state: { agent } })
                }
                className="bg-primary text-white px-4 py-2 rounded-md shadow-lg shadow-gray-800/40 hover:shadow-none transition-all"
              >
                Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {location.pathname !== "/agents" && (
        <div className="text-center mt-8">
          <a
            href="/agents"
            className="bg-primary text-white px-6 py-3 rounded-md font-semibold shadow-md hover:shadow-none transition-all"
          >
            View More
          </a>
        </div>
      )}
    </section>
  );
};

export default Section6;
