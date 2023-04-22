import { useEffect, useState } from "react";
import { setUser } from "../store";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../config";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLoader from "./MainLoader";
import { IKImage } from "imagekitio-react";
import ImageKit from "imagekit";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { updateProfile } from "@firebase/auth";

const ProfileDp = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const initialValues = {
    phnNo: "",
    branch: "select",
    year: "select",
  };

  const [branchYear, setBranchYear] = useState(initialValues);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "users", user.email), (doc) => {
      doc.exists() && setData(doc.data());
    });

    return () => {
      unSub();
      setLoading(false);
    };
  }, []);

  const handleImgChange = async (e) => {
    const image = e.target.files[0];
    const imageRef = ref(storage, user.displayName);
    await uploadBytes(imageRef, image);
    const url = await getDownloadURL(imageRef);
    await updateProfile(auth.currentUser, {
      photoURL: url,
    });
    const res = auth.currentUser;
    dispatch(setUser(res));
  };

  const editProfile = async (e) => {
    e.preventDefault();
    try {
      if (!branchYear.branch || !branchYear.year) {
        toast.error("Enter Details");
        setBranchYear(initialValues);
        return;
      } else {
        await updateDoc(doc(db, "users", user.email), {
          phnNo: branchYear.phnNo,
          branch: branchYear.branch,
          year: branchYear.year,
        });
        setBranchYear(initialValues);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {/* {loading ? (
        <MainLoader />
      ) : ( */}
      <div className="flex flex-col items-center w-full  justify-center gap-28 md:gap-10  pt-24">
        <div className=" ">
          <div className="avatar w-fit flex flex-col items-end  ">
            <div className="w-48 md:w-48 rounded-full ">
              {user.photoURL && <img src={user.photoURL} alt="user logo" />}
              {!user.photoURL && (
                <img src="https://ik.imagekit.io/xji6otwwkb/Profile.png?updatedAt=1680849745697" />
              )}
            </div>
            <input
              type="file"
              id="img"
              className="hidden"
              onChange={handleImgChange}
            />
            <label htmlFor="img">
              <IoMdAddCircle className="text-5xl md:text-6xl cursor-pointer text-white  -translate-y-16" />
            </label>
          </div>
        </div>
        <div
          id="card-profile"
          className="card w-80 md:w-96 text-white border border-white">
          <div className="card-body">
            <h2 className="card-title">{data.displayName}</h2>
            <div className="flex justify-between">
              <h3>Email: </h3>
              <h3>{data.email ? data.email : "N/A"}</h3>
            </div>
            <div className="flex justify-between">
              <h3>Mbl No: </h3>
              <h3>{data.phnNo ? data.phnNo : "N/A"}</h3>
            </div>
            <div className="flex justify-between">
              <h3>Branch: </h3>
              <h3>{data.branch ? data.branch : "N/A"}</h3>
            </div>
            <div className="flex justify-between">
              <h3>Year: </h3>
              <h3>{data.year ? data.year : "N/A"}</h3>
            </div>
            <div className="card-actions mt-8 justify-end">
              <label htmlFor="my-modal-3" className="btn">
                Edit Details
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal ">
                <div className="modal-box relative h-96 w-96 bg-[#141e30]">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2 text-[#03e9f4] bg-[#141e30] border border-[#03e9f4]">
                    ✕
                  </label>

                  <h1 className="text-2xl font-semibold text-center">
                    Enter Your Details
                  </h1>
                  <form
                    onSubmit={editProfile}
                    className="flex flex-col items-center justify-evenly h-full">
                    <div className="w-full flex flex-col justify-evenly gap-3">
                      <div className="user-box">
                        <div className="flex flex-col">
                        <label className="text-[#03e9f4] font-semibold">Phone No*</label>

                        <input
                        className=" h-[3rem]  p-2 w-full rounded-xl border border-[#03e9f4] bg-[#141e30]"
                          maxlength="10"
                          type="tel"
                          name="phnNo"
                          value={branchYear.phnNo}
                          onChange={(e) =>
                            setBranchYear({
                              ...branchYear,
                              phnNo: e.target.value,
                            })
                          }
                          required=""
                          />
                          </div>
                      </div>
                      <label className="text-[#03e9f4] font-semibold">
                        Branch
                      </label>
                      <select
                        name="selectedFruit"
                        className="h-[3rem] p-2 w-full rounded-xl border border-[#03e9f4] bg-[#141e30]"
                        onChange={(e) =>
                          setBranchYear({
                            ...branchYear,
                            branch: e.target.value,
                          })
                        }>
                        <option>--SELECT--</option>
                        <option>CSE</option>
                        <option>EE</option>
                        <option>ELEX</option>
                        <option>CE</option>
                        <option>ME</option>
                        <option>ICE</option>
                        <option>IPE</option>
                      </select>
                    </div>
                    <div className="w-full flex flex-col justify-evenly gap-3">
                      <label className="font-semibold text-[#03e9f4]">
                        Year
                      </label>
                      <select
                        name="selectedFruit"
                        className="h-[3rem] p-2 w-full rounded-xl border border-[#03e9f4] bg-[#141e30]"
                        onChange={(e) =>
                          setBranchYear({
                            ...branchYear,
                            year: e.target.value,
                          })
                        }>
                        <option>--SELECT--</option>
                        <option>1st Year</option>
                        <option>2nd Year</option>
                        <option>3rd Year</option>
                        <option>4th Year</option>
                      </select>
                    </div>
                    <div className="modal-action">
                      <button type="submit">
                        <label
                          htmlFor="my-modal-3"
                          className="btn"
                          type="submit">
                          Submit
                        </label>
                      </button>
                    </div>
                    {/* <button htmlFor="my-modal-3" className="btn">
                      Submit
                    </button> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default ProfileDp;
