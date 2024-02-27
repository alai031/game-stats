import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { AiOutlineClose } from "react-icons/ai";
import ironIcon from "../images/iron.webp";
import bronzeIcon from "../images/bronze.webp";
import silverIcon from "../images/silver.webp";
import goldIcon from "../images/gold.webp";
import platinumIcon from "../images/platinum.webp";
import emeraldIcon from "../images/emerald.webp";
import diamondIcon from "../images/diamond.webp";
import masterIcon from "../images/master.webp";
import grandmasterIcon from "../images/grandmaster.webp";
import leagueIcon from "../images/LeagueIcon.png";
import tftIcon from "../images/tftIcon.png";
import Challenger from "../leagueRankDisplays/Challenger";
import Unranked from "../leagueRankDisplays/Unranked";
import LeagueRank from "../leagueRankDisplays/LeagueRank";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TftRank from "../tftRankDisplays/TftRank";

const GameStats = () => {
  const urlParam = useParams();
  console.log(urlParam.displayName);
  const { user } = UserAuth();
  /* const statRef = doc(db, "users", `${user?.displayName}`); */
  const statRef = doc(db, "users", urlParam.displayName);
  const [gameStats, setGameStats] = useState([]);
  const navigate = useNavigate();
  /* console.log("HM", urlParam.displayName);
  console.log(user.displayName); */

  useEffect(() => {
    /* onSnapshot(doc(db, "users", `${user?.displayName}`), (doc) => { */
    onSnapshot(doc(db, "users", urlParam.displayName), (doc) => {
      if (doc.data() == undefined) {
        navigate("/");
      } else {
        setGameStats(doc.data()?.savedGames);
      }
    });
  }, [urlParam.displayName]);

  const deleteStat = async (GameUsername, GameType) => {
    //console.log(urlParam.displayName);
    console.log(GameUsername, GameType);
    try {
      const result = gameStats.filter(
        (stat) =>
          stat.GameUsername !== GameUsername || stat.GameType !== GameType
      );
      await updateDoc(statRef, {
        savedGames: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[90%] mx-auto">
      {gameStats.map((stat) => (
        <div className="bg-blue-300 h-[200px] my-3 border-[3px] border-black">
          {stat.GameType == "League of Legends" ? (
            <div className="flex h-full">
              {/* top half */}
              <div className="w-2/5">
                <div className="flex h-full">
                  <div className="pl-2 pr-6 pt-4 shrink-0">
                    <img
                      className="rounded-full w-[150px] h-[150px] border-[3px] border-black"
                      src={stat.GameProfilePic}
                      alt=""
                    />
                  </div>

                  <div className="flex h-full items-center text-center mx-auto">
                    <div className="">
                      <p className="text-[27px]">{stat.GameUsername}</p>
                      <p className="text-lg"> Level {stat.GameLevel}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-2/5">
                <LeagueRank gameRank={stat.GameRank} />
              </div>

              {/* {stat.GameRank} <br/> */}

              <div className="flex w-1/5">
                <div className="ml-8 flex w-full h-full items-center justify-center">
                  {stat.GameType == "League of Legends" ? (
                    <img
                      className="max-w-[100px] max-h-[100px]"
                      src={leagueIcon}
                      alt=""
                    />
                  ) : (
                    <></>
                  )}
                </div>

                {user?.displayName == urlParam.displayName ? (
                  <div className="">
                    <p
                      onClick={() =>
                        deleteStat(stat.GameUsername, stat.GameType)
                      }
                      className="pt-3 pr-3 hover:cursor-pointer"
                    >
                      <AiOutlineClose />
                    </p>
                  </div>
                ) : (
                  <></>
                )}
              </div>

              {/* bot half */}
              <div className="flex"></div>
            </div>
          ) : (
            <div></div>
          )}
          {stat.GameType == "Teamfight Tactics" ? (
            <div className="flex h-full">
              {/* top half */}
              <div className="w-2/5">
                <div className="flex h-full">
                  <div className="pl-2 pr-6 pt-4 shrink-0">
                    <img
                      className="rounded-full w-[150px] h-[150px] border-[3px] border-black"
                      src={stat.GameProfilePic}
                      alt=""
                    />
                  </div>

                  <div className="flex h-full items-center text-center mx-auto">
                    <div className="">
                      <p className="text-[27px]">{stat.GameUsername}</p>
                      <p className="text-lg"> Level {stat.GameLevel}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-2/5 mr-4">
                <TftRank
                  soloRank={stat.SoloTftRank}
                  doublesRank={stat.DoublesTftRank}
                  hyperRank={stat.HyperTftRank}
                />
              </div>

              {/* {stat.GameRank} <br/> */}

              <div className="flex w-1/5">
                <div className="ml-8 flex w-full h-full items-center justify-center">
                  {stat.GameType == "Teamfight Tactics" ? (
                    <img
                      className="max-w-[100px] max-h-[100px]"
                      src={tftIcon}
                      alt=""
                    />
                  ) : (
                    <></>
                  )}
                </div>

                {user?.displayName == urlParam.displayName ? (
                  <div className="">
                    <p
                      onClick={() =>
                        deleteStat(stat.GameUsername, stat.GameType)
                      }
                      className="pt-3 pr-3 hover:cursor-pointer"
                    >
                      <AiOutlineClose />
                    </p>
                  </div>
                ) : (
                  <></>
                )}
              </div>

              {/* bot half */}
              <div className="flex"></div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GameStats;
