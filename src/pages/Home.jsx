import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  const [username, setUsername] = useState("");
  const [usernameFound, setUsernameFound] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSnapshot(doc(db, "users", username), (doc) => {
      if (doc.data() == undefined) {
        setUsernameFound(false);
      } else {
        setUsernameFound(true);
        navigate(`/${username}`);
      }
    });
    //navigate(`/${username}`);
    console.log(username);
  };

  return (
    <div className="w-full h-screen text-center bg-gray-700">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex-col">
          <div>
            <p className="text-blue-400 text-[80px]">Game Stats</p>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="w-[100%] flex flex-col py-4"
            >
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="outline-none p-3 my-2 bg-white-700 rounded border-[3px] border-blue-400"
                type="username"
                placeholder="Search for a user"
              />
              {!usernameFound ? (
                <div className="text-blue-500 font-medium">
                  Error: Username not found. Please search again.
                </div>
              ) : (
                <></>
              )}
              <button className="bg-blue-400 py-3 my-4 rounded-lg font-bold min-w-[30%] mx-auto">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
