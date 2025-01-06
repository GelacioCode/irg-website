import React, { useState, useEffect } from "react";
import houseImage1 from "../assets/images/povLake.jpg";
import houseImage2 from "../assets/images/36.jpg";
import houseImage3 from "../assets/images/springHeader.jpg";

const Section1 = () => {
  const phrasesAndImages = [
    { title: "Connecticut's Crown Jewel", subtitle: "Experience the Majestic Beauty of Candlewood Lake, Where 5,420 Acres of Pristine Waters Meet the Rolling Hills of Western Connecticut" , image: houseImage1 },
    { title: "Local Expertise That Runs Deep", subtitle: "Navigate Your Way Through Candlewood Lake's 64 Distinct Communities with a Team That Knows Every Cove, Beach, and Neighborhood Intimately" , image: houseImage2 },
    { title: "Your Dream Home Awaits", subtitle: "Discover Extraordinary Waterfront Properties Where Modern Luxury Meets Lakeside Living, Crafted Through Our Legacy of Excellence Since 2005" , image: houseImage3 }
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
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-white text-center px-4 md:text-left md:items-start md:pr-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            
            <span className={`transition-opacity duration-500 ${fadeClass}`}>
              {phrasesAndImages[currentIndex].title}
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
              {phrasesAndImages[currentIndex].subtitle}
          </p>
        </div>


        {/* Right Content */}
        <div className="hidden md:flex w-1/2 flex-col items-center justify-center opacity-50">
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
