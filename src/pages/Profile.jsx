import React from "react";
import ProfileDp from "../components/ProfileDp";
import ProfileInfo from "../components/ProfileInfo";
import RegisteredEvents from "../components/RegisteredEvents";

const Profile = () => {
  return (
    <div className="h-screen  bg-white justify-evenly">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center bg-base-100 sticky">
        <ProfileDp />
        <ProfileInfo />
      </div>
      <RegisteredEvents />
    </div>
  );
};

export default Profile;
