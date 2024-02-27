import React from "react";
import grandmasterIcon from "../images/grandmaster.webp";

const Grandmaster = (props) => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex-column">
        {props.gameType == "SoloTft" ? (
          <p className="text-indigo-500 font-bold h-[20px] mt-4 mb-[-30px] flex items-center justify-center">
            Solo
          </p>
        ) : (
          <></>
        )}
        {props.gameType == "DoubleUp" ? (
          <p className="text-indigo-500 font-bold h-[20px] mt-4 mb-[-30px] flex items-center justify-center">
            Double Up
          </p>
        ) : (
          <></>
        )}
        <img
          className="mb-2 max-w-[150px] max-h-[150px]"
          src={grandmasterIcon}
          alt=""
        />
        <div className="text-center relative bottom-6">
          <p>{props.gameRank.substring(0, props.gameRank.indexOf(" ", 12))}</p>
          <p className="">
            {props.gameRank.substring(props.gameRank.indexOf(" ", 12) + 1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grandmaster;
