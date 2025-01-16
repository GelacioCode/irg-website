import React, { useEffect, useRef } from "react";
import waterfront from "../assets/images/hdwaterfronthomes.jpg";


function WaterfrontHomes() {
  const scriptContainerRef = useRef(null);
  
    useEffect(() => {
      if (scriptContainerRef.current) {
        const script = document.createElement("script");
        script.charset = "UTF-8";
        script.type = "text/javascript";
        script.id = "idxwidgetsrc-79923";
        script.src =
          "//candlewoodlakerealestate.idxbroker.com/idx/widgets/79923";
        scriptContainerRef.current.appendChild(script);
  
        return () => {
          // Clean up the script when the component unmounts
          const existingScript = document.getElementById("idxwidgetsrc-79923");
          if (existingScript && scriptContainerRef.current) {
            scriptContainerRef.current.removeChild(existingScript);
          }
        };
      }
    }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-2">
      
      {/* Header Section */}
      <div className="max-w-6xl p-2 mx-auto">
        {/* Image Above Heading */}
        <img
          src= {waterfront} // Update with the correct path
          alt="Waterfront"
          className="w-full h-200 object-contain mb-6" // Adjust height as needed
        />
        <h1 className="text-center text-4xl font-bold text-primary italic mb-6">
          Waterfront Homes at Candlewood Lake
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Discover the finest waterfront homes in Connecticut's most prestigious real estate market. Whether you're looking for a serene retreat or a year-round residence, Candlewood Lake offers unparalleled opportunities to embrace lakefront living at its best.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-6xl p-8 mx-auto mb-12 space-y-8">
        <div>
          <h3 className="text-3xl font-bold text-primary mb-4">Discover Your Perfect Shoreline Sanctuary</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to Connecticut's most prestigious waterfront real estate market. Candlewood Lake offers an unparalleled collection of waterfront homes, each providing a unique opportunity to embrace lakefront living at its finest. From historic cottages with classic charm to contemporary luxury estates, these properties represent the pinnacle of lakeside living in New England.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-primary mb-4">A Legacy of Waterfront Excellence</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            As Candlewood Lake's premier waterfront specialists since 2005, Independent Realty Group brings unmatched expertise to your home search. We understand that purchasing a lakefront property involves unique considerations – from dock rights and shoreline regulations to water depth and sunrise views. Our specialized knowledge ensures you make an informed decision about your investment.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-primary mb-4">Featured Waterfront Listings</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Below, explore our current collection of waterfront properties around Candlewood Lake. Each home has been carefully evaluated by our team of lake property experts. We provide detailed information about crucial waterfront features, including:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Shoreline characteristics and water depth</li>
            <li>Dock specifications and boat slip availability</li>
            <li>Lakefront footage and property boundaries</li>
            <li>Sunset/sunrise exposure</li>
            <li>Beach rights and access</li>
            <li>Year-round accessibility</li>
            <li>Surrounding community amenities</li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-primary mb-4">Understanding Waterfront Value</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Candlewood Lake waterfront properties represent more than just real estate – they're a gateway to an exceptional lifestyle. Whether you're seeking a year-round residence or a summer retreat, these homes offer:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Direct access to 5,420 acres of recreational waters</li>
            <li>Premium investment potential in Connecticut's largest lake market</li>
            <li>Membership in an exclusive waterfront community</li>
            <li>Year-round activities from summer boating to winter ice fishing</li>
            <li>Easy access to New York City and major New England destinations</li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-primary mb-4">Schedule a Waterfront Tour</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Experience these exceptional properties firsthand. Our team specializes in comprehensive waterfront home tours that go beyond standard showings. We'll help you evaluate each property's unique waterfront features and understand the specific advantages of different lake locations.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-6xl p-8 mx-auto text-center">
        <h4 className="text-2xl font-bold italic text-gray-800 mb-4">
          Let Us Guide You to Your Waterfront Dream Home
        </h4>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Contact Independent Realty Group today to begin your journey to waterfront living. Let our family's legacy of lake expertise guide you home.
        </p>
        <a
          href="https://candlewoodlakerealestate.idxbroker.com/i/candlewood-lake-waterfront"
          className="bg-primary text-white px-4 py-2 rounded-md shadow-lg shadow-gray-800/40 hover:shadow-none transition-all"
        >
          Explore All Candlewood Lake Homes
        </a>
      </div>

      {/* Widget Section */}
      <div className="max-w-6xl p-8 mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-6">Waterfront Homes</h2>
        <div
            id="widget-container"
            className="w-full max-w-full overflow-hidden"
            style={{ minHeight: "300px" }}
            ref={scriptContainerRef}
          ></div>
      </div>
    </div>
  );
}

export default WaterfrontHomes;
