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

  return (
    <>
      <div className="bg-base-100 pt-20">
        <div className="avatar w-fit flex flex-col items-end  ">
          <div className="w-36 md:w-48 rounded-full ">
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
    </>
  );
};

export default ProfileDp;
