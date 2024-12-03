import React from "react";
import placeholder300 from "../assets/images/300.png";


const Section7 = () => {
  const blogPosts = [
    {
      id: 1,
      date: "January 28, 2024",
      category: "Furniture",
      author: "Jerome Bell",
      title: "Building Gains Into Housing Stocks And How To Trade The Sector",
      description:
        "The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances...",
      image: placeholder300, // Replace with actual image URL
    },
    {
      id: 2,
      date: "January 28, 2024",
      category: "Furniture",
      author: "Jerome Bell",
      title: "Building Gains Into Housing Stocks And How To Trade The Sector",
      description:
        "The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances...",
      image: placeholder300, // Replace with actual image URL
    },
    {
      id: 3,
      date: "January 28, 2024",
      category: "Furniture",
      author: "Jerome Bell",
      title: "Building Gains Into Housing Stocks And How To Trade The Sector",
      description:
        "The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances...",
      image: placeholder300, // Replace with actual image URL
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-primary text-lg font-semibold uppercase">
          Latest News
        </h3>
        <h2 className="text-4xl font-bold text-gray-800">From Our Blog</h2>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                {post.date}
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">
                {post.author} <span className="mx-1">|</span> {post.category}
              </p>
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section7;
