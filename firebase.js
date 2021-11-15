// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-2L0GxMs1zB5MKApnqPH7lzcivEvJqis",
  authDomain: "qadmin-dc411.firebaseapp.com",
  projectId: "qadmin-dc411",
  storageBucket: "qadmin-dc411.appspot.com",
  messagingSenderId: "850962196200",
  appId: "1:850962196200:web:231a4d1c6d6f59a1fa4b5d",
  measurementId: "G-V1MTFPFKE6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
