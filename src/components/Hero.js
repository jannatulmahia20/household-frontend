import React from "react";


const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24 px-6 md:flex md:items-center md:justify-between overflow-hidden">

      {/* Faint background image */}
      <img
        src="https://via.placeholder.com/1200x500"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* Left Column: Text & Button */}
      <div className="relative z-10 md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Professional Household Services
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Reliable, affordable, and just a click away!
        </p>
        <a
          href="/book"
          className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Book Now
        </a>
      </div>

      {/* Right Column: Team Image */}
      <div className="relative z-10 md:w-1/2 mt-8 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1581092334445-8d64b18ff408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
          alt="Our Professionals"
          className="rounded-xl shadow-lg mx-auto"
        />
      </div>

    </section>
  );
};

export default Hero;
