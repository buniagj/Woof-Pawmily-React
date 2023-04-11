// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB96Ico_sTnc4p2_5BuCJ7CZLWLDCBLcrc",
  authDomain: "woof-pawmily.firebaseapp.com",
  projectId: "woof-pawmily",
  storageBucket: "woof-pawmily.appspot.com",
  messagingSenderId: "18139104923",
  appId: "1:18139104923:web:d7993a61dd10c2059f683e",
  measurementId: "G-SQCRE1NK9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const firestore = getFirestore(app, { cacheSizeBytes: 10000000 });

export { auth, createUserWithEmailAndPassword, firestore }