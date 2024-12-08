// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#222831] text-white p-5">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-gray-300">
            NewsApp
          </NavLink>
        </h1>
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-gray-300 ${
                isActive ? "text-blue-[#ECDFCC] font-bold" : "text-white"
              }`
            }
          >
            Indonesia
          </NavLink>
          <NavLink
            to="/programming"
            className={({ isActive }) =>
              `hover:text-gray-300 ${
                isActive ? "text-blue-[#ECDFCC] font-bold" : "text-white"
              }`
            }
          >
            Programming
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `hover:text-gray-300 ${
                isActive ? "text-blue-[#ECDFCC] font-bold" : "text-white"
              }`
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/saved"
            className={({ isActive }) =>
              `hover:text-gray-300 ${
                isActive ? "text-blue-[#ECDFCC] font-bold" : "text-white"
              }`
            }
          >
            Saved
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
