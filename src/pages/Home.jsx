import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import homeBackground from "../images/homeBackground.jpg";

const Home = () => {
  const [username, setUsername] = useState("");
  const [usernameFound, setUsernameFound] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      onSnapshot(doc(db, "users", username), (doc) => {
        if (doc.data() == undefined) {
          setUsernameFound(false);
        } else {
          setUsernameFound(true);
          navigate(`/${username}`);
        }
      });
    } catch (error) {
      console.log(error);
    }
    //console.log(username);
  };

  return (
    <div className="w-full h-screen text-center bg-gray-700">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src={homeBackground}
        alt="/"
      />
      <div className="fixed w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex-col">
          <div>
            <p className="text-blue-400 text-[80px]">Game Stats</p>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="w-[100%] flex flex-col py-4"
            >
              <div className="relative">
                <div class="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  className="ps-12 w-[500px] outline-none p-3 my-2 bg-white-700 rounded-3xl border-[3px] border-blue-400"
                  type="username"
                  placeholder="Search for a user (Type '123456' to see an example profile)"
                />
              </div>
              {!usernameFound ? (
                <div className="text-blue-500 font-medium">
                  Error: Username not found. Please search again.
                </div>
              ) : (
                <></>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
