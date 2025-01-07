import React, { useEffect } from "react";

function RecentlySold() {
  useEffect(() => {
    // Dynamically load the widget script
    const widgetId = "idxwidgetsrc-79915";

    // Check if the script already exists to avoid duplication
    if (!document.getElementById(widgetId)) {
      const script = document.createElement("script");
      script.charset = "UTF-8";
      script.type = "text/javascript";
      script.id = widgetId;
      script.src = "//candlewoodlakerealestate.idxbroker.com/idx/widgets/79915";
      document.getElementById("widget-container").appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* First Section - Recently Sold Header */}
      <div className="max-w-6xl p-8 mx-auto mb-12">
        <h1 className="text-4xl font-bold text-primary mb-6">'For Sale' to 'SOLD': Another Dream Home Journey Complete</h1>
        <h3 className="text-2xl font-bold text-primary mb-6">Take a look at the properties we've successfully matched with their new owners</h3>
        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
          Each sold property represents a family's new beginning, an investor's success story, or a dream turned into reality. Our proven track record speaks to our commitment to achieving the best possible outcomes for our clients, whether they're selling their cherished home or finding their perfect match.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          When you list with us, you're choosing a team that consistently delivers results. Our sold properties showcase our market expertise, negotiation skills, and dedication to exceeding expectations. Browse through our success stories and imagine what we could do for your property.
        </p>
        <div className="mt-6 text-center">
          <p className="text-primary text-lg font-bold">
            Ready to add your property to our success stories? 
            <a
              href="https://candlewoodlakerealestate.idxbroker.com/idx/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              Contact us today
            </a>{" "}
            for a complimentary market analysis.
          </p>
        </div>
      </div>

      {/* Second Section - Sold Property Cards */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-6">Recently Sold</h2>
        {/* Widget container where the script will be inserted */}
        <div
          id="widget-container"
          className="w-full max-w-full overflow-hidden"
          style={{ minHeight: "300px" }} // Ensure a minimum height for the widget
        ></div>
      </div>
    </div>
  );
}

export default RecentlySold;
