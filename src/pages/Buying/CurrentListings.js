// import React from "react";

// function CurrentListings() {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       {/* First Section - Current Listings Header */}
//       <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto mb-12">
//         <h1 className="text-4xl font-bold text-primary mb-6">Current Listings</h1>
//         <p className="text-gray-600 text-lg mb-4 leading-relaxed">
//           Explore our current listings to find your perfect home. Independent Realty Group specializes in matching you with properties that meet your needs, whether you are buying, selling, or renting.
//         </p>
//         <p className="text-gray-600 text-lg leading-relaxed">
//           Our listings are updated frequently to provide you with the latest opportunities in the market. Let's help you find your next property.
//         </p>
//       </div>

//       {/* Second Section - Property Cards */}
//       <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto">
//         <h2 className="text-3xl font-bold text-primary mb-6">Available Properties</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Sample Property Cards */}
//           {[...Array(6)].map((_, index) => (
//             <div key={index} className="border rounded-lg shadow-sm p-4">
//               <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
//               <h3 className="text-xl font-semibold text-gray-800">Property Title {index + 1}</h3>
//               <p className="text-gray-500 text-sm">Location: Sample Location</p>
//               <p className="text-gray-500 text-sm">Price: $XXX,XXX</p>
//             </div>
//           ))}
//         </div>

//         {/* View More Button */}
//         <div className="flex justify-center mt-8">
//           <button className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-teal-700 transition">
//             View More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CurrentListings;


import React, { useEffect, useRef } from "react";

const CurrentListings = () => {
  const scriptContainerRef = useRef(null);

  useEffect(() => {
    if (scriptContainerRef.current) {
      const script = document.createElement("script");
      script.charset = "UTF-8";
      script.type = "text/javascript";
      script.id = "idxwidgetsrc-78913";
      script.src =
        "//candlewoodlakerealestate.idxbroker.com/idx/widgets/78913";
      scriptContainerRef.current.appendChild(script);

      return () => {
        // Clean up the script when the component unmounts
        const existingScript = document.getElementById("idxwidgetsrc-78913");
        if (existingScript && scriptContainerRef.current) {
          scriptContainerRef.current.removeChild(existingScript);
        }
      };
    }
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto mb-12 px-4">
        {/* First Section - Header */}
        <div className="max-w-6xl  p-8 mx-auto mb-12">
          <h1 className="text-4xl font-bold text-primary mb-6">Independent Realty Group Listings</h1>
          <p className="text-gray-600 text-lg mb-4 leading-relaxed">
            Explore our current listings to find your perfect home. Independent Realty Group specializes in matching you with properties that meet your needs, whether you are buying, selling, or renting.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our listings are updated frequently to provide you with the latest opportunities in the market. Let's help you find your next property.
          </p>
        </div>

        {/* Second Section - Property Cards */}
        <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">Available Properties</h2>
          {/* Widget container where the script will be inserted */}
          <div
            id="widget-container"
            className="w-full max-w-full overflow-hidden"
            style={{ minHeight: "300px" }}
            ref={scriptContainerRef}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CurrentListings;

