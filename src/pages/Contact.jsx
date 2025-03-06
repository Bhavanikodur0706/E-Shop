import React from "react";
import contact from '../assets/contact.jpg'

const Contact = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <img
          src={contact}
          alt="Contact Us"
          className="w-40 sm:w-56 md:w-72 lg:w-96 rounded-lg shadow-lg"
        />

        {/* Content */}
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
            Get in Touch
          </h1>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Have questions? We'd love to hear from you! Whether you need support or 
            just want to say hello, our team is always ready to help.
          </p>

          {/* Contact Details */}
          <div className="mt-4">
            <p className="text-gray-700">
              📧 Email:{" "}
              <a href="mailto:info@example.com" className="text-blue-500 hover:underline">
                info@example.com
              </a>
            </p>
            <p className="text-gray-700 mt-2">
              📞 Phone:{" "}
              <a href="tel:+1234567890" className="text-blue-500 hover:underline">
                +123 456 7890
              </a>
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="/contact"
            className="inline-block mt-6 px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
