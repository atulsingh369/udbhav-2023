import React, { useEffect, useState } from "react";
import ProfileDp from "../components/ProfileDp";
import ProfileInfo from "../components/ProfileInfo";
import RegisteredEvents from "../components/RegisteredEvents";
import { auth, db } from "../config";
import { doc, onSnapshot } from "firebase/firestore";
import { useSelector } from "react-redux";
import PdfPrint from "../components/PdfPrint";
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
    <div className="flex flex-col  bg-home-background bg-cover relative">
      {/* <PdfPrint /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center sticky h-screen">
        <ProfileDp />
        <ProfileInfo />
      </div>
      {event && (
        <div className="flex flex-col gap-10">
          <h1 className="text-white font-bold text-3xl text-center">Events</h1>
          <div className="w-full h-fit p-5 flex flex-col md:flex-row flex-wrap gap-10 justify-around items-center text-white">
            {event.map((item, i) => {
              return (
                // <div
                //   className="rounded-lg flex flex-col p-3 justify-center items-start border-2 border-white"
                //   key={i}
                // >
                //   <h3 className="text-center font-bold text-2xl capitalize">
                //     {item.eventName}
                //   </h3>
                //   {item.Members.map((member, index) => {
                //     return <p key={index}>{member.mName}</p>;
                //   })}
                // </div>
                <div
                  className="card w-96 shadow-md border border-white shadow-white h-60 overflow-scroll cursor-no-drop hover:scale-105 transition-all duration-500"
                  key={i}
                >
                  <div className="card-body">
                    <h2 className="card-title capitalize text-2xl self-center ">
                      {item.eventName}
                    </h2>
                    <h2 className="card-title capitalize text-lg">
                      Team : &nbsp;{item.teamName}
                    </h2>
                    {item.Members.map((member, index) => {
                      return (
                        <div className="flex justify-between" key={index}>
                          <h1>{member.mName}</h1>
                          <h1>{member.phnNo}</h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
