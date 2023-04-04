import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = () => {};

  const [state, setState] = useState("false");
  //true --> log in page
  //false --> register page
  const changeState = () => setState(!state);
  return (
    <div className="h-screen pt-20 flex justify-center items-center bg-form-background">
      {!state && (
        <form
          onSubmit={postData}
          method="POST"
          className="bg-white shadow-2xl rounded-lg shadow-blue-800 md:h-auto h-screen md:w-96 w-screen flex flex-col items-center justify-evenly gap-7 p-5">
          <p className="font-bold  text-3xl ">Register</p>

          <div className="form-control w-full max-w-xs">
            <input
              name="name"
              autoFocus
              value={user.name}
              onChange={getUserData}
              type="text"
              placeholder="Username"
              autoComplete="off"
              required
              className="input bg-white border border-base-100 shadow-lg   input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <input
              autoFocus
              type="text"
              name="email"
              value={user.email}
              onChange={getUserData}
              placeholder="Email"
              autoComplete="off"
              required
              className="input bg-white border border-base-100 shadow-lg  input-bordered w-full max-w-xs "
            />
					</div>
					
          <div className="form-control w-full max-w-xs">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={getUserData}
              autoComplete="off"
              required
              className="input bg-white border border-base-100 shadow-lg  input-bordered w-full max-w-xs"
            />
          </div>

          <input value="Register" type="submit" className="btn  " />

          <p>
            Already registered?{" "}
            <span
              onClick={changeState}
              className="cursor-pointer text-blue-500">
              Sign In
            </span>
          </p>
        </form>
      )}
      {state && (
        <form
          onSubmit={postData}
          method="POST"
          className="bg-white shadow-2xl rounded-lg shadow-blue-800 md:h-auto h-screen md:w-96 w-screen flex flex-col items-center justify-evenly gap-7 p-5">
          <p className="font-bold  text-3xl ">Log In</p>

          <div className="form-control w-full max-w-xs">
            <input
              autoFocus
              type="text"
              name="email"
              value={user.email}
              onChange={getUserData}
              placeholder="Email"
              autoComplete="off"
              required
              className="input bg-white border border-base-100 shadow-lg  input-bordered w-full max-w-xs "
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={getUserData}
              autoComplete="off"
              required
              className="input bg-white border border-base-100 shadow-lg  input-bordered w-full max-w-xs"
            />
          </div>

          <input value="Log In" type="submit" className="btn  " />
          <p>
            Don't have an account?
            <span
              onClick={changeState}
              className="cursor-pointer text-blue-500">
              Register
            </span>
          </p>
        </form>
      )}
      ;
    </div>
  );
};

export default Register;

{
  /* import React, { useState } from "react";

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

export default Register; */
}
