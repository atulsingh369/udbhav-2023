import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: " ",
    email: " ",
    password: " ",
  });

  const [state, setState] = useState("true");
  //true --> log in page
  //false --> register page
  const changeState = () => setState(!state);
  return (
    <div className="h-screen flex justify-center items-center bg-form-background">
      <div className="bg-white shadow-2xl rounded-lg shadow-blue-800  md:w-96 w-1/2 flex flex-col items-center justify-evenly gap-7 p-5">
        {state && <p className="font-bold  text-3xl ">Log In</p>}
        {!state && <p className="font-bold  text-3xl ">Register</p>}
        {!state && (
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Username"
              autoComplete="off"
              required
              className="input bg-white border border-base-100 shadow-lg   input-bordered w-full max-w-xs"
            />
          </div>
        )}
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Email"
            autoComplete="off"
            required
            className="input bg-white border border-base-100 shadow-lg  input-bordered w-full max-w-xs "
          />
        </div>
        {state && (
          <div className="form-control w-full max-w-xs">
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              required
              className="input bg-white border border-base-100 shadow-lg  input-bordered w-full max-w-xs"
            />
          </div>
        )}
        {!state && (
          <div className="form-control w-full max-w-xs">
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              required
              className="input bg-white border border-base-100 shadow-lg  input-bordered w-full max-w-xs"
            />
          </div>
        )}
        {state && (
          <button type="sumit" className="btn  ">
            Log In
          </button>
        )}
        {!state && (
          <button type="sumit" className="btn  ">
            Register
          </button>
        )}
        {state && (
          <p>
            Don't have an account?{" "}
            <span
              onClick={changeState}
              className="cursor-pointer text-blue-500"
            >
              Register
            </span>
          </p>
        )}
        {!state && (
          <p>
            Already have an account? &nbsp;
            <span
              onClick={changeState}
              className="cursor-pointer text-blue-500"
            >
              Sign In
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;
