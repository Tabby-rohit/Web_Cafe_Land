// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZXwTVFdldUTFb14wlP6s0YP81RpeqMqU",
  authDomain: "webcafeland-30345.firebaseapp.com",
  projectId: "webcafeland-30345",
  storageBucket: "webcafeland-30345.firebasestorage.app",
  messagingSenderId: "309969584234",
  appId: "1:309969584234:web:25f378065a4d9e20ee0a13",
  measurementId: "G-X48DWS14DE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);