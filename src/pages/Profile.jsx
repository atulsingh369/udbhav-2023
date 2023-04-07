import React from "react";
import ProfileDp from "../components/ProfileDp";
import ProfileInfo from "../components/ProfileInfo";

const Profile = () => {
  return (
    <div className="h-screen  bg-white justify-evenly">
      <div className="grid grid">
        <ProfileDp />
        <ProfileInfo />
      </div>
    </div>
  );
};

export default Profile;
