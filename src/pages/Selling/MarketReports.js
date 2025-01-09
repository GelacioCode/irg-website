import React, { useEffect, useRef } from "react";

const MarketReports = () => {
  const widgetRefs = {
    73948: useRef(null),
    73947: useRef(null),
    73946: useRef(null),
    73945: useRef(null),
    73944: useRef(null),
  };

  useEffect(() => {
    Object.keys(widgetRefs).forEach((widgetId) => {
      const ref = widgetRefs[widgetId];
      if (ref.current) {
        const script = document.createElement("script");
        script.charset = "UTF-8";
        script.type = "text/javascript";
        script.id = `idxwidgetsrc-${widgetId}`;
        script.src = `//search.christinacavallo.realtor/idx/widgets/${widgetId}`;
        ref.current.appendChild(script);

        return () => {
          const existingScript = document.getElementById(`idxwidgetsrc-${widgetId}`);
          if (existingScript && ref.current) {
            ref.current.removeChild(existingScript);
          }
        };
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header Section */}
      <div className="max-w-6xl p-8 mx-auto mb-12">
        <h1 className="text-4xl font-bold text-primary mb-6">Market Reports</h1>
        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
          Stay ahead of the market with the latest insights and trends in your area. Our comprehensive market reports provide you with the data you need to make informed real estate decisions.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Independent Realty Group delivers detailed analysis, including property values, trends, and market conditions, tailored to your local area.
        </p>
      </div>

      {/* Widgets Section */}
      {Object.keys(widgetRefs).map((widgetId) => (
        <section key={widgetId} className="py-2 bg-gray-50">
          <div className="container mx-auto mb-2 px-4">
            <div className="max-w-6xl p-2 mx-auto">
              <div
                id={`widget-container-${widgetId}`}
                className="w-full max-w-full overflow-hidden"
                style={{ minHeight: "300px" }}
                ref={widgetRefs[widgetId]}
              ></div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MarketReports;
