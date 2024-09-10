import React from "react";
import { MdOutlineStarRate, MdOutlineStar } from "react-icons/md";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleAddcoin, handleremovecoin } from "../store/watchlistSlice";

const Card = ({ item, checker }) => {
  const watchlistData = useSelector((store) => store.watchlist);

  const isPresent = (element, array) =>
    array.some((obj) => JSON.stringify(obj) === JSON.stringify(element));

  const starRenderingLogic = isPresent(item, watchlistData);
  const dispatch = useDispatch();

  function addCoin() {
    dispatch(handleAddcoin(item));
  }

  function removeCoin() {
    dispatch(handleremovecoin(item));
  }

  return (
    <div className="max-w-96 mt-5 bg-teal-50 border shadow-lg gap-5 rounded-md py-4 px-5 flex flex-col hover:shadow-2xl">
      {/* Centered Name at the Top */}
      <Link to={`/coin/${item.id}`}>
        <h2
          title="Click here to know more."
          className="text-center text-[24px] font-bold text-teal-500 hover:text-teal-700 hover:scale-105 transform transition-transform duration-300 cursor-pointer"
        >
          {item.name}
        </h2>
      </Link>

      {/* Image and Symbol aligned in a row */}
      <div className="flex items-center justify-around">
        <abbr title="Click here to know more.">
          <Link to={`/coin/${item.id}`}>
            <img
              src={checker === "top10" ? item.thumb : item.image}
              alt="Crypto symbol"
              className="w-14 hover:text-teal-700 hover:scale-105 transform transition-transform duration-300 cursor-pointer"
            />
          </Link>
        </abbr>

        <div className="flex flex-col items-center">
          <h2 className="text-[18px] font-semibold underline">
            {item.symbol.toUpperCase()}
          </h2>
        </div>

        {/* Conditionally render Watchlist Icon */}
        {checker !== "top10" &&
          (!starRenderingLogic ? (
            <MdOutlineStarRate
              title="Click here to add to watchlist."
              onClick={addCoin}
              className="text-[40px] hover:scale-110 transform transition-transform duration-300 cursor-pointer"
            />
          ) : (
            <MdOutlineStar
              title="Click here to remove from watchlist."
              onClick={removeCoin}
              className="text-[40px] hover:scale-110 transform transition-transform duration-300 cursor-pointer"
            />
          ))}
      </div>

      {/* Market Data */}
      <div className="flex justify-between items-center gap-6 mt-4">
        <span className="font-semibold">24 Hours Change:</span>

        <div className="border p-2 rounded-full border-teal-700 shadow-sm">
          {checker === "top10" ? (
            item.data.price_change_percentage_24h.usd > 0 ? (
              <FaArrowTrendUp className="text-teal-500" />
            ) : (
              <FaArrowTrendDown className="text-red-500" />
            )
          ) : item.ath_change_percentage > 0 ? (
            <FaArrowTrendUp className="text-teal-500" />
          ) : (
            <FaArrowTrendDown className="text-red-500" />
          )}
        </div>
      </div>

      {/* Current Price */}
      <div className="mt-4 text-center">
        <span className="font-semibold text-teal-700">Current Price: </span>
        <h3 className="text-[25px] font-bold">
          &#x24;
          {checker === "top10"
            ? Math.round(item.data.price * 1000) / 1000
            : Math.round(item.current_price * 1000) / 1000}
        </h3>
      </div>
    </div>
  );
};

export default Card;
