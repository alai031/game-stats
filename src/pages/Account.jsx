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
import defaultProfilePic from "../images/defaultProfilePic.png";
import defaultProfileBackgroundPic from "../images/defaultProfileBackground.jpg";
import ImageUploadingButton from "../components/ImageUploadingButton";
import ImageCropper from "../components/ImageCropper";

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
  const [backgroundToggle, setBackgroundToggle] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [image, setImage] = useState([]);

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
  };

  const onCropBackgroundPic = async (view) => {
    try {
      await updateDoc(statID, {
        profileBackgroundPic: view,
      });
    } catch (error) {
      alert("Failed to save background profile pic");
    }
  };

  useEffect(() => {
    /* onSnapshot(doc(db, "users", `${user?.displayName}`), (doc) => { */
    onSnapshot(doc(db, "users", urlParam.displayName), (doc) => {
      if (doc.data() == undefined) {
        navigate("/");
      } else {
        setProfilePic(doc.data()?.profilePic);
        setBackgroundProfilePic(doc.data()?.profileBackgroundPic);
      }
    });
  }, [urlParam.displayName]);

  const handleProfilePicClick = () => {
    setProfileImg(true);
    setBackgroundToggle(false);
  };

  return (
    <div className="w-full bg-gradient-to-r from-gray-700 to-blue-400 flex">
      <div className="w-full px-y py-24 z-50">
        <div className="flex-column max-w-[1150px] min-h-[600px] mx-auto bg-gray-400 text-white rounded-xl">
          <div className="flex items-center w-[full] h-[200px] bg-black rounded-t-xl">
            <img
              className="absolute object-fill w-[1150px] h-[200px] rounded-t-xl"
              src={
                backgroundProfilePic == null
                  ? defaultProfileBackgroundPic
                  : backgroundProfilePic
              }
              alt="/"
            />
            <div className="pl-16 z-10">
              {user?.displayName == urlParam.displayName ? (
                //<div className="w-[130px] h-[130px] rounded-full bg-gray-300">
                <button onClick={handleProfilePicClick}>
                  <img
                    className="w-[160px] h-[160px] rounded-full border-4 border-white"
                    src={profilePic == null ? defaultProfilePic : profilePic}
                    alt="/"
                  />
                </button>
              ) : (
                //</div>
                <img
                  className="w-[160px] h-[160px] rounded-full border-4 border-white"
                  src={profilePic == null ? defaultProfilePic : profilePic}
                  alt="/"
                />
              )}
            </div>
            {user?.displayName == urlParam.displayName ? (
              <div className="relative bottom-[32%] left-[75%]">
                <ImageUploadingButton
                  className="w-[30px] h-[30px] z-10 bg-white rounded-full"
                  value={image}
                  onChange={(newImage) => {
                    setDialogOpen(true);
                    setImage(newImage);
                  }}
                />
                <ImageCropper
                  open={dialogOpen}
                  image={image.length > 0 && image[0].dataURL}
                  onComplete={(imagePromisse) => {
                    imagePromisse.then((image) => {
                      setBackgroundProfilePic(image);
                      onCropBackgroundPic(image);
                      setDialogOpen(false);
                    });
                  }}
                  containerStyle={{
                    position: "relative",
                    width: "100%",
                    height: 300,
                    background: "#333",
                  }}
                />
              </div>
            ) : (
              <></>
            )}
            <div className="pl-4 text-[40px] z-10">{urlParam.displayName}</div>
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
          <div className="flex w-full pb-6">
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
                  className="mb-8"
                  labelStyle={{
                    position: "",
                    display: "block",
                    color: "black",
                    width: 300,
                    height: 300,
                  }}
                  width={300}
                  height={300}
                  /* imageWidth={400}
                  imageHeight={400} */
                  onCrop={
                    backgroundToggle == false ? onCrop : onCropBackgroundPic
                  }
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
