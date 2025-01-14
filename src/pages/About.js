import React from "react";
import ContactForm from "../components/contactform";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Second Section - Contact Form */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto mb-12 flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-primary mb-4">Contact</h2>
          <p className="text-gray-600 mb-6">
            Have questions about buying or selling your property? Our expert team is here to assist you. Reach out to us today, and let’s make your real estate journey smooth and successful.
          </p>
          <div className="flex justify-center">
            <a
              href="https://candlewoodlakerealestate.idxbroker.com/idx/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Independent Realty Group</h2>
          <p className="text-gray-600">
            499 Federal Road Suite 20A<br />
            Brookfield, CT 06804
          </p>
          <p className="text-gray-600 mt-4">
            Phone:{" "}
            <a
              href="tel:8602941549"
              className="text-primary hover:underline"
            >
              860-294-1549
            </a>
            <br />
            Phone Alt:{" "}
            <a
              href="tel:2037333969"
              className="text-primary hover:underline"
            >
              203-733-3969
            </a>
            <br />
            Fax: 203-740-7894<br />
            Broker Email:{" "}
            <a
              href="mailto:christina@independentrealtygroup.com"
              className="text-primary hover:underline"
            >
              christina@independentrealtygroup.com
            </a>
          </p>
        </div>
      </div>

      <ContactForm />

      {/* Third Section - Map */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">Our Location</h2>
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Independent Realty Group Office"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.2169314724713!2d-73.40560938420942!3d41.467128679259314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7ef421b3d8b4b%3A0x5fbeb8a3e5e6ad20!2s499%20Federal%20Rd%20Suite%2020A%2C%20Brookfield%2C%20CT%2006804%2C%20USA!5e0!3m2!1sen!2sus!4v1697123398213!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default About;
