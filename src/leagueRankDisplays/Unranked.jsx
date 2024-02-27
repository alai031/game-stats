import React from "react";
import unrankedIcon from "../images/unranked.webp";

const Unranked = (props) => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex-column">
        {props.gameType == "SoloTft" ? (
          <p className="text-indigo-500 font-bold h-[20px] mt-4 mb-[-20px] flex items-center justify-center">
            Solo
          </p>
        ) : (
          <></>
        )}
        {props.gameType == "DoubleUp" ? (
          <p className="text-indigo-500 font-bold h-[20px] mt-4 mb-[-20px] flex items-center justify-center">
            Double Up
          </p>
        ) : (
          <></>
        )}
        <img
          className="mb-2 max-w-[150px] max-h-[150px]"
          src={unrankedIcon}
          alt=""
        />
        <div className="text-center relative bottom-6">{props.gameRank}</div>
      </div>
    </div>
  );
};

export default Unranked;
