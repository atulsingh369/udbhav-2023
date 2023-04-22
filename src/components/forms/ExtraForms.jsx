import React, { useState } from "react";
import { extraForms } from "../Data";
import { Link, useNavigate } from "react-router-dom";

const ExtraForms = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    phnNo: "",
    email: "",
    file: "",
  };

  const [form, setForm] = useState(initialValues);

  const submitSolo = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!values.mName || !values.email || !values.phnNo) {
      toast.error("Enter Details");
      setLoading(false);
      setValues(initialValues);
      return;
    } else {
      await setDoc(doc(db, id, values.email), {
        Name: values.mName,
        Email: values.email,
        phoneNo: values.phnNo,
      });
      toast.success("Submitted");
      setLoading(false);
      setValues(initialValues);
      setTimeout(function () {
        navigate("/cultural");
      }, 2000);
    }
  };

  return (
    <>
      <div className="">
        {Object.entries(extraForms).map((item, i) => {
          return (
            <div
              className="grid grid-cols-1
                md:grid-cols-3 h-screen w-full ">
              <div
                key={i}
                className="login-box scrollbar-hidden w-full md:w-4/5 pt-20 md:pt-5 overflow-scroll h-screen md:h-fit mt-4 relative md:col-span-2">
                {item[1].map((value, index) => {
                  return (
                    <div key={index}>
                      <h2 className="text-2xl font-semibold">{value.title}</h2>
                      <div>
                        <div class="user-box">
                          <input type="text" name="" required="" />
                          <label>Name*</label>
                        </div>
                        <div class="user-box">
                          <input type="text" name="" required="" />
                          <label>Phone No*</label>
                        </div>
                        <div class="user-box">
                          <input type="text" name="" required="" />
                          <label>Email*</label>
                        </div>
                        {/* <div class="user-box">
                          <input
                            id="files"
                            type="file"
                            name=""
                            className="file:bg-red-500"
                            required=""
                          />
                          <label htmlFor="files">
                            Upload {value.upload} in PNG format*
                          </label>
                        </div> */}
                        <div class="flex items-center space-x-6">
                          <div class="shrink-0">
                            <img
                              class="h-16 w-16 object-cover rounded-full"
                              src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxpZ2h0JTIwaWNvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                              alt="Current profile photo"
                            />
                          </div>
                          <label class="block">
                            <input
                              type="file"
                              class="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#03e9f4] file:text-black hover:file:cursor-pointer"
                            />
                            <span class="text-end text-white text-xs">
                              * Upload {value.upload} in PNG format
                            </span>
                          </label>
                        </div>

                        <div className="flex gap-5 items-center ">
                          <button className="submit" type="submit">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
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
                    return <li>{desc}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ExtraForms;
