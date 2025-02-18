// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFbCcnIYxrSrupwg2xvRVrwSYpH6YEmlA",
  authDomain: "react-curso-6bf0f.firebaseapp.com",
  projectId: "react-curso-6bf0f",
  storageBucket: "react-curso-6bf0f.firebasestorage.app",
  messagingSenderId: "474759512306",
  appId: "1:474759512306:web:b5cc9ed009e6fddb05106b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)