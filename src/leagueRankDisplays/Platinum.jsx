import React from "react";
import platinumIcon from "../images/platinum.webp";

const Platinum = (props) => {
  return (
    <div className="flex-column items-center">
      <img
        className="relative left-24 max-w-[150px] max-h-[150px]"
        src={platinumIcon}
        alt=""
      />
      <div className="text-center relative bottom-4 left-4">
        <p>{props.gameRank.substring(0, props.gameRank.indexOf(" ", 9))}</p>
        <p className="">
          {props.gameRank.substring(props.gameRank.indexOf(" ", 9) + 1)}
        </p>
      </div>
    </div>
  );
};

export default Platinum;
