// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {FacebookAuthProvider, getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVCC-iD6LCgESqOlx2b7DjTLzR-HANgn8",
  authDomain: "hospitality-a746d.firebaseapp.com",
  projectId: "hospitality-a746d",
  storageBucket: "hospitality-a746d.appspot.com",
  messagingSenderId: "705507891062",
  appId: "1:705507891062:web:1a38ebc3f3d32dc49fcc57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const firebase = {
    auth,
    googleProvider,
    facebookProvider
}



