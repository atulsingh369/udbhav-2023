import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useSelector } from "react-redux";

const ProfileDp = () => {
  const [edit, setEdit] = useState(false);
  const user = useSelector((state) => state.user);
  return (
    <div
      div
      className="flex flex-col items-center h-full justify-center gap-28 md:gap-10"
    >
      <div className=" ">
        <div className="avatar w-fit flex flex-col items-end  ">
          <div className="w-48 md:w-48 rounded-full ">
            {user.photoURL && <img src={user.photoURL} />}
            {!user.photoURL && (
              <img src="https://ik.imagekit.io/xji6otwwkb/Profile.png?updatedAt=1680849745697" />
            )}
          </div>
          <IoMdAddCircle
            onClick={() => setEdit(!edit)}
            className="text-5xl md:text-6xl text-white  -translate-y-16"
          />
          {edit && (
            <div>
              <ul>
                <li className="flex flex-col md:flex-row absolute  -translate-y-24 gap-2">
                  <a className="btn">Edit DP</a>
                  <a className="btn">Edit Profile</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div
        id="card-profile"
        className="card w-96 text-white border border-white"
      >
        <div className="card-body">
          <h2 className="card-title">Abhishek Kant</h2>
          <p>Branch</p>
          <p>Batch/Year</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDp;
