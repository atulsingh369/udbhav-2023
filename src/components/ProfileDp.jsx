import React from "react";
import { IoMdAddCircle } from "react-icons/io";
const ProfileDp = () => {
  return (
    <div>
      <div className="avatar w-fit flex flex-col items-end">
        <div className="w-56 rounded-full ">
          <img src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/dp.png?updatedAt=1680849763188" />
        </div>
        <IoMdAddCircle className="text-6xl text-white -translate-y-16" />
      </div>
    </div>
  );
};

export default ProfileDp;
