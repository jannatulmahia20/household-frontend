import React from "react";

// Placeholder data for services
const servicesData = [
  {
    id: 1,
    name: "Home Cleaning",
    description: "Full house cleaning services",
    price: "৳500",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Plumbing",
    description: "Fix leaks, pipes, and more",
    price: "৳800",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Electrical",
    description: "Electrical maintenance and repair",
    price: "৳700",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "AC Service",
    description: "AC repair and maintenance",
    price: "৳1200",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Pest Control",
    description: "Home pest control services",
    price: "৳600",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Gardening",
    description: "Lawn and garden maintenance",
    price: "৳400",
    image: "https://via.placeholder.com/150",
  },
];

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold">{service.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
