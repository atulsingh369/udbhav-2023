import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../config";
import { useNavigate } from "react-router-dom";

const ProfileDp = () => {
  const [edit, setEdit] = useState(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const change = async (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];

    if (!file) navigate("/profile");

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          user.photoURL = downloadURL;
          console.log(downloadURL);
          console.log("hi");
        });
      }
    );
  };

  const editProfile = () => {
    let branch = prompt("Enter Branch");
    let year = prompt("Enter Year");
    console.log(user, branch, year);
    // () => {
    //   updateProfile(user, {
    //     branch: branch,
    //     year: year,
    //   })
    //     .then(() => {
    //       console.log("Profile Updated");
    //       window.alert("Updated");
    //       setLoading(false);
    //       dispatch(setUser(user));
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
  };

  return (
    <div className="flex flex-col items-center h-full justify-center gap-28 md:gap-10">
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
                  <label htmlFor="files" className="btn">
                    Edit DP
                  </label>
                  <input
                    id="files"
                    className="hidden"
                    type="file"
                    accept="image/*"
                    onChange={change}></input>
                  <a className="btn">Edit Profile</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div
        id="card-profile"
        className="card w-96 text-white border border-white">
        <div className="card-body">
          <h2 className="card-title">{user.displayName}</h2>
          <p>Branch</p>
          <p>Batch/Year</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={editProfile}>
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDp;
