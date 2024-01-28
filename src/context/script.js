var API_key = "RGAPI-7068049e-8548-415d-bde9-f3ffe51db3a7";
var summoner_name = "";
var na_url = "https://na1.api.riotgames.com";

export default async function search_summoner(name){
    summoner_name = name;
    var x = await getData();
    //console.log(x);
    return x;
};

async function getData(){
    var summonerNameUrl = "/lol/summoner/v4/summoners/by-name/"+summoner_name;
    var fullSummonerNameUrl = na_url+summonerNameUrl+"?api_key="+API_key;
    //console.log(fullSummonerNameUrl);
    const dataSummoner_1 = await fetch(fullSummonerNameUrl);
    const dataSummoner_full = await dataSummoner_1.json();
    console.log(dataSummoner_full);

    // Summoner's level
    var summoner_level = dataSummoner_full.summonerLevel;
    var summonerName = dataSummoner_full.name;
    //console.log(summoner_level);

    // Summoner's profile picture
    var profile_pic_number = dataSummoner_full.profileIconId;
    var profile_pic_url = "https://ddragon.leagueoflegends.com/cdn/14.2.1/img/profileicon/"+profile_pic_number+".png";
    return {
        name: summonerName,
        level: summoner_level,
        profilePicUrl: profile_pic_url
    };
}