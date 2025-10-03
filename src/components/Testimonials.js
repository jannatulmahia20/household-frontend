import React from "react";

const testimonials = [
  {
    name: "Rahim Ahmed",
    role: "Customer",
    feedback:
      "The cleaning service was excellent. Very professional and on time!",
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Sara Khan",
    role: "Customer",
    feedback:
      "I booked plumbing services, and everything was fixed perfectly. Highly recommended!",
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Tanvir Hasan",
    role: "Customer",
    feedback:
      "Affordable and reliable service. Booking was super easy online!",
    image: "https://via.placeholder.com/80",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <p className="text-gray-600 italic mb-4">"{t.feedback}"</p>
              <h4 className="text-lg font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
