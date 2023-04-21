import { useEffect, useState } from "react";
import { setUser } from "../store";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLoader from "./MainLoader";
import { IKImage } from "imagekitio-react";
import ImageKit from "imagekit";

const ProfileDp = () => {
  const [edit, setEdit] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "users", user.email), (doc) => {
      doc.exists() && setData(doc.data());
    });

    return () => {
      unSub();
      setLoading(false);
    };
  }, []);

  const change = async (e) => {
    var result = imagekit.getAuthenticationParameters();
    console.log(result);
    const reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);
    const file = e.target[0]?.files[0];
    if (!file) toast.error("Enter Image properly");

    // const storageRef = ref(storage, `/files/${file.name}`);
    // const uploadTask = uploadBytesResumable(storageRef, file);

    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const progress = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     setProgresspercent(progress);
    //   },
    //   (error) => {
    //     toast(error);
    //   },
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       user.photoURL = downloadURL;
    //       console.log(downloadURL);
    //       console.log("hi");
    //     });
    //   }
    // );
    toast.warning("url");
  };

  const editProfile = async () => {
    let branch = prompt("Enter Branch");
    let year = prompt("Enter Year");
    try {
      await updateDoc(doc(db, "users", user.email), {
        branch: branch,
        year: year,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {/* {loading ? (
        <MainLoader />
      ) : ( */}
        <div className="flex flex-col items-center  justify-center gap-28 md:gap-10 ">
          <div className=" ">
            <div className="avatar w-fit flex flex-col items-end  ">
              <div className="w-48 md:w-48 rounded-full ">
                {user.photoURL && <img src={user.photoURL} alt="user logo" />}
                {!user.photoURL && (
                  <img src="https://ik.imagekit.io/xji6otwwkb/Profile.png?updatedAt=1680849745697" />
                )}
              </div>
              <IoMdAddCircle
                onClick={() => setEdit(!edit)}
                className="text-5xl md:text-6xl cursor-pointer text-white  -translate-y-16"
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
                        onChange={change}
                      ></input>
                      <button className="btn" onClick={editProfile}>
                        Edit Profile
                      </button>
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
              <h2 className="card-title">{data.displayName}</h2>
              <div className="flex flex-row">
                <p>Email: </p>
                <p>{data.email ? data.email : "N/A"}</p>
              </div>
              <div className="flex flex-row">
                <p>Branch: </p>
                <p>{data.branch ? data.branch : "N/A"}</p>
              </div>
              <div className="flex flex-row">
                <p>Year: </p>
                <p>{data.year ? data.year : "N/A"}</p>
              </div>
              <div className="card-actions mt-8 justify-end">
                {/* <button className="btn btn-primary" onClick={editProfile}>
                  Edit Profile
                </button> */}
                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn">
                  Edit Details
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative h-96 w-96">
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                   

                    <h1 className="text-2xl font-semibold text-center">Enter Your Details</h1>
                    <form className="flex flex-col items-center justify-evenly h-full">
                      <div className="w-full flex flex-col justify-evenly gap-3">
                        <label>Branch</label>
                        <input type="text" name="" required=""  className="h-[3rem] p-2 w-full rounded-xl bg-base-300"/>
                      </div>
                      <div className="w-full flex flex-col justify-evenly gap-3">
                        <label className="font-semibold " >Year</label>
                        <input type="text" name="" required=""  className="h-[3rem] p-2 w-full rounded-xl bg-base-300"/>
                      </div>
                     
                      <button className="w-full border border-white h-[3rem] rounded-lg btn font-bold text-lg">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      {/* )} */}
    </>
  );
};

export default ProfileDp;
