import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    inquiryType: "Buying", // Default option
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const serviceId = "service_gs03lr8";
    const templateId = "template_z57hpw3";
    const userId = "Qahd_s73eur-sSz8w";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          inquiryType: formData.inquiryType,
        },
        userId
      );
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "", inquiryType: "Buying" });
    } catch (err) {
      console.error("Error sending email:", err);
      setError("Failed to send the message. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-50 py-4">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
        {isSubmitted ? (
          <div className="text-green-500">Thank you for reaching out! We'll get back to you soon.</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="inquiryType">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Buying">Buying</option>
                  <option value="Selling">Selling</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <button
              type="submit"
              className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
