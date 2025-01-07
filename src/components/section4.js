// import React, { useState } from "react";
// import Christina from "../assets/images/christina.jpg";
// import placeholder500 from "../assets/images/500.png";
// import placeholder300 from "../assets/images/300.png";



// const Section4 = () => {
//   const locations = [
//     { id: 1, name: "Arrowhead Point", properties: 16, image: placeholder300 },
//     { id: 2, name: "Candlewood Acres", properties: 21, image: placeholder300 },
//     { id: 3, name: "Candlewood Birches", properties: 51, image: placeholder300 },
//     { id: 4, name: "Candlewood Lake Club", properties: 32, image: placeholder300 },
//     { id: 5, name: "Candlewood Orchard", properties: 16, image: placeholder300 },
//     { id: 6, name: "Candlewood Shores", properties: 18, image: placeholder300 },
//     { id: 7, name: "Hickory Hills", properties: 9, image: placeholder300 },
//     { id: 8, name: "Aqua Vista", properties: 6, image: placeholder300 },
//     { id: 9, name: "Beachwood Grove", properties: 44, image: placeholder300 },
//     { id: 10, name: "Candlewood Vista", properties: 21, image: placeholder300 },
//     { id: 11, name: "Cedar Heights", properties: 33, image: placeholder300 },
//     { id: 12, name: "Cedar Terrace", properties: 4, image: placeholder300 },
//   ];

//   const [visibleLocations, setVisibleLocations] = useState(locations.slice(0, 6));
//   const [showMore, setShowMore] = useState(false);

//   const toggleLocations = () => {
//     if (showMore) {
//       setVisibleLocations(locations.slice(0, 6)); // Show the first 6
//     } else {
//       setVisibleLocations(locations); // Show all 12
//     }
//     setShowMore(!showMore);
//   };

//   const featuredProperty = {
//     title: "Rancho Vista Verde, Santa Barbara",
//     description: "Rancho Vista Verde, Santa Barbara",
//     beds: 3,
//     baths: 3,
//     sqft: 1813,
//     address: "145 Brooklyn Ave, California, New York",
//     price: "$5,481/month",
//     image: placeholder500,
//     agent: {
//       name: "Christina Cavallo",
//       image: Christina,
//     },
//   };

//   return (
//     <section className="py-16 bg-gray-50">
//       {/* Locations Section */}
//       <div className="container mx-auto px-4 mb-16">
//         <h2 className="text-center text-4xl font-bold text-primary mb-12">
//           Our Location For You
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
//           {visibleLocations.map((location) => (
//             <div
//               key={location.id}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//             >
//               <img
//                 src={location.image}
//                 alt={location.name}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-4 flex justify-between items-center">
//                 <div>
//                   <p className="text-sm text-gray-500">{location.properties} Property</p>
//                   <h3 className="text-lg font-bold text-gray-800">{location.name}</h3>
//                 </div>
//                 <button className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center">
//                   →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-8">
//           <button
//             onClick={toggleLocations}
//             className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-blue-600"
//           >
//             {showMore ? "View Less" : "View More"}
//           </button>
//         </div>
//       </div>

//       {/* Featured Property Section */}
//       <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
//         {/* Property Image */}
//         <div className="w-full lg:w-1/2">
//           <img
//             src={featuredProperty.image}
//             alt={featuredProperty.title}
//             className="w-full h-full rounded-lg object-cover"
//           />
//         </div>

//         {/* Property Details */}
//         <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-6">
//           <h4 className="text-primary text-lg font-semibold mb-2">
//             Top Properties
//           </h4>
//           <h3 className="text-3xl font-bold text-gray-800 mb-4">
//             {featuredProperty.title}
//           </h3>
//           <div className="flex items-center space-x-4 mb-4">
//             <span className="bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
//               Featured
//             </span>
//             <span className="bg-gray-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
//               For Sale
//             </span>
//           </div>
//           <p className="text-gray-600 mb-4">{featuredProperty.description}</p>
//           <div className="flex items-center text-gray-600 mb-4">
//             <span className="mr-6">
//               Beds: {featuredProperty.beds} | Baths: {featuredProperty.baths} | Sqft:{" "}
//               {featuredProperty.sqft}
//             </span>
//           </div>
//           <p className="text-gray-600 mb-4">{featuredProperty.address}</p>
//           <div className="flex items-center mb-6">
//             <img
//               src={featuredProperty.agent.image}
//               alt={featuredProperty.agent.name}
//               className="w-10 h-10 rounded-full mr-4"
//             />
//             <span className="text-gray-800 font-semibold">
//               Agent: {featuredProperty.agent.name}
//             </span>
//           </div>
//           <div className="flex items-center justify-between">
//             <p className="text-2xl font-bold text-primary">
//               {featuredProperty.price}
//             </p>
//             <div className="flex space-x-4">
//               <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
//                 ☰
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Section4;


import React, { useEffect, useRef } from "react";

const Section4 = () => {
  const scriptContainerRef = useRef(null);

  useEffect(() => {
    if (scriptContainerRef.current) {
      // Check if the script already exists
      const existingScript = document.getElementById("idxwidgetsrc-62376");
      if (!existingScript) {
        const script = document.createElement("script");
        script.charset = "UTF-8";
        script.type = "text/javascript";
        script.id = "idxwidgetsrc-62376";
        script.src =
          "//candlewoodlakerealestate.idxbroker.com/idx/quicksearchjs.php?widgetid=62376";
        scriptContainerRef.current.appendChild(script);
      }
    }

    return () => {
      // Clean up the script when the component unmounts
      const existingScript = document.getElementById("idxwidgetsrc-62376");
      if (existingScript && scriptContainerRef.current) {
        scriptContainerRef.current.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto mb-12 px-4">
        <div className="p-8 text-center">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary text-left mb-4">
            Ready to find your Perfect Home?
            </h2>
            <div className="text-gray-600 text-lg leading-relaxed space-y-4 text-left">
  <p>
    Start your home search here, or unlock a more personalized experience with our{" "}
    <a href="https://candlewoodlakerealestate.idxbroker.com/idx/search/advanced" className="text-primary underline hover:text-primary-dark">
      advanced search
    </a>
    . From specific neighborhoods to must-have features, our advanced tools help you discover properties that perfectly match your vision of home.
  </p>
  <p>
    Whether you're just beginning your search or know exactly what you're looking for, we've got you covered. Use our quick search below, or take advantage of our{" "}
    <a href="https://candlewoodlakerealestate.idxbroker.com/idx/search/advanced" className="text-primary underline hover:text-primary-dark">
      advanced search
    </a>
    {" "}to filter through amenities, neighborhoods, and property features to find homes that truly fit your lifestyle.
  </p>
</div>

          </div>

          {/* Script Wrapper */}
          <div
            className="container mx-auto my-2"
            ref={scriptContainerRef}
            id="script-container"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
