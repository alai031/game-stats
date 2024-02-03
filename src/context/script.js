var API_key = process.env.REACT_APP_RIOT_API_KEY;
var summoner_name = "";
var na_url = "https://na1.api.riotgames.com";
var summonerName = "";
var summoner_level = "";
var profile_pic_url = "";
var soloRankData = "";
var x;

export default async function search_summoner(name) {
  summoner_name = name;
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

  // Ranked
  var summoner_id = dataSummoner_full.id;
  var summonerNameUrl2 = "/lol/league/v4/entries/by-summoner/";
  var ranked_summoner_url =
    na_url + summonerNameUrl2 + summoner_id + "?api_key=" + API_key;
  //console.log(ranked_summoner_url);

  try {
    const rankedSummoner1 = await fetch(ranked_summoner_url);
    const rankedSummoner_full = await rankedSummoner1.json();
    const rankedSummoner_data = rankedSummoner_full[0];
    console.log(rankedSummoner_data);
    /* var summoner_wins = rankedSummoner_data.wins;
        console.log(summoner_wins); */

    //Solo Q Rank
    var lp = rankedSummoner_data.leaguePoints;
    soloRankData =
      rankedSummoner_data.tier +
      " " +
      rankedSummoner_data.rank +
      " " +
      lp +
      " LP";
    //console.log(soloRankData);
  } catch (error) {
    soloRankData = "UNRANKED";
    console.log("Summoner is unranked in solo rank");
  }

  //https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/811yjeWqjYbHDfOgF6Pr1ECrGWrkdsGcKq9xvZzQjIsLAgo?api_key=RGAPI-1bff78e5-ece8-4813-9c47-e8a1f7ae61f4
  //https://https//na1.api.riotgames.com/lol/league/v4/entries/by-summoner/811yjeWqjYbHDfOgF6Pr1ECrGWrkdsGcKq9xvZzQjIsLAgo?api_key=RGAPI-1bff78e5-ece8-4813-9c47-e8a1f7ae61f4
  return {
    name: summonerName,
    level: summoner_level,
    profilePicUrl: profile_pic_url,
    soloRank: soloRankData,
  };
}
