import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Booking from "../components/Booking";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Pricing />
      <Booking />
      <Footer />
    </div>
  );
};

export default LandingPage;
