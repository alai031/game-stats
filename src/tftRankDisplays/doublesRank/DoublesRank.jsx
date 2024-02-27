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

const DoublesRank = (props) => {
  return (
    <div>
      {/* Challenger */}
      {props.gameRank.includes("CHALLENGER") ? (
        <Challenger gameRank={props.gameRank} gameType={props.gameType} />
      ) : (
        <></>
      )}

      {/* Grandmaster */}
      {props.gameRank.includes("GRANDMASTER") ? (
        <Grandmaster gameRank={props.gameRank} gameType={props.gameType} />
      ) : (
        <></>
      )}

      {/* Master */}
      {props.gameRank.includes("MASTER") && props.gameRank[0] != "G" ? (
        <div>
          <Master gameRank={props.gameRank} gameType={props.gameType} />
        </div>
      ) : (
        <></>
      )}

      {/* Diamond */}
      {props.gameRank.includes("DIAMOND") ? (
        <Diamond gameRank={props.gameRank} gameType={props.gameType} />
      ) : (
        <></>
      )}

      {/* Emerald */}
      {props.gameRank.includes("EMERALD") ? (
        <Emerald gameRank={props.gameRank} gameType={props.gameType} />
      ) : (
        <></>
      )}

      {/* Platinum */}
      {props.gameRank.includes("PLATINUM") ? (
        <Platinum gameRank={props.gameRank} gameType={props.gameType} />
      ) : (
        <></>
      )}

      {/* Gold */}
      {props.gameRank.includes("GOLD") ? (
        <Gold gameRank={props.gameRank} gameType={props.gameType} />
      ) : (
        <></>
      )}

      {/* Silver */}
      {props.gameRank.includes("SILVER") ? (
        <Silver gameRank={props.gameRank} gameType={props.gameType} />
      ) : (
        <></>
      )}

      {/* Bronze */}
      {props.gameRank.includes("BRONZE") ? (
        <Bronze gameRank={props.gameRank} gameType={props.gameType} />
      ) : (
        <></>
      )}

      {/* Iron */}
      {props.gameRank.includes("IRON") ? (
        <Iron gameRank={props.gameRank} gameType={props.gameType} />
      ) : (
        <></>
      )}

      {/* Unranked */}
      {props.gameRank.includes("UNRANKED") ? (
        <Unranked gameRank={props.gameRank} gameType={props.gameType} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default DoublesRank;
