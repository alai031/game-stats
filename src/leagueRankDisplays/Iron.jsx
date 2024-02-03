import React from "react";
import ironIcon from "../images/iron.webp";

const Iron = (props) => {
  return (
    <div className="flex-column items-center">
      <img
        className="relative left-24 max-w-[150px] max-h-[150px]"
        src={ironIcon}
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

export default Iron;
