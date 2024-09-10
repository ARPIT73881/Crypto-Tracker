import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import DummyUi from "../components/DummyUi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Trending() {
  const [data, setData] = useState([]);

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === "") {
      navigate("/");
      return;
    } else {
      const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
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
  }, [user]);

  if (data.length === 0) {
    return <DummyUi />;
  } else {
    return (
      <div className="container w-full mx-auto pt-2 pb-6">
        <Cards apiData={data} />
      </div>
    );
  }
}

export default Trending;
