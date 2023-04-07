import React from "react";

const ProfileInfo = () => {
  return (
    <div className="flex flex-col justify-evenly text-white bg-base-100 ">
      <div>
        <h1 className="text-3xl font-semibold">Abhishek Kant</h1>
        <h1 className="text-1xl font-bold">User's UDBHAV ID</h1>
      </div>
      <div>
        <h1 className="text-2xl ">Branch</h1>
        <h1 className="text-2xl ">Batch</h1>
        <h1 className="text-2xl ">Number of Events Participated</h1>
      </div>
    </div>
  );
};

export default ProfileInfo;
