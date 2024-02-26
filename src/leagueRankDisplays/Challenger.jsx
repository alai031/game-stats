import React from "react";
import challengerIcon from "../images/challenger.webp";

const Challenger = (props) => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex-column">
        <img
          className="max-w-[150px] max-h-[150px]"
          src={challengerIcon}
          alt=""
        />
        <div className="text-center relative bottom-4">
          <p>{props.gameRank.substring(0, props.gameRank.indexOf(" ", 11))}</p>
          <p className="">
            {props.gameRank.substring(props.gameRank.indexOf(" ", 11) + 1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Challenger;
