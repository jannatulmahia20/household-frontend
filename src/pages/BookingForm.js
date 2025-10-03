import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Unique transaction ID
    const transactionId = "TXN" + new Date().getTime();

    // Create form to submit to SSLCOMMERCE
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://sandbox.sslcommerz.com/gwprocess/v4/api.php"; // Sandbox URL

    const data = {
      store_id: "Bkash",
      store_passwd: "Bkash1234",
      total_amount: formData.service === "basic" ? 500 :
                    formData.service === "standard" ? 1000 : 1500,
      currency: "BDT",
      tran_id: transactionId,
      success_url: "http://localhost:3000/success",
      fail_url: "http://localhost:3000/fail",
      cus_name: formData.name,
      cus_add1: formData.address,
      cus_phone: formData.phone,
      product_name: formData.service + " Plan",
    };

    // Append hidden inputs
    for (const key in data) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = data[key];
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Book Your Service
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Service</option>
          <option value="basic">Basic Plan (৳500)</option>
          <option value="standard">Standard Plan (৳1000)</option>
          <option value="premium">Premium Plan (৳1500)</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
