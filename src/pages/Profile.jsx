import React, { useEffect } from "react";
import ProfileDp from "../components/ProfileDp";
import ProfileInfo from "../components/ProfileInfo";
import RegisteredEvents from "../components/RegisteredEvents";
import { db } from "../config";
import { collection, getDocs } from "firebase/firestore";

const Profile = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center bg-home-background bg-cover sticky h-screen">
      <ProfileDp />
      <ProfileInfo />
    </div>
   
  );
};

export default Profile;
