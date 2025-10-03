import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "৳999",
      features: ["2 Hours Service", "1 Professional", "Cleaning & Maintenance"],
    },
    {
      name: "Standard",
      price: "৳1999",
      features: ["4 Hours Service", "2 Professionals", "Cleaning & Maintenance", "Small Repairs"],
      popular: true,
    },
    {
      name: "Premium",
      price: "৳2999",
      features: ["6 Hours Service", "3 Professionals", "Deep Cleaning", "Repairs & Maintenance"],
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Pricing Plans</h2>
        <p className="text-gray-600 mb-12">
          Choose the best plan that fits your household needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg ${
                plan.popular ? "bg-blue-600 text-white scale-105" : "bg-white"
              } transition`}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                    ✅ <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/book" className={`px-6 py-3 rounded-full font-semibold shadow ${
  plan.popular
    ? "bg-white text-blue-600 hover:bg-gray-200"
    : "bg-blue-600 text-white hover:bg-blue-700"
}`}>
  Choose Plan
</a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
