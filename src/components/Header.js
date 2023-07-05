import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-xl font-bold">FinEdge</div>
        <div className="flex">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="mx-4 hover:text-gray-500 cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="mx-4 hover:text-gray-500 cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="mx-4 hover:text-gray-500 cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
