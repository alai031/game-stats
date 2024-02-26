import React from "react";
import blueIcon from "../../images/blue.png";
import greyIcon from "../../images/grey.png";
import greenIcon from "../../images/green.png";
import purpleIcon from "../../images/purple.png";
import hyperIcon from "../../images/hyper.png";

const HyperRank = (props) => {
  return (
    <div>
      {props.gameRank.includes("BLUE") ? (
        <div className="flex w-full justify-center">
          <div className="flex-column">
            <img
              className="max-w-[150px] max-h-[150px]"
              src={blueIcon}
              alt=""
            />
            <div className="text-center relative bottom-4">
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
            <img
              className="max-w-[150px] max-h-[150px]"
              src={greenIcon}
              alt=""
            />
            <div className="text-center relative bottom-4">
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
            <img
              className="max-w-[150px] max-h-[150px]"
              src={greyIcon}
              alt=""
            />
            <div className="text-center relative bottom-4">
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
            <img
              className="max-w-[150px] max-h-[150px]"
              src={hyperIcon}
              alt=""
            />
            <div className="text-center relative bottom-4">
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
            <img
              className="max-w-[150px] max-h-[150px]"
              src={purpleIcon}
              alt=""
            />
            <div className="text-center relative bottom-4">
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
    </div>
  );
};

export default HyperRank;
