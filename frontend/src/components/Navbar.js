import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeuser } from "../store/userSlice";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing hamburger and close icons

function Navbar() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu
  const location = useLocation(); // Hook to get current location

  function handleLogout() {
    dispatch(removeuser());
  }

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to determine if the link is active
  const isActive = (path) => {
    return location.pathname === path ? "text-teal-700 font-bold" : "";
  };

  return (
    <div className="border w-full bg-white p-1">
      <nav className="flex py-3 justify-between mx-auto items-center container">
        {/* Logo */}
        <Link to="/">
          <h1 className="cursor-pointer text-[30px] font-extrabold hover:scale-105 transform transition-transform duration-300 ">
            Crypto
            <span className="text-teal-500 hover:text-teal-700">Tracker</span>
          </h1>
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-[30px]" /> // Close icon when menu is open
            ) : (
              <FaBars className="text-[30px]" /> // Hamburger icon when menu is closed
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 font-semibold text-[20px]">
          {user === "logged in" && (
            <>
              <Link to="/top10">
                <p
                  className={`hover:scale-105 transform transition-transform duration-300 cursor-pointer hover:text-teal-700 ${isActive(
                    "/top10"
                  )}`}
                >
                  Top 10
                </p>
              </Link>
              <Link to="/trending">
                <p
                  className={`hover:scale-105 transform transition-transform duration-300 cursor-pointer hover:text-teal-700 ${isActive(
                    "/trending"
                  )}`}
                >
                  Explore Coins
                </p>
              </Link>
              <Link to="/watchlist">
                <p
                  className={`hover:scale-105 transform transition-transform duration-300 cursor-pointer hover:text-teal-700 ${isActive(
                    "/watchlist"
                  )}`}
                >
                  Watchlist
                </p>
              </Link>
            </>
          )}
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex gap-4">
          {user === "logged in" ? (
            <button
              onClick={handleLogout}
              className="bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link to="/login">
                <button
                  className={`bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 ${isActive(
                    "/login"
                  )}`}
                >
                  Log In
                </button>
              </Link>
              <Link to="/signin">
                <button
                  className={`bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 ${isActive(
                    "/signin"
                  )}`}
                >
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-gray-100 z-50 flex flex-col items-center justify-center gap-8 md:hidden">
            {user === "logged in" && (
              <div className="flex flex-col gap-8 text-2xl">
                <Link to="/top10" onClick={toggleMenu}>
                  <p
                    className={`cursor-pointer hover:text-teal-700 ${isActive(
                      "/top10"
                    )}`}
                  >
                    Top 10
                  </p>
                </Link>
                <Link to="/trending" onClick={toggleMenu}>
                  <p
                    className={`cursor-pointer hover:text-teal-700 ${isActive(
                      "/trending"
                    )}`}
                  >
                    Explore Coins
                  </p>
                </Link>
                <Link to="/watchlist" onClick={toggleMenu}>
                  <p
                    className={`cursor-pointer hover:text-teal-700 ${isActive(
                      "/watchlist"
                    )}`}
                  >
                    Watchlist
                  </p>
                </Link>
              </div>
            )}

            {/* Mobile Authentication Buttons */}
            <div className="flex flex-col gap-4">
              {user === "logged in" ? (
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
                >
                  Log Out
                </button>
              ) : (
                <>
                  <Link to="/login" onClick={toggleMenu}>
                    <button
                      className={`bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 ${isActive(
                        "/login"
                      )}`}
                    >
                      Log In
                    </button>
                  </Link>
                  <Link to="/signin" onClick={toggleMenu}>
                    <button
                      className={`bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 ${isActive(
                        "/signin"
                      )}`}
                    >
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
