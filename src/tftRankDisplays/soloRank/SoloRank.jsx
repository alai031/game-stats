import React from "react";
import Challenger from "../../leagueRankDisplays/Challenger";
import Grandmaster from "../../leagueRankDisplays/Grandmaster";
import Master from "../../leagueRankDisplays/Master";
import Diamond from "../../leagueRankDisplays/Diamond";
import Emerald from "../../leagueRankDisplays/Emerald";
import Platinum from "../../leagueRankDisplays/Platinum";
import Gold from "../../leagueRankDisplays/Gold";
import Silver from "../../leagueRankDisplays/Silver";
import Bronze from "../../leagueRankDisplays/Bronze";
import Iron from "../../leagueRankDisplays/Iron";
import Unranked from "../../leagueRankDisplays/Unranked";

const SoloRank = (props) => {
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

export default SoloRank;
