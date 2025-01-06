import React from "react";

function PreparingYourHomeForSale() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header Section */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto mb-12">
        <h1 className="text-4xl font-bold text-primary mb-6">Preparing Your Home for Sale</h1>
        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
          Make your home stand out in the market. Follow these tips to ensure your property is ready to impress potential buyers and maximize its value.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          From curb appeal to staging your rooms, we'll guide you step-by-step on how to present your home in its best light.
        </p>
      </div>

      {/* Tips Section */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-6">Essential Tips to Prepare Your Home</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tip Cards */}
          {[
            { title: "Enhance Curb Appeal", description: "Make a great first impression by cleaning the yard, painting the front door, and adding plants." },
            { title: "Declutter and Organize", description: "Remove excess items and organize your space to make rooms appear larger and cleaner." },
            { title: "Deep Clean Everything", description: "Clean every nook and cranny, including windows, floors, and fixtures to sparkle for showings." },
            { title: "Neutralize Colors", description: "Paint walls with neutral colors to appeal to a wider range of buyers." },
            { title: "Stage Your Home", description: "Arrange furniture and decor to highlight the best features of your home." },
            { title: "Fix Repairs", description: "Address minor repairs like leaky faucets, chipped paint, or broken tiles to avoid distractions." },
          ].map((tip, index) => (
            <div key={index} className="border rounded-lg shadow-sm p-6 bg-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-12">
          <button className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-teal-700 transition">
            Get Started with Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreparingYourHomeForSale;
