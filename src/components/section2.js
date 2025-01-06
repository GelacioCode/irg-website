// import React from "react";
// import homeicon1 from "../assets/icons/home-1.png";
// import homeicon2 from "../assets/icons/home-2.png";
// import homeicon3 from "../assets/icons/home-4.png";

// const Section2 = () => {
//   const services = [
//     {
//       id: 1,
//       title: "Looking For A New Home?",
//       description:
//         "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
//       icon: homeicon1,
//       hlink: "/buying/currentlistings"
//     },
//     {
//       id: 2,
//       title: "Selling Your Home?",
//       description:
//         "Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.",
//       icon: homeicon2,
//       hlink: "/selling/homevaluation"
//     },
//     {
//       id: 3,
//       title: "Lake Resource Guide",
//       description:
//         "Explore our comprehensive guide of services for home owners on and around Candlewood Lake.",
//       icon: homeicon3,
//       hlink: "/buying/lakeinfoguides"
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       {/* About Us Section */}
//       <div className="container mx-auto mb-12 px-4">
//         <div className="bg-white rounded-lg shadow-md p-8 text-center">
//           <h2 className="text-4xl font-bold text-primary mb-4">About Us</h2>
//           <div className="text-gray-600 text-lg mb-4 leading-relaxed space-y-4 text-left">
//           {`
//             Independent Realty Group has been the premier real estate agency serving the Candlewood Lake region since 2005. Founded by Ellen Cavallo Buccitti, our firm has established itself as the leading authority in waterfront and lake community properties around Connecticut's largest lake.



// Ellen built Independent Realty Group on the foundation of personalized service and deep local expertise. Her intimate knowledge of Candlewood Lake's unique communities and waterfront properties helped countless families find their perfect lake home over nearly two decades. Under her leadership, the firm developed an unmatched understanding of the intricacies of waterfront property transactions, from dock rights to shoreline regulations.



// In 2023, Ellen's vision for Independent Realty Group entered a new chapter as her niece, Christina Cavallo, took the helm of the organization. Christina brings fresh energy while maintaining the core values and personal touch that have defined our agency since its inception. Having grown up in the Candlewood Lake area and learned the real estate business alongside her aunt, Christina offers both continuation and innovation in serving our clients.



// Our specialized focus on Candlewood Lake properties sets us apart. We understand that purchasing a lake home is about more than just real estate—it's about embracing a distinctive lifestyle. Our agents are experts not just in property values and market trends, but in the unique characteristics of each lake community, from New Fairfield to New Milford, Sherman to Brookfield.



// Whether you're searching for a year-round waterfront residence, a summer retreat, or a property within one of Candlewood's vibrant lake communities, Independent Realty Group offers the experience, market knowledge, and personal dedication to help you achieve your real estate goals. Our commitment to maintaining Ellen's legacy of excellence continues to guide us as we serve the Candlewood Lake community. Let our family help your family discover the magic of Candlewood Lake living.
//           `
//             .trim()
//             .split("\n\n")
//             .map((paragraph, index) => (
//               <p key={index}>{paragraph}</p>
//             ))}
//         </div>
//           <a
//             href="/contactus"
//             className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-primary-dark transition-colors"
//           >
//             Contact Us Now
//           </a>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-primary">
//           Our Services
//         </h2>
//       </div>

//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center"
//           >
//             <img
//               src={service.icon}
//               alt={service.title}
//               className="w-24 h-24 mb-6"
//             />
//             <h3 className="text-xl font-bold mb-4">{service.title}</h3>
//             <p className="text-gray-600 mb-6">{service.description}</p>
//             <button className="flex items-center text-primary font-semibold hover:underline">
//               Learn More <span className="ml-2">→</span>
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Section2;

import React from "react";
import homeicon1 from "../assets/icons/home-1.png";
import homeicon2 from "../assets/icons/home-2.png";
import homeicon3 from "../assets/icons/home-4.png";

const Section2 = () => {
  const services = [
    {
      id: 1,
      title: "Looking For A New Home?",
      description:
        "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
      icon: homeicon1,
      hlink: "/buying/currentlistings"
    },
    {
      id: 2,
      title: "Selling Your Home?",
      description:
        "Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.",
      icon: homeicon2,
      hlink: "/selling/homevaluation"
    },
    {
      id: 3,
      title: "Lake Resource Guide",
      description:
        "Explore our comprehensive guide of services for home owners on and around Candlewood Lake.",
      icon: homeicon3,
      hlink: "/buying/lakeinfoguides"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      {/* About Us Section */}
      <div className="container mx-auto mb-12 px-4">
        <div className="p-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4 text-left">About Independent Realty Group</h2>
          <div className="text-gray-600 text-lg mb-4 leading-relaxed space-y-4 text-left">
            {`
            Independent Realty Group has been the premier real estate agency serving the Candlewood Lake region since 2005. Founded by Ellen Cavallo Buccitti, our firm has established itself as the leading authority in waterfront and lake community properties around Connecticut's largest lake.



Ellen built Independent Realty Group on the foundation of personalized service and deep local expertise. Her intimate knowledge of Candlewood Lake's unique communities and waterfront properties helped countless families find their perfect lake home over nearly two decades. Under her leadership, the firm developed an unmatched understanding of the intricacies of waterfront property transactions, from dock rights to shoreline regulations.



In 2023, Ellen's vision for Independent Realty Group entered a new chapter as her niece, Christina Cavallo, took the helm of the organization. Christina brings fresh energy while maintaining the core values and personal touch that have defined our agency since its inception. Having grown up in the Candlewood Lake area and learned the real estate business alongside her aunt, Christina offers both continuation and innovation in serving our clients.



Our specialized focus on Candlewood Lake properties sets us apart. We understand that purchasing a lake home is about more than just real estate—it's about embracing a distinctive lifestyle. Our agents are experts not just in property values and market trends, but in the unique characteristics of each lake community, from New Fairfield to New Milford, Sherman to Brookfield.



Whether you're searching for a year-round waterfront residence, a summer retreat, or a property within one of Candlewood's vibrant lake communities, Independent Realty Group offers the experience, market knowledge, and personal dedication to help you achieve your real estate goals. Our commitment to maintaining Ellen's legacy of excellence continues to guide us as we serve the Candlewood Lake community. Let our family help your family discover the magic of Candlewood Lake living.
          `
              .trim()
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
          <a
            href="https://candlewoodlakerealestate.idxbroker.com/idx/contact"
            className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-primary-dark transition-colors"
          >
            Contact Us Now
          </a>
        </div>
      </div>

      {/* Services Section */}
      {/* <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">
          Our Services
        </h2>
      </div> */}

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
            <a
              href={service.hlink}
              className="flex items-center text-primary font-semibold hover:underline"
            >
              Learn More <span className="ml-2">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;

