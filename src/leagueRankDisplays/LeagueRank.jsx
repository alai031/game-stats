import React from "react";
import Challenger from "./Challenger";
import Grandmaster from "./Grandmaster";
import Master from "./Master";
import Diamond from "./Diamond";
import Emerald from "./Emerald";
import Platinum from "./Platinum";
import Gold from "./Gold";
import Silver from "./Silver";
import Bronze from "./Bronze";
import Iron from "./Iron";
import Unranked from "./Unranked";

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
        <Grandmaster gameRank={props.gameRank} />
      ) : (
        <></>
      )}

      {/* Master */}
      {props.gameRank.includes("MASTER") && props.gameRank[0] != "G" ? (
        <div>
          <Master gameRank={props.gameRank} />
        </div>
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
        <Emerald gameRank={props.gameRank} />
      ) : (
        <></>
      )}

      {/* Platinum */}
      {props.gameRank.includes("PLATINUM") ? (
        <Platinum gameRank={props.gameRank} />
      ) : (
        <></>
      )}

      {/* Gold */}
      {props.gameRank.includes("GOLD") ? (
        <Gold gameRank={props.gameRank} />
      ) : (
        <></>
      )}

      {/* Silver */}
      {props.gameRank.includes("SILVER") ? (
        <Silver gameRank={props.gameRank} />
      ) : (
        <></>
      )}

      {/* Bronze */}
      {props.gameRank.includes("BRONZE") ? (
        <Bronze gameRank={props.gameRank} />
      ) : (
        <></>
      )}

      {/* Iron */}
      {props.gameRank.includes("IRON") ? (
        <Iron gameRank={props.gameRank} />
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
