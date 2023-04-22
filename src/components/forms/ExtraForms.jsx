import React, { useState } from "react";
import { extraForms } from "../Data";
import { Link, useNavigate } from "react-router-dom";
import { db, storage } from "../../config";
import { useSelector } from "react-redux";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { doc, setDoc } from "@firebase/firestore";
import { ToastContainer, toast } from "react-toastify";

const ExtraForms = () => {
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [phn, setPhn] = useState();

  const [avatar, setAvatar] = useState(
    "https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxpZ2h0JTIwaWNvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  );

  const handleChange = async (e) => {
    setImage(e.target.files[0]);
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!image) {
      toast.error("Enter Logo");
      setLoading(false);
      setAvatar(
        "https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxpZ2h0JTIwaWNvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      );
      return;
    } else {
      const imageRef = ref(storage, `logo_${user.displayName}`);
      await uploadBytes(imageRef, image);
      const url = await getDownloadURL(imageRef);
      await setDoc(doc(db, "logo-competition", user.displayName), {
        Name: user.displayName,
        Email: user.email,
        Phone: phn,
        Link: url,
      });
      toast.success("Logo Submitted");
      setLoading(false);
      setAvatar(
        "https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxpZ2h0JTIwaWNvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      );
      setTimeout(function () {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <>
      <div className="">
        {Object.entries(extraForms).map((item, i) => {
          return (
            <div
              key={i}
              className="grid grid-cols-1
                md:grid-cols-3 h-screen w-full "
            >
              <div
                key={i}
                className="login-box scrollbar-hidden w-full md:w-4/5 pt-20 md:pt-5 overflow-scroll h-screen md:h-fit mt-4 relative md:col-span-2"
              >
                {item[1].map((value, index) => {
                  return (
                    <div key={index} className="grid place-items-center p-5 border-2 border-[#03e9f4] rounded-lg">
                      <h2 className="text-2xl font-semibold">{value.title}</h2>
                      <div className="user-box w-80">
                        <input
                          maxlength="10"
                          type="tel"
                          name="phnNo"
                          value={phn}
                          onChange={(e) => setPhn(e.target.value)}
                          required=""
                        />
                        <label>Phone No*</label>
                      </div>
                      <label
                        className="flex items-center space-x-6 border-2 border-dashed border-[#03e9f4] p-5 rounded-xl cursor-pointer"
                        htmlFor="logo"
                      >
                        <div className="shrink-0">
                          <img
                            className="h-16 w-16 object-cover rounded-full"
                            src={avatar}
                            alt="Current profile photo"
                          />
                        </div>

                        <input
                          onChange={handleChange}
                          type="file"
                          id="logo"
                          accept="image/jpeg,image/jpg,image/png"
                          className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#03e9f4] file:text-black hover:file:cursor-pointer"
                        />
                      </label>

                      <div className="flex gap-5 items-center ">
                        <button
                          onClick={handleSubmit}
                          className="submit"
                          type="submit"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          {loading ? "Submitting" : "Submit"}
                        </button>
                        <button className="submit" type="submit">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <Link to={value.driveLink} target="_blank">
                            Samples
                          </Link>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className=" h-screen w-full p-5 pt-10 md:pt-24  text-white bg-[#101a26] md:rounded-lg md:shadow-lg md:shadow-black/80 flex flex-col gap-4 overflow-y-scroll">
                <h3 className="font-bold text-3xl text-center underline">
                  {item[1][0].title}
                </h3>
                <ul className="list-disc space-y-1  pl-8 leading-8">
                  {item[1][0].description.map((desc, num) => {
                    return <li key={num}>{desc}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
        <ToastContainer />
      </div>
    </>
  );
};

export default ExtraForms;
