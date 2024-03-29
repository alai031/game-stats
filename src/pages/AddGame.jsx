import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import search_summoner from "../context/script";
import searchTftSummoner from "../context/tftScript";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const AddGame = () => {
  const { user } = UserAuth();
  const [saved, setSaved] = useState(false);
  const [searchedName, setSearchedName] = useState("");
  const [summonerName, setSummonerName] = useState("");
  const [summonerLvl, setSummonerLvl] = useState("");
  const [searching, setSearching] = useState(false);
  const [summonerProfilePic, setSummonerProfilePic] = useState("");
  const [gameOption, setGameOption] = useState("");
  const [soloRank, setSoloRank] = useState("");
  const [soloTftRank, setSoloTftRank] = useState("");
  const [doublesTftRank, setDoublesTftRank] = useState("");
  const [hyperTftRank, setHyperTftRank] = useState("");
  const [usernameFound, setUsernameFound] = useState(false);
  const navigate = useNavigate();

  const statID = doc(db, "users", `${user?.displayName}`);

  const handleSubmit = async (e) => {
    /* console.log(gameOption); */
    e.preventDefault();
    /* setError('') */
    if (gameOption == "League of Legends") {
      try {
        var summonerInfo = await search_summoner(searchedName);
        //console.log(summonerInfo)
        setSummonerName(summonerInfo.name);
        setSummonerLvl(summonerInfo.level);
        setSummonerProfilePic(summonerInfo.profilePicUrl);
        setSoloRank(summonerInfo.soloRank);
        setSearching(true);
        setUsernameFound(true);
      } catch (error) {
        //setSearching(false)
        setUsernameFound(false);
      }
    } else if (gameOption == "Teamfight Tactics") {
      try {
        var tftSummonerInfo = await searchTftSummoner(searchedName);
        setSummonerName(tftSummonerInfo.name);
        setSummonerLvl(tftSummonerInfo.level);
        setSummonerProfilePic(tftSummonerInfo.profilePicUrl);
        setSearching(true);
        setUsernameFound(true);
        setSoloTftRank(tftSummonerInfo.soloTftRank);
        setDoublesTftRank(tftSummonerInfo.doublesTftRank);
        setHyperTftRank(tftSummonerInfo.hyperTftRank);
        console.log(tftSummonerInfo);
      } catch (error) {
        setUsernameFound(false);
      }
    }
  };

  const saveStat = async () => {
    if (user?.email) {
      setSaved(true);
      if (gameOption == "League of Legends") {
        try {
          await updateDoc(statID, {
            savedGames: arrayUnion({
              GameType: gameOption,
              GameUsername: summonerName,
              GameLevel: summonerLvl,
              GameRank: soloRank,
              GameProfilePic: summonerProfilePic,
            }),
          });
          navigate(`/${user.displayName}`);
        } catch (error) {
          alert("Failed to save game stat to db");
        }
      } else if (gameOption == "Teamfight Tactics") {
        try {
          await updateDoc(statID, {
            savedGames: arrayUnion({
              GameType: gameOption,
              GameUsername: summonerName,
              GameLevel: summonerLvl,
              GameProfilePic: summonerProfilePic,
              SoloTftRank: soloTftRank,
              DoublesTftRank: doublesTftRank,
              HyperTftRank: hyperTftRank,
            }),
          });
          navigate(`/${user.displayName}`);
        } catch (error) {
          alert("Failed to save game stat to db");
        }
      }
    } else {
      alert("Please log in to save a game stat");
    }
  };

  const handleSwitch = (e) => {
    setGameOption(e.target.value);
    setSearching(false);
  };

  return (
    <div className="w-full bg-gray-700">
      <div className="top-0 left-0 w-full">
        <div className="flex w-full px-y py-24 z-50">
          <div className="min-w-[450px] min-h-[600px] mx-auto bg-black/75 rounded-lg text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Add a Game Stat</h1>

              <form onSubmit={handleSubmit}>
                <div className="flex-column rounded-md bg-gray-400 mt-4 p-4 md:p-6">
                  {/* Choose Game */}
                  <div className="mb-4">
                    <label
                      htmlFor="customer"
                      className="mb-2 block text-sm font-medium"
                    >
                      Choose game
                    </label>
                    <div className="relative text-black">
                      <select
                        onChange={handleSwitch}
                        id="customer"
                        name="customerID"
                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-black"
                        defaultValue=""
                        aria-describedby="customer-error"
                      >
                        <option value="" disabled>
                          Select a game
                        </option>
                        <option
                          value="League of Legends"
                          className="text-black"
                        >
                          League of Legends
                        </option>
                        <option
                          value="Teamfight Tactics"
                          className="text-black"
                        >
                          Teamfight Tactics (TFT)
                        </option>
                      </select>
                      <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>

                  {gameOption == "" ? (
                    <></>
                  ) : (
                    <div>
                      {/* Game Name */}
                      <div className="mb-4">
                        <label
                          htmlFor="amount"
                          className="mb-2 block text-sm font-medium"
                        >
                          Enter your {gameOption} Username
                        </label>
                        <div className="relative mt-2 rounded-md">
                          <div className="relative text-black">
                            <input
                              onChange={(e) => setSearchedName(e.target.value)}
                              id="gameName"
                              name="gameName"
                              type="string"
                              placeholder="Game Name"
                              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                              aria-describedby="amount-error"
                            />
                            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                          </div>
                        </div>
                      </div>

                      {/* League Player info */}
                      {searching && gameOption == "League of Legends" ? (
                        <div className="flex">
                          {usernameFound ? (
                            <div className="w-full">
                              Is this your account? <br />
                              <img
                                src={summonerProfilePic}
                                alt="summonerProfilePic"
                                className="pt-3 rounded-full"
                                width="100"
                              />
                              Username: {summonerName} <br />
                              Level: {summonerLvl} <br />
                              Solo Queue Rank: {soloRank} <br />
                              <div className="flex">
                                {/* Add stats button */}
                                <button
                                  className="mx-auto shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white px-8 py-2 mt-6"
                                  onClick={saveStat}
                                >
                                  Add stats
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="text-blue-600 font-medium">
                              Error: Username not found. Try again.
                            </div>
                          )}
                        </div>
                      ) : (
                        <></>
                      )}

                      {/* TFT Player info */}
                      {searching && gameOption == "Teamfight Tactics" ? (
                        <div className="flex">
                          {usernameFound ? (
                            <div className="w-full">
                              Is this your account? <br />
                              <img
                                src={summonerProfilePic}
                                alt="summonerProfilePic"
                                className="pt-3 rounded-full"
                                width="100"
                              />
                              Username: {summonerName} <br />
                              Level: {summonerLvl} <br />
                              Solo Rank: {soloTftRank} <br />
                              Doubles Up Rank: {doublesTftRank} <br />
                              Hyper Roll Rank: {hyperTftRank} <br />
                              <div className="flex">
                                {/* Add stats button */}
                                <button
                                  className="mx-auto shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white px-8 py-2 mt-6"
                                  onClick={saveStat}
                                >
                                  Add stats
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="text-blue-600 font-medium">
                              Error: Username not found. Try again.
                            </div>
                          )}
                        </div>
                      ) : (
                        <></>
                      )}

                      {/* Submit button */}
                      <button className="flex mx-auto shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white px-8 py-2 mt-6">
                        Search for player
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGame;
