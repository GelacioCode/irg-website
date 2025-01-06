// import React from "react";
// import Christina from "../assets/images/christina.jpg"; // Import the image
// import placeholder300 from "../assets/images/300.png";

// const Section3 = () => {
//   const properties = [
//     {
//       id: 1,
//       title: "Casa Lomas De Machali Machas",
//       address: "145 Brooklyn Ave, California, New York",
//       beds: 2,
//       baths: 1,
//       sqft: 1995,
//       price: "$5415.00",
//       image: placeholder300, // Replace with actual property image URL
//       author: "Christina Cavallo",
//       authorImage: Christina, // Use the imported Christina image
//     },
//     {
//       id: 2,
//       title: "Casa Lomas De Machali Machas",
//       address: "145 Brooklyn Ave, California, New York",
//       beds: 2,
//       baths: 3,
//       sqft: 1447,
//       price: "$4498.00",
//       image: placeholder300,
//       author: "Christina Cavallo",
//       authorImage: Christina, // Use the imported Christina image
//     },
//     {
//       id: 3,
//       title: "Casa Lomas De Machali Machas",
//       address: "145 Brooklyn Ave, California, New York",
//       beds: 5,
//       baths: 3,
//       sqft: 1987,
//       price: "$5007.00",
//       image: placeholder300,
//       author: "Christina Cavallo",
//       authorImage: Christina, // Use the imported Christina image
//     },
//     {
//       id: 4,
//       title: "Casa Lomas De Machali Machas",
//       address: "145 Brooklyn Ave, California, New York",
//       beds: 4,
//       baths: 4,
//       sqft: 1629,
//       price: "$5329.00",
//       image: placeholder300,
//       author: "Christina Cavallo",
//       authorImage: Christina, // Use the imported Christina image
//     },
//     {
//       id: 5,
//       title: "Casa Lomas De Machali Machas",
//       address: "145 Brooklyn Ave, California, New York",
//       beds: 5,
//       baths: 3,
//       sqft: 1799,
//       price: "$3882.00",
//       image: placeholder300,
//       author: "Christina Cavallo",
//       authorImage: Christina, // Use the imported Christina image
//     },
//     {
//       id: 6,
//       title: "Casa Lomas De Machali Machas",
//       address: "145 Brooklyn Ave, California, New York",
//       beds: 1,
//       baths: 1,
//       sqft: 1743,
//       price: "$2895.00",
//       image: placeholder300,
//       author: "Christina Cavallo",
//       authorImage: Christina, // Use the imported Christina image
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       {/* Section Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-primary">
//           Featured Properties
//         </h2>
//       </div>

//       {/* Property Cards */}
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
//         {properties.map((property) => (
//           <div
//             key={property.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden"
//           >
//             <div className="relative">
//               <img
//                 src={property.image}
//                 alt={property.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
//                 Featured
//               </div>
//               <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
//                 For Sale
//               </div>
//             </div>
//             <div className="p-4">
//               <p className="text-gray-600 text-sm flex items-center mb-2">
//                 <span className="material-icons text-gray-500 mr-1">place</span>
//                 {property.address}
//               </p>
//               <h3 className="text-lg font-bold mb-2">{property.title}</h3>
//               <div className="text-gray-600 text-sm flex items-center justify-between mb-4">
//                 <span>
//                   Beds: {property.beds} | Baths: {property.baths} | Sqft:{" "}
//                   {property.sqft}
//                 </span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <img
//                     src={property.authorImage}
//                     alt={property.author}
//                     className="w-8 h-8 rounded-full mr-2"
//                   />
//                   <span className="text-gray-700 text-sm">
//                     {property.author}
//                   </span>
//                 </div>
//                 <div className="text-primary font-bold">{property.price}</div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View All Button */}
//       <div className="text-center mt-12">
//         <button className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-blue-600">
//           View All Properties →
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Section3;


import React, { useEffect, useRef } from "react";

const Section3 = () => {
  const scriptContainerRef = useRef(null);

  useEffect(() => {
    if (scriptContainerRef.current) {
      const script = document.createElement("script");
      script.charset = "UTF-8";
      script.type = "text/javascript";
      script.id = "idxwidgetsrc-48166";
      script.src =
        "//candlewoodlakerealestate.idxbroker.com/idx/widgets/48166";
      scriptContainerRef.current.appendChild(script);

      return () => {
        // Clean up the script when the component unmounts
        if (scriptContainerRef.current) {
          const existingScript = document.getElementById("idxwidgetsrc-48166");
          if (existingScript) {
            scriptContainerRef.current.removeChild(existingScript);
          }
        }
      };
    }
  }, []);
      

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto mb-12 px-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary">
              Featured Properties
            </h2>
          </div>

          {/* Script Wrapper */}
          <div
            className="container mx-auto"
            ref={scriptContainerRef}
            id="script-container"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Section3;