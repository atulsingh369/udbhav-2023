import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDYOyKkZwmCiant4WQYiRNqN9AiC87pqA8",
	authDomain: "udbhav-22dbd.firebaseapp.com",
	databaseURL: "https://udbhav-22dbd-default-rtdb.firebaseio.com",
	projectId: "udbhav-22dbd",
	storageBucket: "udbhav-22dbd.appspot.com",
	messagingSenderId: "334534691997",
	appId: "1:334534691997:web:2ec5c47e9db55032b7d874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
