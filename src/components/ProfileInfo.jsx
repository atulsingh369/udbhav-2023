import React from "react";
import Spline from "@splinetool/react-spline";

const ProfileInfo = () => {
  return (
    <div
      id="spline-animation"
      className="flex items-center justify-center h-full w-full"
    >
      <Spline
        scene="https://prod.spline.design/KWdFdzq04YUoci4P/scene.splinecode"
        className="scale-75"
      />
    </div>
  );
};

export default ProfileInfo;
