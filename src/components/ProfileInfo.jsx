import React from "react";

const ProfileInfo = () => {
  return (
    <div className="flex flex-col justify-evenly text-white md:pt-20 bg-base-100 items-center -mt-5 gap-5 mb-5 md:mb-0">
      <div className="flex flex-row items-end gap-5">
        <h1 className="text-3xl font-semibold">Abhishek Kant</h1>
        <h1 className="text-1xl font-bold">User's UDBHAV ID</h1>
      </div>
      <div>
        <h1 className="text-lg md:text-2xl ">Branch</h1>
        <h1 className="text-lg md:text-2xl ">Batch</h1>
        <h1 className="text-lg md:text-2xl ">Number of Events Participated</h1>
      </div>
    </div>
  );
};

export default ProfileInfo;
