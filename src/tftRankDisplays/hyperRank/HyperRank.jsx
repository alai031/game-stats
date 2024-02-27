import React from "react";
import blueIcon from "../../images/blue.png";
import greyIcon from "../../images/grey.png";
import greenIcon from "../../images/green.png";
import purpleIcon from "../../images/purple.png";
import hyperIcon from "../../images/hyper.png";
import unrankedIcon from "../../images/unranked.webp";

const HyperRank = (props) => {
  return (
    <div>
      {props.gameRank.includes("BLUE") ? (
        <div className="flex w-full justify-center">
          <div className="flex-column">
            {props.gameType == "Hyper" ? (
              <p className="text-indigo-500 font-bold h-[20px] mt-4 mb-[-20px] flex items-center justify-center">
                Hyper Roll
              </p>
            ) : (
              <></>
            )}
            <img
              className="mb-2 max-w-[150px] max-h-[150px]"
              src={blueIcon}
              alt=""
            />
            <div className="text-center relative bottom-6">
              <p>
                {props.gameRank.substring(0, props.gameRank.indexOf(" ", 5))}
              </p>
              <p className="">
                {props.gameRank.substring(props.gameRank.indexOf(" ", 5) + 1)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {props.gameRank.includes("GREEN") ? (
        <div className="flex w-full justify-center">
          <div className="flex-column">
            {props.gameType == "Hyper" ? (
              <p className="text-indigo-500 font-bold h-[20px] mt-4 mb-[-20px] flex items-center justify-center">
                Hyper Roll
              </p>
            ) : (
              <></>
            )}
            <img
              className="mb-2 max-w-[150px] max-h-[150px]"
              src={greenIcon}
              alt=""
            />
            <div className="text-center relative bottom-6">
              <p>
                {props.gameRank.substring(0, props.gameRank.indexOf(" ", 6))}
              </p>
              <p className="">
                {props.gameRank.substring(props.gameRank.indexOf(" ", 6) + 1)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {props.gameRank.includes("GREY") ? (
        <div className="flex w-full justify-center">
          <div className="flex-column">
            {props.gameType == "Hyper" ? (
              <p className="text-indigo-500 font-bold h-[20px] mt-4 mb-[-20px] flex items-center justify-center">
                Hyper Roll
              </p>
            ) : (
              <></>
            )}
            <img
              className="mb-2 max-w-[150px] max-h-[150px]"
              src={greyIcon}
              alt=""
            />
            <div className="text-center relative bottom-6">
              <p>
                {props.gameRank.substring(0, props.gameRank.indexOf(" ", 5))}
              </p>
              <p className="">
                {props.gameRank.substring(props.gameRank.indexOf(" ", 5) + 1)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {props.gameRank.includes("ORANGE") ? (
        <div className="flex w-full justify-center">
          <div className="flex-column">
            {props.gameType == "Hyper" ? (
              <p className="text-indigo-500 font-bold h-[20px] mt-4 mb-[-20px] flex items-center justify-center">
                Hyper Roll
              </p>
            ) : (
              <></>
            )}
            <img
              className="mb-2 max-w-[150px] max-h-[150px]"
              src={hyperIcon}
              alt=""
            />
            <div className="text-center relative bottom-6">
              <p>
                {props.gameRank.substring(0, props.gameRank.indexOf(" ", 7))}
              </p>
              <p className="">
                {props.gameRank.substring(props.gameRank.indexOf(" ", 7) + 1)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {props.gameRank.includes("PURPLE") ? (
        <div className="flex w-full justify-center">
          <div className="flex-column">
            {props.gameType == "Hyper" ? (
              <p className="text-indigo-500 font-bold h-[20px] mt-4 mb-[-20px] flex items-center justify-center">
                Hyper Roll
              </p>
            ) : (
              <></>
            )}
            <img
              className="mb-2 max-w-[150px] max-h-[150px]"
              src={purpleIcon}
              alt=""
            />
            <div className="text-center relative bottom-6">
              <p>
                {props.gameRank.substring(0, props.gameRank.indexOf(" ", 7))}
              </p>
              <p className="">
                {props.gameRank.substring(props.gameRank.indexOf(" ", 7) + 1)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {props.gameRank.includes("UNRANKED") ? (
        <div className="flex w-full justify-center">
          <div className="flex-column">
            {props.gameType == "Hyper" ? (
              <p className="text-indigo-500 font-bold h-[20px] mt-4 mb-[-20px] flex items-center justify-center">
                Hyper Roll
              </p>
            ) : (
              <></>
            )}
            <img
              className="mb-2 max-w-[150px] max-h-[150px]"
              src={unrankedIcon}
              alt=""
            />
            <div className="text-center relative bottom-6">
              <p>{props.gameRank}</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HyperRank;
