import React from "react";
import goldIcon from "../images/gold.webp";

const Gold = (props) => {
  return (
    <div className="flex-column items-center">
      <img
        className="relative left-24 max-w-[150px] max-h-[150px]"
        src={goldIcon}
        alt=""
      />
      <div className="text-center relative bottom-4 left-4">
        <p>{props.gameRank.substring(0, props.gameRank.indexOf(" ", 5))}</p>
        <p className="">
          {props.gameRank.substring(props.gameRank.indexOf(" ", 5) + 1)}
        </p>
      </div>
    </div>
  );
};

export default Gold;
