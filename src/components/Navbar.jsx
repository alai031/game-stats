import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [navBg, setNavBg] = useState("transparent");
  const [shadow, setShadow] = useState(false);
  //console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setNavBg("#374151");
      } else {
        setShadow(false);
        setNavBg("transparent");
      }
    };
    window.addEventListener("scroll", handleShadow);
  });

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
        <Link to="/">
          <h1 className="text-blue-400 text-4xl font-bold cursor-pointer">
            Game Stats
          </h1>
        </Link>
        {user?.email ? (
          <div>
            <Link to={`/${user.displayName}`}>
              <button className="text-white pr-4">Account</button>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-blue-600 px-6 py-2 rounded cursor-pointer text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="text-white pr-4">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="bg-blue-600 px-6 py-2 rounded cursor-pointer text-white">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
