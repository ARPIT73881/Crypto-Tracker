import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DummyUi from "../components/DummyUi";

const CoinByIdData = () => {
  const [coinData, setCoinData] = useState(null); // State to hold the coin data
  const { id } = useParams(); // Get the ID from the URL parameters
  const navigate = useNavigate(); // Hook to navigate back

  useEffect(() => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options)
      .then((response) => response.json())
      .then((response) => {
        setCoinData(response); // Set the fetched data into state
      })
      .catch((err) => console.error(err));
  }, [id]);

  // Check if data is still loading
  if (!coinData) {
    return <DummyUi />;
  }

  // Destructure needed data from the response
  const {
    image,
    name,
    symbol,
    description,
    market_data: {
      current_price,
      market_cap,
      price_change_percentage_24h,
      total_volume,
      ath,
      atl,
    },
  } = coinData;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200  hover:shadow-2xl">
      {/* Back Button */}
      <div className="w-full   flex">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="ml-auto bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 mb-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 "
        >
          &larr; Back
        </button>
      </div>

      {/* Coin Header */}
      <div className="flex items-center gap-6">
        <img src={image.large} alt={name} className="w-20 h-20" />
        <div>
          <h1 className="text-3xl font-bold hover:text-teal-700  ">{name}</h1>
          <p className="text-gray-500 text-lg uppercase underline">{symbol}</p>
        </div>
      </div>

      {/* Market Data */}
      <div className="mt-6">
        <div className="text-lg font-semibold">Market Data:</div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-gray-700">Current Price:</p>
            <h2 className="text-xl font-bold text-teal-500">
              &#x24;{current_price.usd}
            </h2>
          </div>
          <div>
            <p className="text-gray-700">Market Cap:</p>
            <h2 className="text-xl font-bold">&#x24;{market_cap.usd}</h2>
          </div>
          <div>
            <p className="text-gray-700">24h Price Change:</p>
            <h2
              className={`text-xl font-bold ${
                price_change_percentage_24h > 0
                  ? "text-teal-500"
                  : "text-red-500"
              }`}
            >
              {price_change_percentage_24h.toFixed(2)}%
            </h2>
          </div>
          <div>
            <p className="text-gray-700">Total Volume:</p>
            <h2 className="text-xl font-bold">&#x24;{total_volume.usd}</h2>
          </div>
          <div>
            <p className="text-gray-700">All-Time High:</p>
            <h2 className="text-xl font-bold text-teal-500">&#x24;{ath.usd}</h2>
          </div>
          <div>
            <p className="text-gray-700">All-Time Low:</p>
            <h2 className="text-xl font-bold text-red-500">&#x24;{atl.usd}</h2>
          </div>
        </div>
      </div>

      {/* Coin Description */}
      <div className="mt-6">
        <div className="text-lg font-semibold">Description:</div>
        <p
          className="text-gray-700 mt-2"
          dangerouslySetInnerHTML={{ __html: description.en }}
        />
      </div>
    </div>
  );
};

export default CoinByIdData;
