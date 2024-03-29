import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import videoGameBackground from "../images/videoGameBackground.jpg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setUsernameError(false);
    setPasswordError(false);
    e.preventDefault();
    try {
      await signUp(email, password, username);
      navigate("/");
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        setUsernameError(true);
      } else if (error.code == "auth/weak-password") {
        setPasswordError(true);
      }
    }
  };

  const handleUsernameChange = async (e) => {
    e.preventDefault();
    setUsername(e.target.value);
    setEmail(e.target.value + "@domain.com");
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src={videoGameBackground}
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-y py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black rounded-lg text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                {/* <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                /> */}
                <input
                  onChange={handleUsernameChange}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="username"
                  placeholder="Username"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                {usernameError ? (
                  <div>
                    Error: Username already used. Please sign up with a
                    different username.
                  </div>
                ) : (
                  <></>
                )}
                {passwordError ? (
                  <div>Error: Password should be at least 6 characters.</div>
                ) : (
                  <></>
                )}
                <button className="bg-blue-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                {/* <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div> */}
                <p className="py-8">
                  <span className="text-gray-400">
                    Already subscribed to Game Stats?
                  </span>{" "}
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
