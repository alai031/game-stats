import React from "react";
import unrankedIcon from "../images/unranked.webp";

const Unranked = (props) => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex-column">
        <img
          className="max-w-[150px] max-h-[150px]"
          src={unrankedIcon}
          alt=""
        />
        <div className="relative bottom-4 left-8">{props.gameRank}</div>
      </div>
    </div>
  );
};

export default Unranked;
