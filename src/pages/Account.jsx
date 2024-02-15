import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GameStats from "../components/GameStats";
import { UserAuth } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import accountBackground from "../images/accountBackground.jpg";
import Avatar from "react-avatar-edit";
import { arrayUnion, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Account = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [backgroundProfilePic, setBackgroundProfilePic] = useState(null);
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);
  const { user } = UserAuth();
  const urlParam = useParams();
  const statID = doc(db, "users", `${user?.displayName}`);
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState(false);

  const onClose = () => {
    setProfileImg(false);
  };

  const onCrop = async (view) => {
    setProfileImg(true);
    try {
      await updateDoc(statID, {
        profilePic: view,
      });
    } catch (error) {
      alert("Failed to save profile pic");
    }
    //setPreview(view);
  };

  useEffect(() => {
    /* onSnapshot(doc(db, "users", `${user?.displayName}`), (doc) => { */
    onSnapshot(doc(db, "users", urlParam.displayName), (doc) => {
      if (doc.data() == undefined) {
        navigate("/");
      } else {
        setProfilePic(doc.data()?.profilePic);
      }
    });
  }, [urlParam.displayName]);

  const handleProfilePicClick = () => {
    setProfileImg(true);
  };

  return (
    <div className="w-full bg-gradient-to-r from-gray-700 to-blue-400 flex">
      <div className="w-full px-y py-24 z-50">
        <div className="flex-column max-w-[850px] min-h-[600px] mx-auto bg-gray-400 text-white">
          <div className="flex items-center w-full h-[200px] bg-black">
            <div className="pl-16">
              {user?.displayName == urlParam.displayName ? (
                <div>
                  <button onClick={handleProfilePicClick}>
                    <img
                      className="w-[130px] h-[130px] rounded-full bg-white"
                      src={profilePic}
                      alt="/"
                    />
                  </button>
                </div>
              ) : (
                <img
                  className="w-[130px] h-[130px] rounded-full bg-white"
                  src={profilePic}
                  alt="/"
                />
              )}
            </div>
            <div className="pl-16 text-[40px]">{urlParam.displayName}</div>
          </div>

          {user?.displayName == urlParam.displayName ? (
            <div className="flex justify-end">
              <Link to="/addGame">
                <button className="shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white px-8 py-2 mt-6 mr-6">
                  Add a new game stat
                </button>
              </Link>
            </div>
          ) : (
            <></>
          )}
          {/* Game stats */}
          <div className="flex w-full">
            <GameStats />
          </div>
        </div>
        {/* Change profile form */}
        <div
          className={
            profileImg ? "fixed left-0 top-0 w-full h-screen bg-black/50" : ""
          }
        >
          <div
            className={
              profileImg
                ? "h-full flex items-center justify-center"
                : "fixed left-[-100%]"
            }
          >
            <div className="box-border h-[350px] w-[350px] bg-white">
              <p
                className="relative top-2 left-[93%] hover:cursor-pointer"
                onClick={onClose}
              >
                <AiOutlineClose />
              </p>
              <div className="pb-8 h-[100%] flex items-center justify-center">
                <Avatar
                  className=""
                  labelStyle={{ color: "black" }}
                  width={300}
                  height={300}
                  onCrop={onCrop}
                  onClose={onClose}
                  src={src}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
