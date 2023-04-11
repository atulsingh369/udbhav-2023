import React from "react";
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";
const ProfileInfo = () => {
  const navigate = useNavigate();
  const easter =()=>{
    navigate("/hidden-easter")
  }
  return (
    <div
      id="spline-animation"
      className="flex items-center justify-center h-full w-full"
    >
      <Spline
        scene="https://prod.spline.design/KWdFdzq04YUoci4P/scene.splinecode"
        className="scale-75"
        onDoubleClick={easter}
      />
    </div>
  );
};

export default ProfileInfo;
