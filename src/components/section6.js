import React from "react";
import Christina from "../assets/images/christina.jpg";
import Izzy from "../assets/images/izzy.jpg";
import Sadie from "../assets/images/sadie.jpg";
import Tammy from "../assets/images/tammy.gif";

const Section6 = () => {
  const agents = [
    {
      id: 1,
      name: "Christina Cavallo",
      role: "Owner/Broker",
      image: Christina,
      contact: {
        email: "#", // Replace with actual email link
        phone: "#", // Replace with actual phone link
        profile: "#", // Replace with actual profile link
      },
    },
    {
      id: 2,
      name: "Isabelle Cavallo",
      role: "Realtor",
      image: Izzy,
      contact: {
        email: "#",
        phone: "#",
        profile: "#",
      },
    },
    {
      id: 3,
      name: "Sadie Virtudes",
      role: "Realtor",
      image: Sadie,
      contact: {
        email: "#",
        phone: "#",
        profile: "#",
      },
    },
    {
      id: 4,
      name: "Tammi Ligouri",
      role: "Realtor",
      image: Tammy,
      contact: {
        email: "#",
        phone: "#",
        profile: "#",
      },
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-primary text-lg font-semibold uppercase">
          Our Teams
        </h3>
        <h2 className="text-4xl font-bold text-gray-800">Meet Our Agents</h2>
      </div>

      {/* Agents */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {agents.map((agent) => (
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
                href={agent.contact.email}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Email
              </a>
              <a
                href={agent.contact.phone}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Call
              </a>
              <a
                href={agent.contact.profile}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <a
          href="/agents"
          className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
        >
          View More
        </a>
      </div>
    </section>
  );
};

export default Section6;
