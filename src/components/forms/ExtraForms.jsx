import React from "react";
import { extraForms } from "../Data";
import { Link } from "react-router-dom";

const ExtraForms = () => {
  return (
    <>
      <div className="">
        {Object.entries(extraForms).map((item, i) => {
          return (
            <div
              className="grid grid-cols-1
                md:grid-cols-3 h-screen w-full "
            >
              <div
                key={i}
                className="login-box scrollbar-hidden w-full md:w-4/5 pt-20 md:pt-5 overflow-scroll h-screen md:h-fit mt-4 relative md:col-span-2"
              >
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
                        <div class="user-box">
                          <input type="file" name="" required="" />
                          <label>Upload {value.upload} in PNG form*</label>
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
                            <Link to={value.driveLink} target="_blank">Samples</Link>
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
