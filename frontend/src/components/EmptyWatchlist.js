import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const EmptyWatchlist = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center bg-teal-50 p-10 rounded-lg shadow-lg hover:shadow-2xl">
        {/* Icon */}
        <MdOutlineAddCircleOutline className="text-teal-500 text-[120px] mb-6" />

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Your Watchlist is Empty
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-lg mb-6 text-center">
          Looks like you haven’t added any coins to your watchlist yet.
          <br />
          Start exploring and add your favorite coins to keep track of them!
        </p>

        {/* Button */}
        <Link
          title="Explore Coins"
          to="/trending"
          className="bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          Explore Coins
        </Link>
      </div>
    </div>
  );
};

export default EmptyWatchlist;
