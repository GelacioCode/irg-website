import React from "react";

function OurMarketingPlan() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header Section */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto mb-12">
        <h1 className="text-center text-4xl font-bold text-primary italic mb-6">
          Marketing Your Candlewood Lake Property
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
        Selling a lake property requires specialized marketing that showcases not just a home, but a lifestyle. With our cutting-edge marketing strategy, your property will reach qualified buyers across multiple platforms, ensuring maximum exposure to the right audience.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto mb-12 space-y-8">
        {/* Professional Staging and Preparation */}
        <div>
          <h3 className="text-3xl font-bold text-primary mb-4">Professional Staging and Preparation</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Before we begin our comprehensive marketing campaign, we focus on presenting your home in its absolute best light. Our professional home staging services transform your property into an irresistible offering that helps buyers envision their future lake lifestyle. Our experienced stagers understand the unique appeal of waterfront properties and know exactly how to highlight water views, maximize the perception of space, and create an emotional connection with potential buyers. From arranging furniture to optimize flow and views, to selecting the perfect lakeside décor, we ensure your home makes an unforgettable first impression. Our staging services consistently result in faster sales and higher offers, making it a crucial first step in our marketing strategy.
          </p>
        </div>

        {/* Digital Excellence */}
        <div>
          <h3 className="text-3xl font-bold text-primary mb-4">Digital Excellence</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Your home deserves more than just standard listings. We harness the power of over 80 premier real estate websites, ensuring your property gains unprecedented visibility across all major platforms. From Zillow and Realtor.com to specialized luxury and waterfront property sites, we leave no stone unturned in reaching potential buyers. Our comprehensive digital strategy ensures your property is showcased where motivated buyers are actively searching, maximizing your home's exposure to qualified prospects.
          </p>
        </div>

        {/* Immersive 3D Virtual Tours */}
        <div>
          <h3 className="text-3xl font-bold text-primary mb-4">Immersive 3D Virtual Tours</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Through state-of-the-art Matterport technology, we create stunning virtual tours that allow buyers to experience your home from anywhere in the world. These interactive 3D walkthroughs are particularly valuable for out-of-state buyers and those seeking vacation properties. Potential buyers can explore every room in detail, get accurate measurements, and truly understand the flow and layout of your home. The professional staging we implement shows beautifully in these virtual tours, allowing online viewers to experience the same emotional connection that in-person visitors feel.
          </p>
        </div>

        {/* Local Market Expertise */}
        <div>
          <h3 className="text-3xl font-bold text-primary mb-4">Professional Photography and Aerial Imagery</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Your perfectly staged lake property will be captured by professional photographers who specialize in waterfront homes. We schedule photo sessions during optimal lighting conditions to showcase your property's best features, from stunning water views to architectural details. Additionally, our drone photography and videography services provide breathtaking aerial perspectives that highlight your property's location and relationship to the lake. These aerial shots prove invaluable in demonstrating your property's waterfront advantages and proximity to desirable amenities.
          </p>
        </div>

        {/* Strategic Digital and Social Marketing */}
        <div>
          <h3 className="text-3xl font-bold text-primary mb-4">Strategic Digital and Social Marketing</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We leverage the power of targeted social media campaigns and sophisticated digital marketing strategies to reach qualified buyers. Your property will be featured across multiple platforms with professionally designed content that captures attention and drives engagement. Our email marketing campaigns ensure your property reaches our extensive database of qualified buyers, real estate agents specializing in lake properties, and investors interested in waterfront real estate. We continuously monitor and adjust these campaigns to maximize their effectiveness and reach.
          </p>
        </div>

        {/* Print Marketing and Personal Service */}
        <div>
          <h3 className="text-3xl font-bold text-primary mb-4">Professional Photography and Aerial Imagery</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            While digital marketing is crucial in today's market, we understand the enduring value of print marketing and personal service. Your property will be featured in custom property brochures, direct mail campaigns, and prestigious real estate publications that cater to luxury and waterfront property buyers. We complement these traditional marketing methods with regular market updates, detailed showing feedback, and comprehensive marketing performance reports. Our communication is always personalized and prompt, ensuring you're informed every step of the way.
          </p>
        </div>

        {/* Local Market Expertise */}
        <div>
          <h3 className="text-3xl font-bold text-primary mb-4">Professional Photography and Aerial Imagery</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
          As Candlewood Lake specialists, we bring an unmatched understanding of how to position your property effectively. We know how to highlight the features that matter most to lake property buyers, from dock specifications to community amenities. Our deep knowledge of the local market allows us to showcase your property's unique advantages, seasonal benefits, and community features that make it special. This expertise proves invaluable in crafting marketing messages that resonate with qualified buyers seeking the Candlewood Lake lifestyle.
          <br />Let's discuss how we can create a customized marketing plan for your property. Our comprehensive approach combines professional staging, cutting-edge technology, and proven traditional methods, ensuring your home receives the attention it deserves. Contact us today to learn more about showcasing your home to its fullest potential and achieving the best possible outcome for your sale.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto text-center">
        <h4 className="text-2xl font-bold italic text-gray-800 mb-4">
          Experience the difference strategic marketing makes in selling your lake property.
        </h4>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Contact us today to learn more about showcasing your home to its fullest potential and achieving the best possible outcome for your sale.
        </p>
        <a
          href="/contactus"
          className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default OurMarketingPlan;
