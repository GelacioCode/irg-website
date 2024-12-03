import React, { useState, useEffect } from "react";
import houseImage1 from "../assets/images/house1.jpg";
import houseImage2 from "../assets/images/house2.jpg";
import houseImage3 from "../assets/images/house3.jpg";
import houseImage4 from "../assets/images/house4.jpg";
import houseImage5 from "../assets/images/house5.jpg";

const Section1 = () => {
  const phrasesAndImages = [
    { phrase: "Safe House", image: houseImage1 },
    { phrase: "Cozy Home", image: houseImage2 },
    { phrase: "Warm Abode", image: houseImage3 },
    { phrase: "Peaceful Retreat", image: houseImage4 },
    { phrase: "Serene Haven", image: houseImage5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade-out animation
      setFadeClass("fade-out");

      setTimeout(() => {
        // Update index and restart fade-in animation
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrasesAndImages.length);
        setFadeClass("fade-in");
      }, 500); // Match fade-out duration
    }, 5000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`relative bg-cover bg-center bg-no-repeat h-screen ${fadeClass}`}
      style={{ backgroundImage: `url(${phrasesAndImages[currentIndex].image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex px-8 md:px-20">
        {/* Left Content */}
        <div className="w-1/2 flex flex-col justify-center text-white text-left pr-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Indulge in Your{" "}
            <span className={`transition-opacity duration-500 ${fadeClass}`}>
              {phrasesAndImages[currentIndex].phrase}
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover your private oasis at Hamelengo, where every corner, from
            the spacious garden to the relaxing pool, is crafted for your
            comfort and enjoyment.
          </p>

          {/* Categories 
          <div className="flex space-x-4 mb-8">
            <button className="px-4 py-2 bg-primary text-white rounded-full shadow hover:bg-blue-600">
              Houses
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-full shadow hover:bg-blue-600">
              Villa
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-full shadow hover:bg-blue-600">
              Office
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-full shadow hover:bg-blue-600">
              Apartments
            </button>
          </div>
          */}
        </div>

        {/* Right Content */}
        <div className="w-1/2 flex flex-col items-center justify-center opacity-50">
          {phrasesAndImages.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-20 h-28 rounded-md overflow-hidden shadow-md border-2 border-white hover:scale-105 transition-transform duration-200 mb-4 ${
                currentIndex === index ? "ring-4 ring-blue-500" : ""
              }`}
            >
              <img
                src={item.image}
                alt={`Background ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
