import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setuser } from "../store/userSlice";
import homeImage from "../assests/image.png";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = await fetch(
      "https://crypto-tracker-uhtx.onrender.com/api/v1/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const response = await data.json();
    console.log(response.status);
    if (response.status === false) {
      toast.error(response.message, { duration: 3000 });
    } else if (response.status) {
      dispatch(setuser(response.message));
      navigate("/trending");
    }
  }

  console.log(formData);

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center ">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white  sm:rounded-lg flex justify-center flex-1 shadow-lg hover:shadow-2xl">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold text-teal-700">
                Log In
              </h1>
              <div className="w-full flex-1 mt-8">
                <div className="my-12 border-b text-center"></div>
                <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                    placeholder="Email"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    required
                    placeholder="Password"
                  />
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-teal-500 text-gray-100 w-full py-4 rounded-lg hover:bg-teal-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy={7} r={4} />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3 ">Log In</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${homeImage})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
