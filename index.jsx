// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlsAMANt6_ozdbM2Zl287P12H10JDNboc",
  authDomain: "e-commerce-d050b.firebaseapp.com",
  projectId: "e-commerce-d050b",
  storageBucket: "e-commerce-d050b.appspot.com",
  messagingSenderId: "585621892441",
  appId: "1:585621892441:web:321fb786ee6398db257048"
};

// Initialize Firebase
const Firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(Firebase_app);


export {Firebase_app,auth}
