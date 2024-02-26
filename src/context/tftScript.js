var API_key = process.env.REACT_APP_RIOT_API_TFT_KEY;
var summoner_name = "";
var summonerName = "";
var summoner_level = "";
var profile_pic_url = "";
var na_url = "https://na1.api.riotgames.com";
var x;
var soloTftRankData = "";
var doublesTftRankData = "";
var hyperTftRankData = "";

export default async function searchTftSummoner(name) {
  summoner_name = name;
  soloTftRankData = "UNRANKED";
  doublesTftRankData = "UNRANKED";
  hyperTftRankData = "UNRANKED";
  try {
    x = await getData();
    console.log("Got data");
    return x;
  } catch (error) {
    console.log("Failed to get data");
  }
}

async function getData() {
  var summonerNameUrl = "/lol/summoner/v4/summoners/by-name/" + summoner_name;
  var fullSummonerNameUrl = na_url + summonerNameUrl + "?api_key=" + API_key;
  //console.log(fullSummonerNameUrl);
  const dataSummoner_1 = await fetch(fullSummonerNameUrl);
  const dataSummoner_full = await dataSummoner_1.json();
  //console.log(dataSummoner_full);

  // Summoner's level
  summoner_level = dataSummoner_full.summonerLevel;
  summonerName = dataSummoner_full.name;
  //console.log(summoner_level);

  // Summoner's profile picture
  var profile_pic_number = dataSummoner_full.profileIconId;
  profile_pic_url =
    "https://ddragon.leagueoflegends.com/cdn/14.2.1/img/profileicon/" +
    profile_pic_number +
    ".png";

  // TFT Rank
  var summoner_id = dataSummoner_full.id;
  //console.log(summoner_id);
  var summonerNameUrl2 = "/tft/league/v1/entries/by-summoner/";
  var ranked_summoner_url =
    na_url + summonerNameUrl2 + summoner_id + "?api_key=" + API_key;
  //console.log(ranked_summoner_url);

  try {
    const rankedSummoner1 = await fetch(ranked_summoner_url);
    const rankedSummoner_full = await rankedSummoner1.json();
    //console.log(rankedSummoner_full);
    for (let i = 0; i < rankedSummoner_full.length; ++i) {
      let rankedSummoner_data = rankedSummoner_full[i];
      if (rankedSummoner_data.queueType == "RANKED_TFT") {
        soloTftRankData =
          rankedSummoner_data.tier +
          " " +
          rankedSummoner_data.rank +
          " " +
          rankedSummoner_data.leaguePoints +
          " LP";
        console.log(soloTftRankData);
      } else if (rankedSummoner_data.queueType == "RANKED_TFT_DOUBLE_UP") {
        doublesTftRankData =
          rankedSummoner_data.tier +
          " " +
          rankedSummoner_data.rank +
          " " +
          rankedSummoner_data.leaguePoints +
          " LP";
        console.log(doublesTftRankData);
      } else if (rankedSummoner_data.queueType == "RANKED_TFT_TURBO") {
        hyperTftRankData =
          rankedSummoner_data.ratedTier + " " + rankedSummoner_data.ratedRating;
        console.log(hyperTftRankData);
      }
    }
  } catch (error) {
    console.log("Summoner does not play any TFT");
  }

  //https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/811yjeWqjYbHDfOgF6Pr1ECrGWrkdsGcKq9xvZzQjIsLAgo?api_key=RGAPI-1bff78e5-ece8-4813-9c47-e8a1f7ae61f4
  //https://https//na1.api.riotgames.com/lol/league/v4/entries/by-summoner/811yjeWqjYbHDfOgF6Pr1ECrGWrkdsGcKq9xvZzQjIsLAgo?api_key=RGAPI-1bff78e5-ece8-4813-9c47-e8a1f7ae61f4
  return {
    name: summonerName,
    level: summoner_level,
    profilePicUrl: profile_pic_url,
    soloTftRank: soloTftRankData,
    doublesTftRank: doublesTftRankData,
    hyperTftRank: hyperTftRankData,
  };
}
