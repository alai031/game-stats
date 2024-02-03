import React from "react";
import unrankedIcon from "../images/unranked.webp";

const Unranked = (props) => {
  return (
    <div className="flex-column items-center">
      <img
        className="relative left-24 max-w-[150px] max-h-[150px]"
        src={unrankedIcon}
        alt=""
      />
      <div className="text-center relative bottom-4">{props.gameRank}</div>
    </div>
  );
};

export default Unranked;
