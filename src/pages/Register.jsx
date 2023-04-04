import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../config'

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  //Form Registerd
  const postData = async (event) => {
    event.preventDefault();

    const { name, email, password } = user;

    if (name && email && password) {
      const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
			if (regEx.test(email)) {
				
        const res = await fetch(
          "https://udbhav-22dbd-default-rtdb.firebaseio.com/Udbhav2k23_users.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          }
        );

				createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
						const user = userCredential.user;
						console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           console.log(errorCode, errorMessage);
          });

				

        //Empting the column
        if (res) {
          setUser({
            name: "",
            email: "",
            password: "",
          });
        }

        alert("Data Stored");
      } else {
        alert("Enter Correct Email");
      }
    } else {
      alert("please fill all Columns");
    }
  };

  //Login Done
  const getData = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://udbhav-22dbd-default-rtdb.firebaseio.com/Udbhav2k23_users.json"
    );

    if (res) {
      setUser({
        name: "",
        email: "",
        password: "",
      });
    }

    console.log("Login");
  };

  //Form Display
  const [state, setState] = useState("false");
  //true --> log in page
  //false --> register page
  const changeState = () => setState(!state);
  return (
    <div className="h-screen pt-20 flex justify-center items-center bg-form-background">
      {!state && (
        //Register Page

        <form
          onSubmit={postData}
          method="POST"
          className="bg-white shadow-2xl rounded-lg shadow-blue-800 md:h-auto h-screen md:w-96 w-screen flex flex-col items-center justify-evenly gap-7 p-5"
        >
          <p className="font-bold  text-3xl ">Register</p>

          <div className="form-control w-full max-w-xs">
            <input
              name="name"
              autoFocus
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              type="text"
              placeholder="Username"
              autoComplete="off"
              required
              className="input bg-white border border-base-100 shadow-lg   input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              autoComplete="off"
              required
              className="input bg-white border border-base-100 shadow-lg  input-bordered w-full max-w-xs"
            />
          </div>

          <input value="Register" type="submit" className="btn" />

          <p>
            Already registered? &nbsp;
            <span
              onClick={changeState}
              className="cursor-pointer text-blue-500"
            >
              Sign In
            </span>
          </p>
        </form>
      )}
      {state && (
        // Login Page

        <form
          onSubmit={getData}
          method="POST"
          className="bg-white shadow-2xl rounded-lg shadow-blue-800 md:h-auto h-screen md:w-96 w-screen flex flex-col items-center justify-evenly gap-7 p-5"
        >
          <p className="font-bold  text-3xl ">Log In</p>

          <div className="form-control w-full max-w-xs">
            <input
              autoFocus
              type="text"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              autoComplete="off"
              required
              className="input bg-white border border-base-100 shadow-lg  input-bordered w-full max-w-xs"
            />
          </div>

          <input value="Log In" type="submit" className="btn  " />
          <p>
            Don't have an account?&nbsp;
            <span
              onClick={changeState}
              className="cursor-pointer text-blue-500">
              &nbsp;Register
            </span>
          </p>
        </form>
      )}
      ;
    </div>
  );
};

export default Register;

