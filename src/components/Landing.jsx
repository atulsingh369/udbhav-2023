import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas, StarsCanvas } from "./canvas";
import Spline from "@splinetool/react-spline";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { slideIn } from "../utils/motion";
import { Link, useNavigate } from "react-router-dom";
import MainLoader from "./MainLoader";
import { useSelector } from "react-redux";

const Landing = () => {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {}, [loading]);
  return (
    <>
      {loading ? (
        <MainLoader />
      ) : (
        <div className="">
          <div
            className={` grid grid-cols-1 md:grid-cols-2  overflow-hidden  bg-home-background bg-cover h-screen items-center`}
          >
            <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
              <div className="flex flex-col justify-center items-center gap-5">
                <div
                  id="text-drop"
                  className=" flex flex-row items-center justify-center h-fit pt-16 md:pt-0  "
                >
                  <div className="u text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
                    U
                  </div>
                  <div className="d text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
                    D
                  </div>
                  <div className="b text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
                    B
                  </div>
                  <div className="h text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
                    H
                  </div>
                  <div className="a text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
                    A
                  </div>
                  <div className="v text-white font-semibold text-8xl lg:text-8xl xl:text-[7rem]">
                    V
                  </div>
                </div>
                <div
                  className="card w-96 text-white border border-white  "
                  id="card-home"
                >
                  <div className="card-body">
                    <p className="leading-7 tracking-wide font-semibold">
                      Udbhav is a Sanskrit word which means "origin" or
                      "source". It is often used to refer to the beginning or
                      creation of something.
                    </p>
                    <div className="card-actions justify-end">
                      {user ? (
                        <Link to="/tour">
                          <button className="btn bg-base-100 border-none">
                            Know More
                          </button>
                        </Link>
                      ) : (
                        <button
                          className="btn bg-base-100 border-none"
                          onClick={() => navigate("/register")}
                        >
                          Register
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            {/* <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className=" xl:flex-1  h-[550px] w-full justify-center items-center"
            >
              <EarthCanvas />
            </motion.div> */}
            {/* <div className=" h-fit w-full flex"> */}
            <Spline scene="https://prod.spline.design/XJLCuHcCya38qy9n/scene.splinecode" />          </div>
          {/* </div> */}
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default Landing;
