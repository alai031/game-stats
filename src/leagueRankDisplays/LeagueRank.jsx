import React from "react";
import Challenger from "./Challenger";
import Diamond from "./Diamond";
import Unranked from "../leagueRankDisplays/Unranked";

const LeagueRank = (props) => {
  return (
    <div>
      {/* Challenger */}
      {props.gameRank.includes("CHALLENGER") ? (
        <Challenger gameRank={props.gameRank} />
      ) : (
        <></>
      )}

      {/* Grandmaster */}
      {props.gameRank.includes("GRANDMASTER") ? (
        <Challenger gameRank={props.gameRank} />
      ) : (
        <></>
      )}

      {/* Master */}
      {props.gameRank.includes("MASTER") ? (
        <Challenger gameRank={props.gameRank} />
      ) : (
        <></>
      )}

      {/* Diamond */}
      {props.gameRank.includes("DIAMOND") ? (
        <Diamond gameRank={props.gameRank} />
      ) : (
        <></>
      )}

      {/* Emerald */}
      {props.gameRank.includes("EMERALD") ? (
        <Challenger gameRank={props.gameRank} />
      ) : (
        <></>
      )}

      {/* Platinum */}
      {props.gameRank.includes("PLATINUM") ? (
        <Challenger gameRank={props.gameRank} />
      ) : (
        <></>
      )}

      {/* Gold */}
      {props.gameRank.includes("GOLD") ? (
        <Challenger gameRank={props.gameRank} />
      ) : (
        <></>
      )}

      {/* Silver */}
      {props.gameRank.includes("SILVER") ? (
        <Challenger gameRank={props.gameRank} />
      ) : (
        <></>
      )}

      {/* Bronze */}
      {props.gameRank.includes("BRONZE") ? (
        <Challenger gameRank={props.gameRank} />
      ) : (
        <></>
      )}

      {/* Iron */}
      {props.gameRank.includes("IRON") ? (
        <Challenger gameRank={props.gameRank} />
      ) : (
        <></>
      )}

      {/* Unranked */}
      {props.gameRank.includes("UNRANKED") ? (
        <Unranked gameRank={props.gameRank} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default LeagueRank;
