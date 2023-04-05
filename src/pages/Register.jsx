import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../config";
import { useDispatch } from "react-redux";
import { setUser } from "../store";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [curUser, setCurUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signUp = async () => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, curUser.email, curUser.password)
      .then((userCredential) => {
        const res = userCredential.user;
        console.log(res);
        updateProfile(res, {
          displayName: curUser.name,
        })
          .then(() => {
            console.log("Profile Updated");
            setState(!state);
            setCurUser({
              name: "",
              email: "",
              password: "",
            });
            window.alert("Registered");
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  const signIn = async () => {
    await signInWithEmailAndPassword(auth, curUser.email, curUser.password)
      .then((userCredential) => {
        const res = userCredential.user;
        dispatch(setUser(res));
        navigate("/");
        setCurUser({
          name: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log(err);
      });
  };

  // //Form Registerd
  // const postData = async (event) => {
  //   event.preventDefault();

  //   const { name, email, password } = curUser;

  //   if (name && email && password) {
  //     const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  //     if (regEx.test(email)) {
  //       const res = await fetch(
  //         "https://udbhav-22dbd-default-rtdb.firebaseio.com/Udbhav2k23_users.json",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             name,
  //             email,
  //             password,
  //           }),
  //         }
  //       );

  //       createUserWithEmailAndPassword(auth, email, password)
  //         .then((userCredential) => {
  //           // Signed in
  //           const curUser = userCredential.curUser;
  //           console.log(curUser);
  //         })
  //         .catch((error) => {
  //           const errorCode = error.code;
  //           const errorMessage = error.message;
  //           console.log(errorCode, errorMessage);
  //         });

  //       //Empting the column
  //       if (res) {
  //         setCurUser({
  //           name: "",
  //           email: "",
  //           password: "",
  //         });
  //       }

  //       alert("Data Stored");
  //     } else {
  //       alert("Enter Correct Email");
  //     }
  //   } else {
  //     alert("please fill all Columns");
  //   }
  // };

  // //Login Done
  // const getData = async (e) => {
  //   e.preventDefault();

  //   const res = await fetch(
  //     "https://udbhav-22dbd-default-rtdb.firebaseio.com/Udbhav2k23_users.json"
  //   );

  //   if (res) {
  //     setCurUser({
  //       name: "",
  //       email: "",
  //       password: "",
  //     });
  //   }

  //   console.log("Login");
  // };

  //Form Display
  //true --> log in page
  //false --> register page
  const changeState = () => setState(!state);
  return (
    <div className="h-screen pt-20 flex justify-center items-center bg-form-background">
      {!state && (
        //Register Page

        <div className="bg-white shadow-2xl rounded-lg shadow-blue-800 md:h-auto h-screen md:w-96 w-screen flex flex-col items-center justify-evenly gap-7 p-5">
          <p className="font-bold  text-3xl ">Register</p>

          <div className="form-control w-full max-w-xs">
            <input
              name="name"
              autoFocus
              value={curUser.name}
              onChange={(e) => setCurUser({ ...curUser, name: e.target.value })}
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
              value={curUser.email}
              onChange={(e) =>
                setCurUser({ ...curUser, email: e.target.value })
              }
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
              value={curUser.password}
              onChange={(e) =>
                setCurUser({ ...curUser, password: e.target.value })
              }
              autoComplete="off"
              required
              className="input bg-white border border-base-100 shadow-lg  input-bordered w-full max-w-xs"
            />
          </div>

          <input
            value="Register"
            type={loading ? "Registering..." : "Register"}
            className="btn"
            onClick={() => signUp()}
          />

          <p>
            Already registered? &nbsp;
            <span
              onClick={changeState}
              className="cursor-pointer text-blue-500">
              Sign In
            </span>
          </p>
        </div>
      )}
      {state && (
        // Login Page

        <div className="bg-white shadow-2xl rounded-lg shadow-blue-800 md:h-auto h-screen md:w-96 w-screen flex flex-col items-center justify-evenly gap-7 p-5">
          <p className="font-bold  text-3xl ">Log In</p>

          <div className="form-control w-full max-w-xs">
            <input
              autoFocus
              type="text"
              name="email"
              value={curUser.email}
              onChange={(e) =>
                setCurUser({ ...curUser, email: e.target.value })
              }
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
              value={curUser.password}
              onChange={(e) =>
                setCurUser({ ...curUser, password: e.target.value })
              }
              autoComplete="off"
              required
              className="input bg-white border border-base-100 shadow-lg  input-bordered w-full max-w-xs"
            />
          </div>

          <input
            value="Log In"
            type="submit"
            className="btn "
            onClick={() => signIn()}
          />
          <p>
            Don't have an account?&nbsp;
            <span
              onClick={changeState}
              className="cursor-pointer text-blue-500">
              &nbsp;Register
            </span>
          </p>
        </div>
      )}
      ;
    </div>
  );
};

export default Register;
