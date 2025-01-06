import React from "react";
import Tammy from "../assets/images/tammy.gif";

const Section5 = () => {
  const testimonials = [
    {
      id: 1,
      text: "My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.",
      name: "Courtney Henry",
      role: "CEO Themesflat",
      image: Tammy, // Replace with actual image URL
      rating: 5,
    },
    {
      id: 2,
      text: "My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.",
      name: "Courtney Henry",
      role: "CEO Themesflat",
      image: Tammy, // Replace with actual image URL
      rating: 5,
    },
    {
      id: 3,
      text: "My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.",
      name: "Esther Howard",
      role: "CEO Themesflat",
      image: Tammy, // Replace with actual image URL
      rating: 5,
    },
  ];

  const companies = [
    "https://via.placeholder.com/100", // Replace with actual company logos
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
  ];

  return (
    <section className="py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">
          Our Testimonials
        </h2>
        <p className="text-gray-600 mt-4">
          Our seasoned team excels in real estate with years of successful
          market navigation, offering informed decisions and optimal results.
        </p>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg shadow-md p-6 text-center"
          >
            <p className="text-blue-500 text-4xl font-bold mb-4">“</p>
            <p className="text-gray-600 mb-6">{testimonial.text}</p>
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mb-4"
              />
              <h4 className="text-lg font-bold text-gray-800">
                {testimonial.name}
              </h4>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
              <div className="flex items-center mt-2">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <span key={index} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
