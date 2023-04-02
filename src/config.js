import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYOyKkZwmCiant4WQYiRNqN9AiC87pqA8",
  authDomain: "udbhav-22dbd.firebaseapp.com",
  projectId: "udbhav-22dbd",
  storageBucket: "udbhav-22dbd.appspot.com",
  messagingSenderId: "334534691997",
  appId: "1:334534691997:web:ae3a9588c39be95eb7d874",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
