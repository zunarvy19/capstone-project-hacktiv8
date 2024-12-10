import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#fff] text-black p-5">
      <div className="container mx-auto flex flex-col gap-y-5 items-center">
        <div>
          <h1 className="text-4xl font-bold">
            <NavLink to="/" className="">
              NewsApp
            </NavLink>
          </h1>
        </div>
        <div className="flex space-x-16 border-t-2 border-black py-5">
          <NavLink
            to="/"
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
        <hr className="border border-gray-200 border-t-2 w-[89%] flex justify-center mx-auto"></hr>
      </div>
    </nav>
  );
};

export default Navbar;
