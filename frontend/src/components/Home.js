import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-doberman.jpg";
import Kid from "../assets/kid.jpg";
import Mother from "../assets/Mother.jpg";
import Father from "../assets/Father.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-brown-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center text-center">
        <img src={heroImage} alt="Doberman Hero" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative z-10">
          <h2 className="text-6xl font-bold mb-4">Welcome to Our Doberman Family</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            We breed healthy, happy Dobermans with excellent temperaments.
          </p>
          <Link to="/available-puppies" className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-500 transition">
            View Available Puppies
          </Link>
        </div>
      </section>

      {/* Our Dobermans Section */}
      <section className="container mx-auto py-16 px-6">
        <h3 className="text-4xl font-bold text-center mb-8">Our Dobermans</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{ img: Father, title: "Champion Bloodline" },
            { img: Mother, title: "Strong & Intelligent" },
            { img: Kid, title: "Loyal & Protective" }].map((dog, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
              <img src={dog.img} alt={dog.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg" />
              <h4 className="text-xl font-semibold mt-4">{dog.title}</h4>
              <p className="text-gray-300 mt-2 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-800 py-16 px-6">
        <h3 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h3>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{ name: "John Doe", testimonial: "Best Doberman breeder! Our puppy is amazing." },
            { name: "Jane Smith", testimonial: "Highly recommend! Very professional and caring." },
            { name: "Mike Johnson", testimonial: "Our Doberman is healthy and well-behaved. Thank you!" }].map((testimonial, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-4">"{testimonial.testimonial}"</p>
              <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 py-16 px-6 text-center">
        <h3 className="text-4xl font-bold text-white mb-4">Ready to Adopt a Doberman?</h3>
        <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
          Contact us today to learn more about our available puppies and how you can bring one home.
        </p>
        <Link to="/contact" className="bg-white text-blue-600 py-3 px-6 rounded-lg text-lg hover:bg-gray-200 transition">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;