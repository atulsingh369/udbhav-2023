import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
const ProfileDp = () => {
  const [edit, setEdit] = useState(false);
  return (
    <div className="bg-base-100 pt-20">
      <div className="avatar w-fit flex flex-col items-end ">
        <div className="w-56 rounded-full ">
          <img src="https://ik.imagekit.io/e5ixuxrlb/Udbhav/dp.png?updatedAt=1680849763188" />
        </div>
        <IoMdAddCircle
          onClick={() => setEdit(!edit)}
          className="text-6xl text-white  -translate-y-16"
        />
        {edit && (
          <div>
            <ul>
              <li className="flex flex-col absolute  -translate-y-24 gap-5">
                <a className="btn">Edit DP</a>
                <a className="btn">Edit Profile</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDp;
