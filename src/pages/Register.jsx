import React, { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config";
import { useDispatch } from "react-redux";
import { setUser } from "../store";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const provider = new GoogleAuthProvider();
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
        console.log(error);
        window.alert(error);
      });
  };

  const googleLogin = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        console.log(user);
        dispatch(setUser(user));
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  //Form Display
  //true --> log in page
  //false --> register page
  const changeState = () => setState(!state);
  return (
    <div className="h-screen pt-32 flex justify-center items-center bg-form-background">
      <div className="bg-white shadow-2xl  rounded-lg shadow-blue-800 md:h-auto h-screen md:w-96 w-screen p-5">
        {!state && (
          //Register Page
          <div className="flex pt-4 md:pt-0 flex-col items-center justify-evenly gap-7">
            <p className="font-bold  text-3xl ">Register</p>

            <div className="form-control w-full max-w-xs">
              <input
                name="name"
                autoFocus
                value={curUser.name}
                onChange={(e) =>
                  setCurUser({ ...curUser, name: e.target.value })
                }
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
              className="btn select-none"
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
          <div className="flex flex-col items-center justify-evenly gap-7">
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
        <div className="flex flex-col justify-center items-center">
          <p className="mb-4">OR</p>
          <GoogleButton onClick={googleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Register;
