// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArNmRpYu_fUW4zldY1u_xViNJVplnS-l0",
  authDomain: "hospitalityfinder-a3069.firebaseapp.com",
  projectId: "hospitalityfinder-a3069",
  storageBucket: "hospitalityfinder-a3069.appspot.com",
  messagingSenderId: "903327278882",
  appId: "1:903327278882:web:0784ba9b21884d762d677b",
  measurementId: "G-8M96E0PGFL",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const firebase = {
  auth,
  googleProvider,
  facebookProvider,
};
