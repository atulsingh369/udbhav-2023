import React, { useState } from "react";

const Register = () => {
  const [state, setState] = useState("true");
  //true --> log in page
  //false --> register page
  const changeState = () => setState(!state);
  return (
    <div className="h-screen pt-20 flex justify-center items-center bg-form-background">
      <div className="bg-white shadow-2xl rounded-lg shadow-blue-800  w-96 flex flex-col items-center justify-evenly gap-7 p-5">
        {state && <p className="font-bold  text-3xl ">Log In</p>}
        {!state && <p className="font-bold  text-3xl ">Register</p>}
        {!state && (
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black font-semibold">
                What's Your Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        )}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-black font-semibold">
              Write Your Email
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs "
          />
        </div>
        {state && (
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black font-semibold">
                Type Your password
              </span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        )}
        {!state && (
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black font-semibold">
                Build Your password
              </span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        )}
        {state && <button className="btn  ">Log In</button>}
        {!state && <button className="btn  ">Register</button>}
        {state && (
          <p>
            Don't have an account? <span onClick={changeState}>Register</span>
          </p>
        )}
        {!state && (
          <p>
            Already registered? <span onClick={changeState}>Sign In</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;
