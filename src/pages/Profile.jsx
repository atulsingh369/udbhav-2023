import React, { useEffect, useState } from "react";
import ProfileDp from "../components/ProfileDp";
import ProfileInfo from "../components/ProfileInfo";
import RegisteredEvents from "../components/RegisteredEvents";
import { auth, db } from "../config";
import { doc, onSnapshot } from "firebase/firestore";
import { useSelector } from "react-redux";
// import { collection, getDocs } from "firebase/firestore";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [event, setEvent] = useState(null);
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "users", user.email), (doc) => {
      doc.exists() && setEvent(doc.data().events);
    });

    return () => {
      unSub();
    };
  }, []);
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center bg-home-background bg-cover sticky h-screen">
        <ProfileDp />
        <ProfileInfo />
      </div>
      <div className="w-full h-fit p-5 flex justify-around items-center text-white">
        {event &&
          event.map((item, i) => {
            return (
              <div
                className="rounded-lg flex flex-col p-3 justify-center items-start border-2 border-white"
                key={i}
              >
                <h3 className="text-center font-bold text-2xl capitalize">
                  {item.eventName}
                </h3>
                {item.Members.map((member, index) => {
                  return <p key={index}>{member.mName}</p>;
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Profile;
