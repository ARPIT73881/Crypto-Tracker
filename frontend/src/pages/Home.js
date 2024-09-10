import React from "react";
import { Link } from "react-router-dom";

import homeImage from "../assests/image.png";
import homeImage2 from "../assests/image2.png";
import homeImage3 from "../assests/image3.png";
import homeImage4 from "../assests/image4.png";

const Home = () => {
  return (
    <main className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="bg-teal-500 text-white text-center py-20 rounded-lg shadow-lg mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Welcome to CryptoTracker
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Your ultimate destination for tracking cryptocurrency prices and
          trends. Stay ahead with real-time data and insights.
        </p>
        <Link to="/login">
          <button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 px-6 rounded-lg text-lg transition-transform duration-300 transform hover:scale-105">
            Log In to explore
          </button>
        </Link>
      </section>

      {/* Images Section */}
      <section className="max-w-7xl mx-auto mb-12  ">
        <h2 className="text-3xl font-bold text-center mb-8">
          Features at a Glance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12  p-6 ">
          <div className="relative flex justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform transition-transform duration-300 ">
            <img
              src={homeImage}
              alt="Feature 1"
              className="w-full h-64 object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-teal-100 bg-opacity-10  text-white text-xl font-bold">
              <span className="text-2xl hover:scale-110 transform transition-transform text-black ">
                Explore Coins
              </span>
            </div>
          </div>
          <div className="relative flex justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform transition-transform duration-300">
            <img
              src={homeImage2}
              alt="Feature 2"
              className="w-full h-64 object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-teal-100 bg-opacity-10  text-white text-xl font-bold">
              <span className="text-2xl hover:scale-110 transform transition-transform text-black">
                Coin Details
              </span>
            </div>
          </div>
          <div className="relative flex justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform transition-transform duration-300">
            <img
              src={homeImage3}
              alt="Feature 3"
              className="w-full h-64 object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-teal-100 bg-opacity-10  text-white text-xl font-bold">
              <span className="text-2xl hover:scale-110 transform transition-transform text-black">
                Top 10 Coins
              </span>
            </div>
          </div>
          <div className="relative flex justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={homeImage4}
              alt="Feature 4"
              className="w-full h-64 object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-teal-100 bg-opacity-10  text-white text-xl font-bold">
              <span className="text-2xl hover:scale-110 transform transition-transform text-black">
                {" "}
                Watchlist
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between">
          <h2 className="text-2xl font-bold mb-4">Real-Time Data</h2>
          <p className="text-gray-700 mb-4">
            Get up-to-the-minute information on cryptocurrency prices and market
            trends. Stay informed with live updates.
          </p>
          <Link
            to="/trending"
            className="text-teal-500 hover:text-teal-700 font-semibold transition-transform duration-300 transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>

        <div className="bg-white flex flex-col justify-between p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4">Personal Watchlist</h2>
          <p className="text-gray-700 mb-4">
            Add your favorite cryptocurrencies to your watchlist for easy
            tracking. Customize your portfolio and keep an eye on your assets.
          </p>
          <Link
            to="/watchlist"
            className="text-teal-500 hover:text-teal-700 font-semibold transition-transform duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        <div className="bg-white p-6  flex flex-col justify-between  rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4">Explore Trends</h2>
          <p className="text-gray-700 mb-4">
            Discover trending cryptocurrencies and market trends. Find out
            what's hot and what's not in the crypto world.
          </p>
          <Link
            to="/trending"
            className="text-teal-500 hover:text-teal-700 font-semibold transition-transform duration-300 transform hover:scale-105"
          >
            Explore Now
          </Link>
        </div>

        <div className="bg-white p-6 flex flex-col justify-between rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4">Secure and Reliable</h2>
          <p className="text-gray-700 mb-4">
            We prioritize your security with advanced encryption and secure data
            storage. Your personal and financial information is protected, so
            you can track your investments with peace of mind.
          </p>
          <Link
            to="/security"
            className="text-teal-500 hover:text-teal-700 font-semibold transition-transform duration-300 transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-teal-700 text-white text-center py-12 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Dive Into the World of Crypto?
        </h2>
        <p className="text-lg mb-6">
          Sign up now and start tracking the latest cryptocurrency trends with
          ease. Join our community today!
        </p>
        <Link to="/signin">
          <button className="bg-teal-800 hover:bg-teal-900 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-transform duration-300 transform hover:scale-105">
            Sign Up for free
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Home;
