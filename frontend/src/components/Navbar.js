import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Make sure to replace this with the actual path to your logo

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-md">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 w-auto mr-4" />
        </Link>
        <h1 className="text-3xl font-bold text-white">Haithem Doberman Breeding</h1>
      </div>
      <nav className="hidden md:flex">
        {["about", "available-puppies", "gallery", "testimonials", "blog", "contact"].map((item) => (
          <Link
            key={item}
            to={`/${item}`}
            className="mx-4 text-gray-300 hover:text-white transition duration-300"
          >
            {item.replace("-", " ").toUpperCase()}
          </Link>
        ))}
        <Link to="/login" className="mx-4 text-gray-300 hover:text-white transition duration-300">
          LOGIN
        </Link>
        <Link to="/signup" className="mx-4 text-gray-300 hover:text-white transition duration-300">
          SIGN UP
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;