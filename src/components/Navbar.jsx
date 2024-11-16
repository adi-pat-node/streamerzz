import { RiCloseFill, RiMenu3Line } from "react-icons/ri";
import logo from "../assets/logo.png";
import { useState } from "react";
import { div } from "framer-motion/client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMeu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div
        className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex
       justify-between items-center rounded-xl border border-neutral-800"
      >
        <img src={logo} alt="" width={120} height={24} className="" />
        <div className="hidden md:flex space-x-6">
          <a href="#works" className="hover:text-neutral-200">
            How it Works
          </a>
          <a href="#pricing" className="hover:text-neutral-200">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-neutral-200">
            Testimonials
          </a>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="hover:text-neutral-200">
            Login
          </a>
          <a
            href="#"
            className="border border-neutral-700 text-white py-2 px-4 rounded-lg  hover:text-neutral-700 transition"
          >
            Get a demo
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg  hover:bg-blue-500 transition"
          >
            Start Free
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMeu}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border-neutral-800 p-4 rounded-xl mt-2 ">
          <div className="flex flex-col space-y-4">
            <a href="#works" className="hover:text-neutral-200">
              Product
            </a>
            <a href="#pricing" className="hover:text-neutral-200">
              Pricing
            </a>
            <a href="#" className="hover:text-neutral-200">
              Resources
            </a>
            <a href="#" className="hover:text-neutral-200">
              Login
            </a>
            <a
              href="#"
              className="border border-neutral-700 text-white py-2 px-4 rounded-lg  hover:text-neutral-700 transition"
            >
              Get a demo
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg  hover:bg-blue-500 transition"
            >
              Start Free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
