import React from "react";
import homeicon1 from "../assets/icons/home-1.png";
import homeicon2 from "../assets/icons/home-2.png";
import homeicon3 from "../assets/icons/home-4.png";

const Section2 = () => {
  const services = [
    {
      id: 1,
      title: "Buy A New Home",
      description:
        "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
      icon: homeicon1, // Use the imported module directly
    },
    {
      id: 2,
      title: "Sell A Home",
      description:
        "Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.",
      icon: homeicon2, // Use the imported module directly
    },
    {
      id: 3,
      title: "Lake Info Guide",
      description:
        "Explore comprehensive information about lakes, including attractions, activities, and nearby accommodations to enhance your adventure.",
      icon: homeicon3, // Use the imported module directly
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h3 className="text-primary text-lg font-semibold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl font-bold text-gray-800">
          Welcome to the IRG WEBSITE
        </h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-24 h-24 mb-6"
            />
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <button className="flex items-center text-primary font-semibold hover:underline">
              Learn More <span className="ml-2">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
