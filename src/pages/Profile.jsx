import React, { useEffect } from "react";
import ProfileDp from "../components/ProfileDp";
import ProfileInfo from "../components/ProfileInfo";
import RegisteredEvents from "../components/RegisteredEvents";
import { db } from "../config";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate()
  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     // Do something when the beforeunload event is triggered
  //     console.log("object")
  //     // navigate("/forms")
  //   };

  //   // window.addEventListener('beforeunload', navigate("/"));

  //   return () => {
  //     window.removeEventListener('beforeunload', navigate("/"));
  //   };
  // }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center bg-home-background bg-cover sticky h-screen">
      <ProfileDp />
      <ProfileInfo />
    </div>
  );
};

export default Profile;
