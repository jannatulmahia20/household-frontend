import React from "react";

const Booking = () => {
  return (
    <section className="bg-blue-600 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Book Your Service?</h2>
        <p className="text-lg mb-8">
          Schedule your household service with just one click. Our professionals are here to help!
        </p>
        <a href="/book" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-200 transition">
  Book Now
</a>

      </div>
    </section>
  );
};

export default Booking;
