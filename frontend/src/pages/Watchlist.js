import React, { useEffect } from "react";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmptyWatchlist from "../components/EmptyWatchlist";

const Watchlist = ({}) => {
  const user = useSelector((store) => store.user);
  const watchlistData = useSelector((store) => store.watchlist);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return watchlistData.length === 0 ? (
    <EmptyWatchlist />
  ) : (
    <div className="p-10">
      <Cards apiData={watchlistData} />
    </div>
  );
};

export default Watchlist;
