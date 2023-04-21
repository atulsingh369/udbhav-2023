import React, { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../config";
import { useDispatch } from "react-redux";
import { setUser } from "../store";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { doc, setDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

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
    if (!curUser.email || !curUser.password || !curUser.name) {
      toast.error("Enter Required Details");
      setCurUser({
        name: "",
        email: "",
        password: "",
      });

      setLoading(false);
      setPasswordType("password");
      return;
    }
    try {
      // await sendSignInLinkToEmail(auth, curUser.email, actionCodeSettings);
      const credential = await createUserWithEmailAndPassword(
        auth,
        curUser.email,
        curUser.password
      );
      const res = credential.user;
      await updateProfile(res, {
        displayName: curUser.name,
      });
      await sendEmailVerification(res);
      await setDoc(doc(db, "users", res.email), {
        uid: res.uid,
        displayName: res.displayName,
        photoURL: res.photoURL,
        email: res.email,
        branch: null,
        year: null,
      });
      toast.success("Registerd Succesfully");
      setLoading(false);
      setState(!state);
      setCurUser({
        name: "",
        email: "",
        password: "",
      });
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser && currentUser.uid === user.uid) {
          currentUser.reload();
          if (currentUser.emailVerified) {
            // Email is verified, do nothing
            unsubscribe(); // Stop listening for changes
          } else {
            // Email is not verified, delete the user
            deleteDoc(doc(db, "users", user.email));
            currentUser.delete();
            toast.error("Email not verified, account deleted.");
            unsubscribe(); // Stop listening for changes
          }
        }
      });
    } catch (error) {
      toast.error(error.code);
      setCurUser({
        name: "",
        email: "",
        password: "",
      });
      setLoading(false);
      setPasswordType("password");
    }
  };

  const signIn = async () => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, curUser.email, curUser.password)
      .then((userCredential) => {
        const res = userCredential.user;
        dispatch(setUser(res));
        toast.success(`Welcome ${res.displayName}`);
        setCurUser({
          name: "",
          email: "",
          password: "",
        });
        setTimeout(function () {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.code);
        setCurUser({
          name: "",
          email: "",
          password: "",
        });
        setLoading(false);
        setPasswordType("password");
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
        toast.success(`Welcome ${user.displayName}`);
        // IdP data available using getAdditionalUserInfo(result)
        dispatch(setUser(user));

        setDoc(doc(db, "users", user.email), {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
          branch: null,
          year: null,
        });
        setTimeout(function () {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        // Handle Errors here.
        toast(error);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        setCurUser({
          name: "",
          email: "",
          password: "",
        });
      });
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  //Form Display
  //true --> log in page
  //false --> register page
  const changeState = () => setState(!state);

  useEffect(() => {}, [loading]);

  return (
    <>
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

              <div className="form-control flex justify-center flex-row input-group w-full max-w-xs">
                <input
                  type={passwordType}
                  placeholder="Password"
                  name="password"
                  value={curUser.password}
                  onChange={(e) =>
                    setCurUser({ ...curUser, password: e.target.value })
                  }
                  autoComplete="off"
                  required
                  className="input bg-white border w-full border-base-100 shadow-lg  input-bordered  max-w-xs"
                />
                <button
                  onClick={togglePassword}
                  className="p-4 border border-base-100 bg-white text-black ">
                  {passwordType === "password" ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="btn" onClick={() => signUp()}>
                {loading ? "Registering..." : "Register"}
              </div>
              <ToastContainer />

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

              <div className="form-control flex justify-center flex-row input-group w-full max-w-xs">
                <input
                  type={passwordType}
                  placeholder="Password"
                  name="password"
                  value={curUser.password}
                  onChange={(e) =>
                    setCurUser({ ...curUser, password: e.target.value })
                  }
                  autoComplete="off"
                  required
                  className="input bg-white border w-full border-base-100 shadow-lg  input-bordered  max-w-xs"
                />
                <button
                  onClick={togglePassword}
                  className="p-4 border border-base-100 bg-white text-black ">
                  {passwordType === "password" ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="btn" onClick={() => signIn()}>
                {loading ? "Loading.." : "Log In"}
              </div>
              <ToastContainer />

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
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
