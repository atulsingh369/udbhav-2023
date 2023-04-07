import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useSelector } from "react-redux";

const ProfileDp = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <div className="avatar w-fit flex flex-col items-end">
        <div className="w-56 rounded-full ">
          {user.photoURL && <img src={user.photoURL} />}
          {!user.photoURL && (
            <img src="https://ik.imagekit.io/xji6otwwkb/Profile.png?updatedAt=1680849745697" />
          )}
        </div>
        <IoMdAddCircle className="text-6xl text-white -translate-y-16" />
      </div>
    </div>
  );
};

export default ProfileDp;
