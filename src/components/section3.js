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
        const existingScript = document.getElementById("idxwidgetsrc-48166");
        if (existingScript && scriptContainerRef.current) {
          scriptContainerRef.current.removeChild(existingScript);
        }
      };
    }
  }, []);

  return (
    <section className="py-4 bg-gray-50">
      <div className="container mx-auto mb-12 px-4">
        {/* Section Header */}
        <div className="max-w-8xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">
            Independent Realty Group Listings
          </h2>

          {/* Widget Container */}
          <div
            className="w-full max-w-full overflow-hidden"
            style={{ minHeight: "300px" }}
            ref={scriptContainerRef}
            id="script-container"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
