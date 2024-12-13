import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#fff] text-black py-4">
      <div className="container mx-auto flex flex-col items-center">
        <div>
          <h1 className="text-5xl font-medium tracking-wide">
            <NavLink to="/" className="" id="title">
              NewTimes
            </NavLink>
          </h1>
        </div>
        <div className="flex space-x-12 border-t-2 border-black py-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive ? "underline font-bold" : "text-black"}`
            }
          >
            Latest
          </NavLink>
          <NavLink
            to="/indonesia"
            className={({ isActive }) =>
              ` ${isActive ? "underline font-bold" : "text-black"}`
            }
          >
            Indonesia
          </NavLink>
          <NavLink
            to="/programming"
            className={({ isActive }) =>
              ` ${isActive ? "underline font-bold" : "text-black"}`
            }
          >
            Programming
          </NavLink>
          <NavLink
            to="/covid"
            className={({ isActive }) =>
              ` ${isActive ? "underline font-bold" : "text-black"}`
            }
          >
            Covid-19
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              ` ${isActive ? "underline font-bold" : "text-black"}`
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/saved"
            className={({ isActive }) =>
              ` ${isActive ? "underline font-bold" : "text-black"}`
            }
          >
            Saved
          </NavLink>
        </div>
        <hr className="border border-gray-200 border-t-2 w-full flex justify-center mx-auto"></hr>
      </div>
    </nav>
  );
};

export default Navbar;
