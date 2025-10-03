import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src="https://via.placeholder.com/500x350"
            alt="About us"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-700 mb-4">
            We provide trusted household services at your doorstep. From
            cleaning and plumbing to AC repair and gardening, our trained
            professionals ensure quality service every time.
          </p>
          <p className="text-gray-700 mb-6">
            Our mission is to make home maintenance simple, affordable, and
            reliable for everyone.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
