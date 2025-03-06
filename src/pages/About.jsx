import React from "react";
import AboutImage from "../assets/about.jpg";

const About = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Image */}
        <img
          src={AboutImage}
          alt="About Us"
          className="w-40 sm:w-56 md:w-72 lg:w-96 rounded-lg shadow-lg"
        />

        {/* Content */}
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
            About Us
          </h1>
          <p className="text-gray-600 mt-2 leading-relaxed">
            At <span className="font-semibold">Eshop</span>, we
            believe in quality, affordability, and exceptional customer
            service. Our journey began with a passion for providing the best
            products, and today, we are proud to be a trusted name in the
            industry.
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed">
            We handpick our collections to ensure you get only the best. Join us
            on this journey and experience shopping like never before!
          </p>

          {/* CTA Button */}
          <a
            href="/shop"
            className="inline-block mt-4 px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
