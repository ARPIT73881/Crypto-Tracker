import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { useRef } from "react";
import DummyUi from "../components/DummyUi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Top10 = () => {
  const [data, setData] = useState([]);

  const Data = useRef();

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === "") {
      navigate("/");
    } else {
      const url = "https://api.coingecko.com/api/v3/search/trending/";
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return data.length === 0 ? (
    <DummyUi />
  ) : (
    <div className="w-full container mx-auto pb-6 pt-2">
      <Cards apiData={data.coins} checker={"top10"} />
    </div>
  );
};

export default Top10;
