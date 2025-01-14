import React, { useEffect, useRef } from "react";

const Section4 = () => {
  const scriptContainerRef = useRef(null);

  useEffect(() => {
    if (scriptContainerRef.current) {
      // Check if the script already exists
      const style = document.createElement("style");
    style.innerHTML = `
      #IDX-quicksearchForm-62376 {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        gap: 16px;
      }
      #IDX-quicksearchForm-62376 .IDX-qsFieldWrap {
        display: flex;
        flex-direction: column;
      }
      #IDX-quicksearchForm-62376 .IDX-qsLabel {
        font-weight: bold;
        margin-bottom: 4px;
      }
      #IDX-quicksearchForm-62376 .IDX-qsInput {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
      }
      #IDX-quicksearchForm-62376 .IDX-qsButtonInput {
        background-color: #00a1b2;
        color: white;
        font-weight: bold;
        border: none;
        cursor: pointer;
        text-align: center;
        border-radius: 4px;
        font-size: 16px;
        margin-top: 23px;
      }
      #IDX-quicksearchForm-62376 .IDX-qsButtonInput:hover {
        background-color: #007b8a;
      }
      @media (max-width: 1280px) and (min-width: 770px) {
        #IDX-quicksearchForm-62376 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        #IDX-quicksearchForm-62376 .IDX-qsFieldWrap {
          flex-direction: column;
        }
      }
    `;
    scriptContainerRef.current.appendChild(style);
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
    <section className="py-4 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Section Header */}
          <div className="text-center">
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
          {/* Script Wrapper */}
          <div
            className="container mx-auto p-4 text-center"
            ref={scriptContainerRef}
            id="script-container"
          ></div>

        </div>
      </div>
    </section>
  );
};

export default Section4;
