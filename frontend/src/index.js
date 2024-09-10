import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Watchlist from "./pages/Watchlist";
import Top10 from "./pages/Top10";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorElement from "./pages/ErrorElement";
import CoinByIdData from "./pages/CoinByIdData";
import { createContext } from "react";
import { Provider } from "react-redux";
import { cryptoStore } from "./store/cryptoStore";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import { NotFound } from "./pages/NotFound";

export const Name = createContext();

const Applayout = () => {
  return (
    <Provider store={cryptoStore}>
      <div>
        <Name.Provider value={"aditya"}>
          <Navbar />
          <Outlet />
        </Name.Provider>
      </div>
    </Provider>
  );
};

const browserRouter = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/top10", element: <Top10 /> },
      { path: "/watchlist", element: <Watchlist /> },
      { path: "/trending", element: <Trending /> },
      { path: "/coin/:id", element: <CoinByIdData /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <NotFound /> },
    ],
    errorElement: <ErrorElement />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={browserRouter} />);
