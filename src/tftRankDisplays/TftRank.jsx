import React from "react";
import SoloRank from "./soloRank/SoloRank";
import DoublesRank from "./doublesRank/DoublesRank";
import HyperRank from "./hyperRank/HyperRank";

const TftRank = (props) => {
  return (
    <div className="flex">
      {/*  Solo rank */}
      <SoloRank gameRank={props.soloRank} />
      {/*  Doubles rank */}
      <DoublesRank gameRank={props.doublesRank} />
      {/*  Hyper rank */}
      <HyperRank gameRank={props.hyperRank} />
    </div>
  );
};

export default TftRank;
